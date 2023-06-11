import React, { useEffect, useState } from 'react'
import { YOUTUBE_COMMENTSDATA_API } from '../../helper';
import { Comments } from './Comments';

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
                return <>
                    <Comments Comment={Comment} key={Comment.snippet.topLevelComment.id}></Comments>
                </>
            })}

        </>
    )
}

export default CommentsContainer