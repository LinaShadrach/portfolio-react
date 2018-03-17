import React from 'react';
import { Row } from 'react-materialize';
import SkillsList from './SkillsList';
import { masterSkillsList } from './../data/master-skills-list.js';

function SkillsGroup(){
  return (
    <Row>
      <h3>Skills</h3>
      <hr/>
      <SkillsList masterSkillsList={masterSkillsList}></SkillsList>
      <SkillsList masterSkillsList={masterSkillsList}></SkillsList>
      <SkillsList masterSkillsList={masterSkillsList}></SkillsList>
    </Row>
  );
}

export default SkillsGroup;
