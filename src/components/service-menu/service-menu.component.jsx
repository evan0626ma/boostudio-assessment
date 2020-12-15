import React from 'react';
import './service-menu.styles.scss';
import ServiceItem from '../service-item/service-item.component';


class ServiceMenu extends React.Component{

    constructor(){
      super();

      this.state={

          sections:[
            {
              title:'Installation',
              id: 1,
              icon:<i class="fas fa-pencil-ruler"></i>,
              content:'In today’s overwhelming attention economy, consumers need to be surprised and engaged. We help brands achieve this goal by creating unique activations and events that capture attention, create memorable moments, and drive genuine impact.'

            },
            {
              title:'Event',
              id: 2,
              icon:<i class="fas fa-tools"></i>,
              content:'Creating unique activations and events that capture attention, create memorable moments, and drive genuine impact.'
            },
            {
              title:'Design',
              id: 3,
              icon:<i class="far fa-calendar-alt"></i>,
              content:'We believe that storytelling and great design go hand-in-hand.'
            },
            {
              title:'Production',
              id: 4,
              icon:<i class="fas fa-laptop-house"></i>,
              content:'We like to get great sh*t done. And quickly.  Our in-house print and fabrication capabilities include customized bar and activation builds, event signage, PR surprise and delight kits, POS, retail fixture displays, VM installations, acrylic, and 3D lettering, media walls, decals, small format, and exhibitions and displays'
            },
            {
              title:'Technology',
              id: 5,
              icon:<i class="fas fa-tv"></i>,
              content:'Technology is our backbone & the core of our operation. We’ve developed THE HUB ™, which is the centre of everything we do - whether it be staff, client or installer facing. THE HUB ™ controls and interacts between each service we offer, at automatic pace; whether it be for our CRM, warehousing, online orders, logistics, nationwide roll outs, or installer job reporting.'
            }
          ]
      }
    }
      render(){
        return(
          <div className='service-menu'>
            {
              this.state.sections.map(({id,...otherSectionProps})=>(
                <ServiceItem key={id}{...otherSectionProps}/>
              ))
            }
          </div>
        )
      }


}



export default ServiceMenu;