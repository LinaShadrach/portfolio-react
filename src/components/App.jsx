import React from 'react';
import Header from './Header';
import ProjectList from './ProjectList';
import Experience from './Experience';
import SkillsGroup from './SkillsGroup';
import ContactInfo from './ContactInfo';
import { Row } from 'react-materialize';

function App(){
  return (
    <Row>
      <Header/>
      <ProjectList></ProjectList>
      <Experience></Experience>
      <SkillsGroup></SkillsGroup>
      <ContactInfo></ContactInfo>
    </Row>
  );
}

export default App;
