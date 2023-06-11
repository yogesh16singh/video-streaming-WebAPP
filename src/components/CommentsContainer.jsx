import React, { useEffect, useState } from 'react'
import { YOUTUBE_COMMENTSDATA_API } from '../../helper';
import { Comments } from './Comments';
import Replie from './replie';

const CommentsContainer = (props) => {
    const [commentsData, setCommentsData] = useState([]);
    const [showComment, setShowComments] = useState(false);
    useEffect(() => {
        GetCommentsData();
    }, [])
    const GetCommentsData = async () => {
        const data = await fetch(YOUTUBE_COMMENTSDATA_API + props.id);
        const json = await data.json();
        setCommentsData(json);
        console.log(json.pageInfo.totalResults);
        console.log(json.items[0].snippet);
        console.log(json.items[0].snippet.totalReplyCount);
        console.log(json.items[0].snippet.topLevelComment.snippet.authorDisplayName);
        console.log(json.items[0].snippet.topLevelComment.snippet.authorProfileImageUrl);
        console.log(json.items[0].snippet.topLevelComment.snippet.textDisplay);
        console.log(json.items[0].snippet.topLevelComment.snippet);
        console.log(json.items[0].replies);

        setShowComments(true);
    }
    return (
        <>

            {showComment && commentsData.items.map((Comment) => {
                return <div key={Comment.snippet.topLevelComment.id}> <Comments Comment={Comment} ></Comments>
                    {(Comment.snippet.totalReplyCount > 0) ? <h1 className='mx-24 font-semibold text-lg'>Replies -</h1> : null}
                    {(Comment.snippet.totalReplyCount > 0) ?

                        Comment.replies.comments.map((replie) => {

                            return <div className='mx-24' key={replie.id}><Replie replie={replie}></Replie></div>
                        })

                        : null
                    }
                </div>
            })}

        </>
    )
}

export default CommentsContainer