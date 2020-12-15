import React from 'react';
import ProjectItem from '../project-item/project-item.component';
import '././project-menu.styles.scss';
import {zIndex} from 'react-z-index';


class ProjectMenu extends React.Component{
       
    constructor(){
        super();

        this.state ={

            sections:[
                {
                    title:'Bailey Nelson',
                    imageUrl:'../../img/Projects/b-n.jpg',
                    id:1,
                    linkUrl:'project/BN'
                },
                {
                    title:'Don Julio',
                    imageUrl:'../../img/Projects/donjulio.jpg',
                    id:2,
                    linkUrl:'project/Donjulio'
                },
                {
                    title:'Google Pixel',
                    imageUrl:'../../img/Projects/google-pixel.jpg',
                    id:3,
                    linkUrl:'project/Google-pixel'
                },
                {
                    title:'Heineken',
                    imageUrl:'../../img/Projects/heineken.jpg',
                    id:4,
                    linkUrl:'project/Heineken'
                },
                {
                    title:'NSW Blues',
                    imageUrl:'../../img/Projects/nsw-blue.jpg',
                    id:5,
                    linkUrl:'project/NSW-Blues'
                },
                {
                    title:'Panhead',
                    imageUrl:'../../img/Projects/panhead.jpg',
                    id:6,
                    linkUrl:'project/Panhead'
                },
                {
                    title:'Smirnoff',
                    imageUrl:'../../img/Projects/smirnoff.jpg',
                    id:7,
                    linkUrl:'project/Smirnoff'
                },
                {
                    title:'Tanqueray Terrace',
                    imageUrl:'../../img/Projects/tanqueray-terraces.jpg',
                    id:8,
                    linkUrl:'project/Tanqueray'
                }
            ]

        }

    }
            render(){
              return(
                <div className='project-menu'>
                  {
                    this.state.sections.map(({id, ...otherSectionProps})=>(
                        <ProjectItem key={id} { ...otherSectionProps}/>
                    ))  
                  }
                </div>
                )
            }
}

export default ProjectMenu;