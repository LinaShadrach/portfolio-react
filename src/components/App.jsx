import React from "react";
import Header from "./Header";
import ProjectList from "./ProjectList";
import Description from "./Description";

function App(props){
  return (
    <div>
      <Header/>
      <Description/>
      <ProjectList></ProjectList>
    </div>
  );
}

export default App;
