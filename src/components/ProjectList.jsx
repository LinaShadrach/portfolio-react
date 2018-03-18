import React from 'react';
import Project from './Project';
import { Row } from 'react-materialize';
import { panel } from './../styles/styles.js';
import { masterProjectList } from './../data/master-project-list.jsx';

function ProjectList(){
  return (
    <div>
      <style jsx>{panel}</style>
      <div id='projectspy' className='panel deep-purple lighten-4'>
        <Row>
          <h3 className='center'>Projects</h3>
          {masterProjectList.map((project, index) =>
            <Project
              className='projects'
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              ghUrl={project.ghUrl}
              imageSrc={project.imageSrc}
              key={index}
            />
          )}
        </Row>
      </div>
    </div>
  );
}

export default ProjectList;
