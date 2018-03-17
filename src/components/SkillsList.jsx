import React from 'react';
import Skill from './Skill';

var masterSkillList = [
  {
    title: 'C#'
  },
  {
    title: 'ASP.NET'

  },
  {
    title: 'VS 2015, 2017'
  }
];

function SkillsList(){
  return (
    <div>
      <h3>Skills</h3>
      <hr/>
        <ul>
          {masterSkillsList.map((skill, index) =>
            <Skills
              title={skill.title}
              key={index}
            />
          )}
        </ul>
    </div>
  );
}

export default SkillsList;
