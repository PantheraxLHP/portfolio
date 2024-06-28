import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="bg-emerald-900 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center text-white gap-4">
          <div className="text-center md:text-left">Designed and Developed by Pheelcus</div>
          <div className="text-center">Copyright © {year} Pheelcus</div>
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://github.com/Pheelcus"
              className="text-white hover:text-gray-300 hover:scale-105 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/your-linkedin/"
              className="text-white hover:text-gray-300 hover:scale-105 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={24} />
            </a>
            {/* <a
              href="https://www.instagram.com/your-instagram"
              className="text-white hover:text-gray-300 hover:scale-105 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook size={24} />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
