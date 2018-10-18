import React from 'react';
import { Row, Col, Icon } from 'react-materialize';
import { contactInfoStyles } from './../styles/styles.js';
function ContactInfo(){
  return (
    <Row>
      <style jsx>{contactInfoStyles}</style>
      <Row id="contactspy"  className="center">
        <Col s={4} m={4} l={4}>
          <a href="https://www.github.com/LinaShadrach"><img className="contact-icon" src='https://image.flaticon.com/icons/svg/25/25231.svg'></img></a>
        </Col>
        <Col s={4} m={4} l={4}>
          <a href='mailto:lina@epicodus.com'><Icon medium>email</Icon></a>
        </Col>
        <Col s={4} m={4} l={4}>
          <a  href="https://www.linkedin.com/in/lina-shadrach/" ><img className="contact-icon" src='https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png'></img></a>
        </Col>
      </Row>
    </Row>
  );
}

export default ContactInfo;
