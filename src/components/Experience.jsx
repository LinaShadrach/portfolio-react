import React from 'react';
import { Row } from 'react-materialize';
import { panel } from './../styles/styles.js';
function Experience(){
  return (
    <Row>
      <style jsx>{panel}</style>
      <div className='deep-purple lighten-4 panel' id='experiencespy'>
        <h3 className='center'>Epicodus</h3>
        <p>My journey.</p>
        <p><a href='epicodus.com'>Epicodus</a></p>
      </div>
    </Row>
  );
}

export default Experience;
