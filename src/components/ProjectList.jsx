import React from 'react';
import Project from './Project';

var masterProjectList = [
  {
    title: 'Knerdy Knitter',
    description: 'generates complex random knitting patterns according to simple rules',
    tech: 'AJAX, C# 6, CSS, D3, HTML5, ES5, Materialize, MSSQL, .NET Core 1.0 (with Entity and Identity), SSMS, VS 2015'
  },
  {
    title: 'Sleater and Kinney',
    description: '4B',
    tech: 'Fox image not displaying on page, can only see duck?'
  },
  {
    title: 'Imani & Jacob',
    description: '9F',
    tech: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

function ProjectList(){
  return (
    <div>
      <h3>Projects</h3>
      <hr/>
      {masterProjectList.map((project, index) =>
        <Project
          title={project.title}
          description={project.description}
          tech={project.tech}
          key={index}
        />
      )}
    </div>
  );
}

export default ProjectList;
