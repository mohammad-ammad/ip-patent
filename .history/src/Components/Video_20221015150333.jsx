import React from 'react'
import bgVideo from '../assets/video.mp4';
const Video = () => {
  return (
  <>
    <div className='w-full h-fit'>
        <video  src={bgVideo} autoPlay loop muted/>
    </div>
  </>
  )
}

export default Video