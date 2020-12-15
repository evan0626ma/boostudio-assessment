import React from 'react';
import {withRouter} from 'react-router-dom';
import './project-item.styles.scss';


const ProjectItem =({title,imageUrl,linkUrl})=>(


        <div  className='project-item'
            onClick={()=>this.push(`${linkUrl}`)}
        
        >
            
           <div className='background-image'
             style={{
                 backgroundImage:`url($(imageUrl))`
             }}
            />
           <div className='item-content'>
             <h3 className='title'>{title}</h3>
           </div>
        </div>

    

);

export default withRouter (ProjectItem);