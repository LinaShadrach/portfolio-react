import React from 'react';
import ProjectList from './ProjectList';
import Experience from './Experience';
import SkillsGroup from './SkillsGroup';
import ContactInfo from './ContactInfo';
import { Row } from 'react-materialize';
function MyContent(){
  return (
    <Row>
      <Experience></Experience>
      <ProjectList></ProjectList>
      <SkillsGroup></SkillsGroup>
      <ContactInfo></ContactInfo>
    </Row>
  );
}

export default MyContent;
