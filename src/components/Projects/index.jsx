import React from 'react';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import carSale from '../../assets/car-dealer.jpg';
import Dental from '../../assets/dental.png';
import atbm from '../../assets/atbm.png';
import pttk from '../../assets/pttk.png';

function Projects() {
  return (
    <div className="bg-gradient-to-bl from-[rgba(17, 16, 16, 0.678)] to-[rgba(12, 10, 22, 0.863)]">
      <Particle />
      <div className="container mx-auto px-4 py-36">
        <div className="text-white text-3xl md:text-4xl font-medium pt-4">
          My Recent <strong className="text-emerald-400">Works</strong>
        </div>
        <p className="text-white">Here are a few projects I've worked on recently.</p>
        <div className="flex justify-center pb-10">
          <div className="pt-16 pb-16 pl-4 pr-4 h-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProjectCard
                imgPath={carSale}
                isBlog={false}
                title="Car Sales Website"
                description="Database management: PostgreSQL
Programming language: HTML, CSS, JavaScript, Python, Django
Use project management tools such as Github, Jira
The process of building this website includes generating ideas, assigning roles, using project management tools to implement projects, determining software requirements, analyzing and designing, implementing website, testing."
                ghLink="https://github.com/knightstark7/CarHub-Car-Dealer-Website"
                demoLink=""
              />
              <ProjectCard
                imgPath={Dental}
                isBlog={false}
                title="Dental Clinic Management Application"
                description="Database design: Used entity relationship model consisting of many levels such as conceptual level, logical level, physical level.
Query optimization method: Used index, partition to optimize.
Build application: Used C#,.NET framework to build a window form application, and SQL server to manage database."
                ghLink="https://github.com/Pheelcus/DentalManagement"
                demoLink=""
              />
              <ProjectCard
                imgPath={atbm}
                isBlog={false}
                title="University internal data management application"
                description="Database design: Used Oracle and installed security policies to control user access such as DAC, RBAC, VPD, OLS, Audit, Backup and Recovery.
Build application: Used C#,.NET framework to build a window form application, and Oracle to manage database."
                ghLink="https://github.com/zRush1202/ATBM_Project_Final"
                demoLink=""
              />
              <ProjectCard
                imgPath={pttk}
                isBlog={false}
                title="Recruitment Posting Management System"
                description="Database management: SQL Server
Programming language: C#, .NET
The process of building this application includes database design, drawing activity, ER, 3 layers, sequence diagram. Finally, rely on those models to code the application."
                ghLink="https://github.com/tdphong1293/DATH_PTTK_09"
                demoLink=""
              />
              {/* <ProjectCard
                imgPath={''}
                isBlog={false}
                title="Ai For Social Good"
                description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in sucide prevention."
                ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
                demoLink="#" // <--------Please include a demo link here
              />
              <ProjectCard
                imgPath={''}
                isBlog={false}
                title="Face Recognition and Emotion Detection"
                description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                demoLink="#"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
