import React from 'react';
import Particle from '../Particle';
import Type from './Type';
import logo from '../../assets/home-main.jpg';
import { FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import { HiArrowNarrowDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <Particle />

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-3">
              <span className="text-primary-400 font-medium tracking-wider">WELCOME TO MY PORTFOLIO</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Hi, I'm <span className="text-primary-400">Le Huynh Phuc</span>
              </h1>
              <div className="text-xl sm:text-2xl text-gray-300 h-10">
                <Type />
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-lg">
              I'm a passionate developer focused on building modern, responsive web applications and robust software
              solutions. Let's turn ideas into reality!
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/project" className="btn-primary">
                View My Work
              </Link>
              <a
                href="https://github.com/PantheraxLHP"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub Profile
              </a>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.facebook.com/PantheraxLHP/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-700 border border-primary-700/30 hover:bg-primary-700/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-700 border border-primary-700/30 hover:bg-primary-700/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 opacity-75 blur-xl"></div>
              <img
                src={logo}
                alt="Le Huynh Phuc"
                className="relative rounded-2xl shadow-2xl w-full max-w-md border-2 border-primary-700/50 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <HiArrowNarrowDown className="text-primary-400 text-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Home;
