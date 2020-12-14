import React from 'react';
import './banner.styles.scss'
import ReactPlayer from 'react-player/lazy'



const Banner = () => {
    return (
        <div className='main_banner'>
           <div className="cover">
           <ul className="">
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
           </ul>
           </div> 
          <ReactPlayer 
          width="1920px" 
          height="1080px" 
          controls playing='true' muted url="https://video.wixstatic.com/video/44e661_3b0dd98fd8174edcaf41bb8fa9e52d26/360p/mp4/file.mp4"/>
        </div>
        
    )
}





export default Banner;