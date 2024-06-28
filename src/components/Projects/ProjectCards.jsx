import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

function ProjectCards(props) {
  return (
    <div className="relative group">
      <div className="shadow-md text-white bg-gray-800 opacity-90 transition-all duration-500 h-full transform hover:scale-105 border-[1px] border-emerald-900 hover:border-emerald-600 overflow-hidden rounded-lg flex flex-col justify-between">
        <img src={props.imgPath} alt="card-img" className="w-full" />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h5 className="text-xl font-bold">{props.title}</h5>
            <p className="text-justify">{props.description}</p>
          </div>
          <div className="flex mt-4">
            <a
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 text-white py-2 px-4 rounded hover:bg-emerald-500 transition duration-300"
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? 'Blog' : 'GitHub'}
            </a>
            {!props.isBlog && props.demoLink && (
              <a
                href={props.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 text-white py-2 px-4 rounded hover:bg-emerald-500 transition duration-300 ml-4"
              >
                <CgWebsite /> &nbsp;
                {'Demo'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
