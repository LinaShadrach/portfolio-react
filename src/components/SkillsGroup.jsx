import React from 'react';
import { Row } from 'react-materialize';
import SkillsList from './SkillsList';
import { panel } from './../styles/styles.js';
import { masterSkillsList } from './../data/master-skills-list.js';

function SkillsGroup(){
  return (
    <Row>
      <style jsx>{panel}</style>
      <div className='panel deep-purple lighten-4'>
        <Row>
          <h3 className='center'>Skills</h3>
          <SkillsList masterSkillsList={masterSkillsList}></SkillsList>
          <SkillsList masterSkillsList={masterSkillsList}></SkillsList>
          <SkillsList masterSkillsList={masterSkillsList}></SkillsList>
        </Row>
      </div>
    </Row>
  );
}

export default SkillsGroup;
