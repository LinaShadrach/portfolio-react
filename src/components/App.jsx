import React from 'react';
import Header from './Header';
import ProjectList from './ProjectList';
import Tag from './Tag';
import Experience from './Experience';
import SkillsList from './SkillsList';
import ContactInfo from './ContactInfo';
import { Row } from 'react-materialize';

function App(){
  return (
    <Row>
      <Header/>
      <Tag/>
      <ProjectList></ProjectList>
      <Experience></Experience>
      <SkillsList></SkillsList>
      <ContactInfo></ContactInfo>
    </Row>
  );
}

export default App;
