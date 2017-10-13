import React from "react";
import Header from "./Header";
import ProjectList from "./ProjectList";

function App(props){
  return (
    <div>
      <Header/>
      <h3>Web Developer</h3>
      <ProjectList></ProjectList>
    </div>
  );
}

export default App;
