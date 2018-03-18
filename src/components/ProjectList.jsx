import React from 'react';
import Project from './Project';
import { Row } from 'react-materialize';
import { CardPanel } from 'react-materialize';
import { panel } from './../styles/styles.js';

var masterProjectList = [
  {
    title: 'Knerdy Knitter',
    description: 'generates complex random knitting patterns according to simple rules',
    tech: 'AJAX, C# 6, CSS, D3, HTML5, ES5, Materialize, MSSQL, .NET Core 1.0 (with Entity and Identity), SSMS, VS 2015',
    ghUrl: 'https://github.com/LinaShadrach/KnerdyKnitter'
  },
  {
    title: 'Sleater and Kinney',
    description: '4B',
    tech: 'Fox image not displaying on page, can only see duck?',
    ghUrl: 'https://github.com/LinaShadrach/blogsite'
  },
  {
    title: 'Imani & Jacob',
    description: '9F',
    tech: 'Donkey picture not displaying on hover in Zoology app. :(',
    ghUrl: 'https://github.com/LinaShadrach/tune-trip'
  }
];

function ProjectList(){
  return (
    <Row>
      <style jsx>{panel}</style>
      <div id='projectspy' className='panel'>
        <CardPanel  className="deep-purple lighten-4">
          <Row>
            <h3 className='center'>Projects</h3>
            {masterProjectList.map((project, index) =>
              <Project
                className='projects'
                title={project.title}
                description={project.description}
                tech={project.tech}
                ghUrl={project.ghUrl}
                key={index}
              />
            )}
          </Row>
        </CardPanel>
      </div>
    </Row>
  );
}

export default ProjectList;
