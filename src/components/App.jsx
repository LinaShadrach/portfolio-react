import React from 'react';
import Header from './Header';
import ProjectList from './ProjectList';
import Experience from './Experience';
import SkillsGroup from './SkillsGroup';
import ContactInfo from './ContactInfo';
import { Parallax } from 'react-materialize';
import { Row } from 'react-materialize';
import './../styles/materialize-script.js';
function App(){
  return (
    <Row>
      <Header></Header>
      <Parallax imageSrc="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/12923178_10206186647568769_454637490761351205_n.jpg?oh=3cca0a314d15c16a6e6bc9affe6809e6&oe=5B2DB964">
      </Parallax>
      <Experience className="scrollspy"></Experience>
      <ProjectList className="scrollspy"></ProjectList>
      <SkillsGroup className="scrollspy"></SkillsGroup>
      <ContactInfo className="scrollspy"></ContactInfo>
    </Row>
  );
}

export default App;
