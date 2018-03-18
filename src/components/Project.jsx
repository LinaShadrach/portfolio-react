import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-materialize';
import { Card } from 'react-materialize';
import { CardTitle } from 'react-materialize';

function Project(props){
  return (
    <Col s={12} m={4} l={4}>
      <Card
        header ={
          <CardTitle reveal image={'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/12923178_10206186647568769_454637490761351205_n.jpg?oh=3cca0a314d15c16a6e6bc9affe6809e6&oe=5B2DB964'}/>}
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
