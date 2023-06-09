import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'

const VideoCardContainer = () => {
    const [videoCardContainerData, setVideoCardContainerData] = useState([]);
    useEffect(() => {
        LoadData();
    }, [])
    const LoadData = async () => {
        await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyBKaS_Xtk_wPHidUFQOkFSgDWRne688fp0")
            .then(response => {
                return response.json()
            })
            .then(data => {
                // console.log(data)
                setVideoCardContainerData(data.items);
            })
    }
    if (videoCardContainerData.length == 0)
        return;
    else return (
        <>
            <div className='flex flex-wrap'>
                {
                    videoCardContainerData.map((singleCardData) => {
                        return <VideoCard key={singleCardData.id} videocarddata={singleCardData}></VideoCard>
                    })
                }

            </div>
        </>
    )
}

export default VideoCardContainer