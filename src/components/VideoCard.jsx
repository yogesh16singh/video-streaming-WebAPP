import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = (props) => {
    console.log(props.videocarddata.snippet)
    return (
        <>
            <Link to={"/watch?v=" + props.videocarddata.id}>
                <div className='m-1 p-1 w-64 shadow-md'>
                    <img className='' alt='video' src={props.videocarddata.snippet.thumbnails.medium.url}></img>
                    <div className='p-2'>
                        <p className='font-semibold'>{props.videocarddata.snippet.localized.title.slice(0, 26)} ...</p>
                        <p className='text-gray-500'>{props.videocarddata.snippet.channelTitle}</p>
                        <p className='text-gray-500'>{Math.trunc(props.videocarddata.statistics.viewCount / 1000)}K views</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default VideoCard