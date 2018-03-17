import React from 'react';
import { Row } from 'react-materialize';
import { Col } from 'react-materialize';

function ContactInfo(){
  return (
    <Row>
      <Col>
        <a href="github.com/LinaShadrach">Github</a>
      </Col>
      <Col>
        <a href="https://www.linkedin.com/in/lina-shadrach/">LinkedIn</a>
      </Col>
    </Row>
  );
}

export default ContactInfo;
