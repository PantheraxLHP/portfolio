import React, { useState } from 'react';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import carSale from '../../assets/car-dealer.jpg';
import Dental from '../../assets/dental.png';
import atbm from '../../assets/atbm.png';
import pttk from '../../assets/pttk.png';
import etl from '../../assets/etl.png';
import cakehub from '../../assets/cakehub.png';
import smash from '../../assets/smash.png';

import { motion } from 'framer-motion';

function Projects() {
  const [category, setCategory] = useState('all');

  const projectData = [
    {
      title: 'Booking Badminton Court Website',
      description:
        'A featured website with booking system, user management, and payment integration, manage staff, badminton accessories rental for badminton court reservations.',
      imgPath: smash,
      ghLink: 'https://github.com/PantheraxLHP/Smashminton',
      demoLink: 'https://smashminton.fun/',
      tags: ['E-commerce', 'web'],
      tech: ['Nextjs', 'Nestjs', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    },
    {
      title: 'Business Intelligence: ETL, Data Warehousing & OLAP',
      description:
        'A comprehensive project demonstrating the complete BI process from raw data extraction to ETL, data warehousing, and multidimensional analysis with OLAP Cubes.',
      imgPath: etl,
      ghLink: 'https://github.com/ngphtrong2003/BI_ETL_PROJECT',
      demoLink: '',
      tags: ['ETL'],
      tech: ['SSIS', 'Power BI', 'SQL Server', 'OLAP', 'MDX'],
    },
    {
      title: 'E-commerce Website',
      description:
        'A featured e-commerce website with shopping cart, product, baking process management for online cake sales.',
      imgPath: cakehub,
      ghLink: 'https://github.com/Shiphu2103/EC2024-04-CakeHub',
      demoLink: 'https://cake-hub.vercel.app/',
      tags: ['E-commerce', 'web'],
      tech: ['HTML', 'CSS', 'TypeScript', 'React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Car Sales Website',
      description:
        'A comprehensive car dealership platform with inventory management, customer profiles, and sales tracking features.',
      imgPath: carSale,
      ghLink: 'https://github.com/knightstark7/CarHub-Car-Dealer-Website',
      demoLink: '',
      tags: ['web', 'database'],
      tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'PostgreSQL'],
    },
    {
      title: 'Recruitment Posting Management System',
      description:
        'A platform for managing job postings and recruitment processes with advanced filtering and search capabilities.',
      imgPath: pttk,
      ghLink: 'https://github.com/tdphong1293/DATH_PTTK_09',
      demoLink: '',
      tags: ['desktop', 'database'],
      tech: ['C#', '.NET', 'SQL Server', 'Windows Forms'],
    },

    {
      title: 'University Data Management System',
      description: 'An internal data management system with robust security features for university operations.',
      imgPath: atbm,
      ghLink: 'https://github.com/zRush1202/ATBM_Project_Final',
      demoLink: '',
      tags: ['desktop', 'database'],
      tech: ['C#', '.NET', 'Oracle', 'Windows Forms'],
    },
    {
      title: 'Dental Clinic Management Application',
      description:
        'A comprehensive application for managing dental clinic operations including patient records, appointments, and billing.',
      imgPath: Dental,
      ghLink: 'https://github.com/PantheraxLHP/DentalManagement',
      demoLink: '',
      tags: ['desktop', 'database'],
      tech: ['C#', '.NET', 'SQL Server', 'Windows Forms'],
    },
  ];

  const filteredProjects =
    category === 'all' ? projectData : projectData.filter((project) => project.tags.includes(category));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative min-h-screen bg-dark-900 pt-16">
      <Particle />

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading text-center">
            My Recent <span className="text-primary-400">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Here are some of the projects I've worked on recently. Each project represents different skills and
            technologies I've mastered.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['all', 'web', 'desktop', 'database'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                  category === cat ? 'bg-primary-600 text-white' : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">More projects can be found on my GitHub profile</p>
          <a
            href="https://github.com/PantheraxLHP"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            View More on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
