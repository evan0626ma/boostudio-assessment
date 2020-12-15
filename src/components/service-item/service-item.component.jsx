import React from 'react';
import './service-item.styles.scss';

const ServiceItem = ({title,content,imageUrl,icon}) =>(
    <div className='service-item'>
        <div className="service_item_icon">
            {icon}
            <span className='title'>{title}</span>
        </div>
        <div className='item-content'>{content}</div>
    </div>
)

export default ServiceItem;