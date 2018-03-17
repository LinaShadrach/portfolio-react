import React from 'react';
import Header from './Header';
import ProjectList from './ProjectList';
import Tag from './Tag';

function App(){
  return (
    <div>
      <Header/>
      <Tag/>
      <ProjectList></ProjectList>
    </div>
  );
}

export default App;
