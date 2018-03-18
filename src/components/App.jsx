import React from 'react';
import Header from './Header';
import MyContent from './MyContent';
import { Parallax } from 'react-materialize';
import { Row } from 'react-materialize';
import { fontStyles } from './../styles/styles.js';
import './../styles/materialize-script.js';
import meVista from './../data/img/me-vista.jpg';

function App(){
  return (
    <Row>
      <style jsx global>{fontStyles}</style>
      <Header></Header>
      <Parallax imageSrc={meVista}>
      </Parallax>
      <MyContent></MyContent>
    </Row>
  );
}

export default App;
