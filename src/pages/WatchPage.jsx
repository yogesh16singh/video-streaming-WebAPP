import React from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from '../components/CommentsContainer';

const WatchPage = () => {
    const [seachParams] = useSearchParams();
    console.log(seachParams.get("v"));
    return (
        <>
            <div className='flex flex-col'>
                <iframe width="800" height="430" src={"https://www.youtube.com/embed/" + seachParams.get("v")} title="YouTube video player"
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>

                <CommentsContainer></CommentsContainer>
            </div>
        </>
    )
}

export default WatchPage