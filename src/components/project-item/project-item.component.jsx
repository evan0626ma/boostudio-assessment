import React from 'react';

import './project-item.styles.scss';




const ProjectItem =({id,title,imageUrl,linkUrl})=>(
  

        <div  className='project-item'>
            
        <div className='background-image' 
        style={{
          
          backgroundImage: `url(${imageUrl})`,
          
        }} />
           <div className='item-content'>
             <span className='title'>{title}</span>
           </div>
        </div>

        
  )

export default ProjectItem;