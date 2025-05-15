import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-primary-400 font-bold text-xl">
              Panthera
            </Link>
            <p className="text-gray-400 text-sm mt-1">Building digital solutions with passion</p>
          </div>

          <div className="flex flex-col items-center mb-4 md:mb-0">
            <p className="text-gray-300 text-sm">
              Designed & Developed with <AiFillHeart className="inline text-red-500 mx-1" /> by Panthera
            </p>
            <p className="text-gray-400 text-xs mt-1">© {year} All Rights Reserved</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/PantheraxLHP/"
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin/"
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
