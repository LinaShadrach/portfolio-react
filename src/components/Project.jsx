import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, CardTitle } from 'react-materialize';
import { projectStyles } from './../styles/styles.js';

function Project(props){
  return (
    <Col s={12} m={4} l={4}>
      <style jsx>{projectStyles}</style>
      <Card className='project' 
        header ={
          <CardTitle reveal image={props.imageSrc}/>}
        title={props.title}
        reveal={
          <div>
            <h6>{props.description}</h6>
            <p>{props.technologies}</p>
          </div>
        }>
        <p>
          <a href={props.ghUrl} target='_blank'>
            Github
          </a>
        </p>
      </Card>
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
