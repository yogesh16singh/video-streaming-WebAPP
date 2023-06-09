import React from 'react'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
    const [seachParams] = useSearchParams();
    console.log(seachParams.get("v"));
    return (
        <>
            <iframe width="800" height="430" src={"https://www.youtube.com/embed/" + seachParams.get("v")} title="YouTube video player"
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </>
    )
}

export default WatchPage