import React from 'react'
import video from './car_montage_AdobeExpress.mp4';
import './Header.css';

function Header() {
  return (
    <div>
      <video class="video-container"  autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      {/* <video src='./car_montage.mp4' autoPlay loop muted/> */}
    </div>
  )
}

export default Header