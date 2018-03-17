import React from 'react';
import Skill from './Skill';
import { Row } from 'react-materialize';

var masterSkillsList = [
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
    <Row>
      <h3>Skills</h3>
      <hr/>
      <ul>
        {masterSkillsList.map((skill, index) =>
          <Skill
            title={skill.title}
            key={index}
          />
        )}
      </ul>
    </Row>
  );
}

export default SkillsList;
