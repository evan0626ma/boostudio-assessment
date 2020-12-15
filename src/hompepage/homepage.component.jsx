import React from 'react';
import Banner from '../components/banner/banner.component';
import ProjectMenu from '../components/project-menu/project-menu.component';
import './homepage.style.scss';
import ServiceMenu from '../components/service-menu/service-menu.component';
import ActionMenu from '../components/action-menu/action-menu.component';
import logo from '../../src/img/BOOStudio_Logo.png';



const HomePage = () => (
    
    <div className='homepage'>

        <Banner />
        <h2>Our Project</h2>
        <ProjectMenu />
        <h2>What We Do</h2>
        <ServiceMenu />
        <ActionMenu />
        <div className='footer'>
            <div className='section-1'>
                <img 
                style={{
                        margin: '100px auto 70px',
                        display: 'block',      
                        width: '12vw',
                        borderRadius: '50px',
                        mozBorderRadius: '50px',
                        webkitBordeRadius: '50px',
                        marginBottom:'50px'
                        }}
                src={logo} alt="logo"/>
                <p>
                101-103 Illawarra Road, Marrickville, NSW 2204, Sydney, Australia.


                </p>
            </div>
            <ul className='section-2'>
                <li>Activations</li>
                <li>Design</li>
                <li>Events</li>
                <li>Production</li>
                <li>Technology</li>
            </ul>
            <ul className='section-3'>
            <li>Pay an invoice</li>
            <li>Use Of Cookies</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin"></i>
            </ul>
        
        
        </div>
    </div>

)

export default HomePage;