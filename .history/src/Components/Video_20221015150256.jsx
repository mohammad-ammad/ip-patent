import React from 'react'
import bgVideo from '../assets/video.mp4';
const Video = () => {
  return (
  <>
    <div className='w-full h-fit'>
        <video className='w-full h-full object' src={bgVideo} autoPlay loop muted/>
    </div>
  </>
  )
}

export default Video