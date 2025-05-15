import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';

function ProjectCards({ id, title, description, imgPath, ghLink, demoLink, tech = [], tags = [] }) {
  return (
    <motion.div className="card h-full flex flex-col" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      {/* Image container with overlay */}
      <div className="relative overflow-hidden">
        <img src={imgPath} alt={title} className="w-full h-48 object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70"></div>
        <div className="absolute top-2 right-2 flex flex-wrap justify-end gap-2">
          {tags.map((tag, index) => (
            <span
              key={`${id}-tag-${index}`}
              className="text-xs px-2 py-1 rounded-full bg-primary-700/70 text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>

        {/* Technology tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tech.map((item, index) => (
            <span key={`${id}-tech-${index}`} className="text-xs px-2 py-1 rounded-full bg-dark-700 text-primary-300">
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 flex items-center justify-center gap-2 py-2"
            aria-label={`View ${title} on GitHub`}
          >
            <BsGithub />
            <span>GitHub</span>
          </a>

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 flex items-center justify-center gap-2 py-2"
              aria-label={`View ${title} demo`}
            >
              <CgWebsite />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCards;
