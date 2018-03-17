import React from 'react';
import Header from './Header';
import ProjectList from './ProjectList';
import Tag from './Tag';
import Experience from './Experience';
import SkillsList from './SkillsList';

function App(){
  return (
    <div>
      <Header/>
      <Tag/>
      <ProjectList></ProjectList>
      <Experience></Experience>
      <SkillsList></SkillsList>
    </div>
  );
}

export default App;
