import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm-grid'>
            {/* Left section */}
            <div>
                <img src={assets.logo} alt=""/>
                <p>lorem50
                </p>
            </div>
            {/* Center section */}
            <div>
                <p>COMPANY</p>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>    
                </ul>
            </div>
            {/* Right section */}
            <div>
            <p>GET IN TOUCH</p>
            <ul>
                <li>9361413115</li>
                <li>vishal15276@gmail.com</li>
            </ul>
            </div>
        </div>
        
            {/* Final text */}
            <div>
                <hr/>
                <p>Copyright text</p>
            </div>
        
    </div>
  )
}

export default Footer