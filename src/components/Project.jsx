import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-materialize';

function Project(props){
  return (
    <Col s={12} m={4} l={4}>
      <a href={props.ghUrl} target='_blank'>
        <h4>{props.title}</h4>
      </a>
      <h6>{props.description}</h6>
      <p>{props.technologies}</p>
    </Col>
  );
}
Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.string,
  ghUrl: PropTypes.string
};

export default Project;
