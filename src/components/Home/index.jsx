import React from 'react';
import Particle from '../Particle';
import Type from './Type';
import logo from '../../assets/home-main.jpg';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-[rgba(17, 16, 16, 0.678)] to-[rgba(12, 10, 22, 0.863)] p-14">
      <Particle />
      <div className="max-w-6xl mx-auto py-36 pt-16 pb-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pt-20">
            <h1 className="text-5xl font-bold pb-4">Hi !</h1>
            <h1 className="text-5xl font-bold">
              I'M
              <span className="text-emerald-400"> LE HUYNH PHUC </span>
            </h1>
            <div className="mt-8 text-xl text-white">
              <Type />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={logo} alt="Description" className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
