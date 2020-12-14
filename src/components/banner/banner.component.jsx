import React from 'react';
import './banner.styles.scss';
import ReactPlayer from 'react-player/lazy';
import {zIndex} from 'react-z-index';
import logo from '../../img/BOOStudio_Logo.jpg';




const Banner = () => {
    return (
        <div className='main_banner' zIndex={1}>
           <div className="cover" zIndex={2}>
            <ul className="navigate" zIndex={2}>
               <li>Home</li>
               <li>Project</li>
               <li>Services</li>
               <li>Contact</li>
               <li>About</li>
               <li>Careers</li>
               <li>BOOHUB</li>          
             </ul>
            <div className='logo'  zIndex={2}>
             
            <img src={logo} alt='logo' />

            </div>
           
          <ReactPlayer 
             width="100%" 
             height="100%"
             playing='true' 
             loop='true'
             muted 
             url="https://video.wixstatic.com/video/44e661_3b0dd98fd8174edcaf41bb8fa9e52d26/360p/mp4/file.mp4"/>

         </div>    
        </div>
        
    )
}





export default Banner;