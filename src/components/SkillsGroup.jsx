import React from 'react';
import { Row } from 'react-materialize';
import SkillsList from './SkillsList';
import { panel } from './../styles/styles.js';
import { masterCSkillsList, masterJsSkillsList, masterOtherSkillsList } from './../data/master-skills-list.js';

function SkillsGroup(){
  return (
    <Row>
      <style jsx>{panel}</style>
      <div className='panel deep-purple lighten-4'>
        <Row>
          <h3 className='center'>My Tools</h3>
          <SkillsList masterSkillsList={masterJsSkillsList}></SkillsList>
          <SkillsList masterSkillsList={masterCSkillsList}></SkillsList>
          <SkillsList masterSkillsList={masterOtherSkillsList}></SkillsList>
        </Row>
      </div>
    </Row>
  );
}

export default SkillsGroup;
