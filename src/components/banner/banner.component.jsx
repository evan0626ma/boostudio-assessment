import React from 'react';
import './banner.styles.scss';
import ReactPlayer from 'react-player/lazy';
import logo from '../../img/BOOStudio_Logo.png';




const Banner = () => {
    return (
        <div className='main_banner' >
           <div className="cover" >
            <ul className="navigate" >
               <li>Home</li>
               <li>Project</li>
               <li>Services</li>
               <li>Contact</li>
               <li>About</li>
               <li>Careers</li>
               <button>BOOHUB</button>          
             </ul>
             <img 
             style={{
                margin: '300px auto 0 auto',
                display: 'block',      
                width: '15vw',
                borderRadius: '50px',
                mozBorderRadius: '50px',
                webkitBordeRadius: '50px',
                marginBottom:'50px'
             }}
              src={logo} alt="logo"/>
             <h2>
             WELCOME TO BOOSTUDIO! <br/>
             YOUR BRAND ACTIVATION PARTNER<br/>
             </h2>
             <h3>
             Helping you deliver unique, impactful brand experiences in retail, design, events, & technology.
             </h3>
           
           </div>  
          <ReactPlayer 
             width="100%" 
             height="100%"
             playing='true' 
             loop='true'
             muted 
             url="https://video.wixstatic.com/video/44e661_3b0dd98fd8174edcaf41bb8fa9e52d26/360p/mp4/file.mp4"/>

           
        </div>
        
    )
}





export default Banner;