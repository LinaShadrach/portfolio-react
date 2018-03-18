import React from 'react';
import { Row } from 'react-materialize';
import { CardPanel } from 'react-materialize';
import { panel } from './../styles/styles.js';
function Experience(){
  return (
    <Row>
      <style jsx>{panel}</style>
      <div className='panel'>
        <CardPanel className="deep-purple lighten-4">
          <h3 className='center'>Epicodus</h3>
          <p>My journey.</p>
          <p><a href='epicodus.com'>Epicodus</a></p>
        </CardPanel>
      </div>
    </Row>
  );
}

export default Experience;
