import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="md:mx-10">
      {/* Footer Content */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr]  gap-1 my-10 mt-40 text-sm">
        {/* Logo Section */}
        <div>
          <img src={assets.logo} alt="Logo" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.dsfgvrtrbr r grthtrhtr hrthbtrgbrgtbtb trbhhtrb trwbsb trhtrhrfbtsbdr</p>
        </div>

        
          {/* Company Section */}
          <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>9361413115</li>
              <li>vishal15276@gmail.com</li>
            </ul>
          </div>
        
      </div>

      {/* Footer Bottom Text */}
      <div >
        <hr  />
        <p className="py-5 text-sm text-center ">
          © 2025 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
