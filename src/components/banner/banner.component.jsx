import React from 'react';
import '../../video/brief_video.mp4';




const Video = () => {
    return (
            <video autoPlay playsInline muted src={Video} />
 
    );
}


class Banner extends React.Component{
    constructor(){
        super();
    }

    render (){

        return(
        <div className='main_banner'>
            
            <Video />            
    
        </div>

        )

    }


}




export default Banner;