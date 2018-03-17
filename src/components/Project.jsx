import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-materialize';

function Project(props){
  return (
    <Col s={12} m={4} l={4}>
      <h4>{props.title}</h4>
      <h6>{props.description}</h6>
      <p>{props.technologies}</p>
    </Col>
  );
}
Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.string
};

export default Project;
