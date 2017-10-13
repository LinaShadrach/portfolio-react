import React from "react";
import Project from "./Project"

function ProjectList(props){
  return (
    <div>
      <h3>Projects</h3>
      <Project
        title="Knerdy Knitter"
        description="generates complex random knitting patterns according to simple rules"
        technologies="AJAX, C# 6, CSS, D3, HTML5, ES5, Materialize, MSSQL, .NET Core 1.0 (with Entity and Identity), SSMS, VS 2015"/>
    </div>
  );
}

export default ProjectList;
