import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/about.jpg';
import { CgGitFork } from 'react-icons/cg';
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai';

const NavBar = () => {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        navColour ? 'bg-emerald-900 bg-opacity-95 shadow-lg' : 'bg-emerald-900 bg-opacity-50'
      }`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-8 w-auto" alt="brand" />
        </Link>
        <button className="text-white border-0 p-2 md:hidden" onClick={() => setExpand(!expand)}>
          <MenuIcon expand={expand} />
        </button>
        <div className={`w-full md:flex md:items-center md:w-auto ${expand ? 'block' : 'hidden'}`}>
          <NavLinks setExpand={setExpand} />
        </div>
      </div>
    </nav>
  );
};

const MenuIcon = ({ expand }) => (
  <div className="space-y-2">
    <span
      className={`block h-0.5 w-8 bg-white transform transition duration-300 ${
        expand ? 'rotate-45 translate-y-2.5' : ''
      }`}
    ></span>
    <span className={`block h-0.5 w-8 bg-white transition duration-300 ${expand ? 'opacity-0' : ''}`}></span>
    <span
      className={`block h-0.5 w-8 bg-white transform transition duration-300 ${
        expand ? '-rotate-45 -translate-y-2.5' : ''
      }`}
    ></span>
  </div>
);

const NavLinks = ({ setExpand }) => (
  <ul className="text-white font-bold md:flex md:space-x-8 mt-3 md:mt-0">
    {navItems.map(({ to, label, icon: Icon, external }, index) => (
      <li key={index} className="rounded-lg hover:bg-emerald-500 transition-colors duration-300">
        {external ? (
          <a href={to} target="_blank" rel="noreferrer" className="block py-2 md:py-3 px-4">
            <Icon className="inline-block mr-2" /> {label}
          </a>
        ) : (
          <Link to={to} className="block py-2 md:py-3 px-4" onClick={() => setExpand(false)}>
            <Icon className="inline-block mr-2" /> {label}
          </Link>
        )}
      </li>
    ))}
    <li className="mt-2 md:mt-0">
      <a
        href="https://github.com/soumyajit4419/Portfolio"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center bg-emerald-600 bg-opacity-40 py-2 px-5 text-center border border-transparent  hover:bg-emerald-500 hover:text-white transition-all duration-200 ease-in-out rounded-xl"
      >
        <CgGitFork className="text-xl" /> <AiFillStar className="text-lg ml-1" />
      </a>
    </li>
  </ul>
);

const navItems = [
  { to: '/', label: 'Home', icon: AiOutlineHome },
  { to: '/project', label: 'Projects', icon: AiOutlineFundProjectionScreen },
];

export default NavBar;
