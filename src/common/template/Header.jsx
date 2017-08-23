import React from 'react'

import Navbar from './Navbar'

export default prrops => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'>
                <svg width="50" className="logo-menu" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350">
                    <path className="logo-h" d="M191.55,152.37v28.7H158.81V152.84s0-25.7-32.74-25.7V232.82s0,26.18,32.74,26.18V213.81h32.74v44.8c31.26,0,31.26-25.61,31.26-25.61V126.66C191.55,126.66,191.55,152.37,191.55,152.37Z"
                    />
                    <path className="wing-left" d="M57.52,113.94c-1.13,4.5-12.07,35.35,22.33,54.75C73,170.11,62.39,166.9,60.25,166c0.33,2.12,4.17,33.32,39.62,37.48a24.5,24.5,0,0,1-18.5,3.8c3.23,5.38,12.48,20.08,34.91,22.67v-86.8C84.33,137,63.72,119,57.52,113.94Z"
                    />
                    <path className="wing-right" d="M291.73,113.94c1.13,4.5,12.07,35.35-22.33,54.75,6.84,1.43,17.47-1.79,19.61-2.68-0.33,2.12-4.17,33.32-39.62,37.48a24.5,24.5,0,0,0,18.5,3.8c-3.23,5.38-12.48,20.08-34.91,22.67v-86.8C264.93,137,285.54,119,291.73,113.94Z"
                    />
                </svg>
            </span>
            <span className='logo-lg'>
                <p><b>HERMES</b></p>
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
            </a>
            <Navbar />
        </nav>
    </header>
)