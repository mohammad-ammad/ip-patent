import React from 'react'
import bgVideo from '../assets/video.mp4';
const Video = () => {
  return (
  <>
    <div className='main'>
        <video src={bgVideo} />
    </div>
  </>
  )
}

export default Video