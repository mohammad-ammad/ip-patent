import React from 'react'
import '../App.css'
import bgVideo from '../assets/video.mp4';
const Video = () => {
  return (
  <>
    <div className='main'>
        <video  src={bgVideo} autoPlay loop muted/>
    </div>
  </>
  )
}

export default Video