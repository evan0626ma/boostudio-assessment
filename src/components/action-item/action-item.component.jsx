import React from 'react';
import './action-item.styles.scss';

const ActionItem =({id,title,content})=>(
    <div className='action-item'>
        <div className='title'>{title}</div>
        <div className='item-content'>{content}</div>
    </div>
)   

export default ActionItem;