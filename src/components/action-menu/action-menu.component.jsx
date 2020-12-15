import React from 'react';
import ActionItem from '../action-item/action-item.component';
import './action-menu.styles.scss';


class ActionMenu extends React.Component{
    constructor(){
        super();

        this.state={
            sections:[
                {
                    title:'LOGISTICS',
                    id:1,
                    content:'We offer unparalleled capabilities in rapidly establishing professional logistics support services in remote, adverse, and challenging environments to each of our clients.  Our custom system (THE HUB ™) enables us to achieve this'
                },
                {
                    title:'WAREHOUSING',
                    id:2,
                    content:'Warehousing with BOOStudio is unrivaled. We make the warehousing & storage easy for you, whilst you can overview your entire inventory with the latest VR technology, stock reports & movement all by using THE HUB ™'
                },
                {
                    title:'PICK & PACK',
                    id:3,
                    content:'With BOOStudio you can easily order stock to go to a specific location, whilst we quitely work in the  background doing the the pick and pack. THE HUB ™ has live track trace features, along with easy order overviews to make your job even easier.'
                }
            ]
        
        }


    }
    render(){
        return(
            <div className='action-menu'>
             {
                 this.state.sections.map(({id, ...otherSectionProps})=>(
                    <ActionItem key={id} { ...otherSectionProps}/>
                )

                 )
             }
            </div>
        )
    }


}

export default ActionMenu;