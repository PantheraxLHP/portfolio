import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { CgGitFork } from 'react-icons/cg';
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-800/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} className="h-10 w-10 rounded-full border-2 border-primary-500 object-cover" alt="Logo" />
            <span className="text-xl font-bold text-white hidden sm:block">Panthera</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} isActive={location.pathname === item.to} />
            ))}
            <a
              href="https://github.com/Panthera"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-primary-600/30 border border-primary-500/40 hover:bg-primary-600/50 transition-all duration-300"
            >
              <CgGitFork className="text-lg" />
              <AiFillStar className="text-lg" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <RiCloseLine /> : <RiMenu4Line />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-3 space-y-2 bg-dark-800/95 backdrop-blur-md">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.to ? 'bg-primary-700/30 text-primary-300' : 'hover:bg-dark-700/70 text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="text-xl" />
              <span>{item.label}</span>
            </Link>
          ))}
          <a
            href="https://github.com/PantheraxLHP"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-primary-700/30 hover:bg-primary-700/50 transition-colors"
          >
            <CgGitFork className="text-xl" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ item, isActive }) => (
  <Link
    to={item.to}
    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
      isActive ? 'bg-primary-700/30 text-primary-300' : 'hover:bg-dark-700/70 text-white'
    }`}
  >
    <item.icon className="text-lg" />
    <span>{item.label}</span>
  </Link>
);

const navItems = [
  { to: '/', label: 'Home', icon: AiOutlineHome },
  { to: '/project', label: 'Projects', icon: AiOutlineFundProjectionScreen },
];

export default NavBar;
