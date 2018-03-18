import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, CardTitle, Icon } from 'react-materialize';

function Project(props){
  return (
    <Col s={12} m={6} l={4}>
      <Card
        header ={
          <CardTitle reveal image={props.imageSrc}/>}
        title={props.title}
        reveal={
          <div>
            <p>{props.description}</p>
            <Icon tiny>star</Icon>{props.technologies}
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
  ghUrl: PropTypes.string,
  imageSrc: PropTypes.string
};

export default Project;
