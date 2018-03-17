import React from 'react';
import PropTypes from 'prop-types';

function Project(props){
  return (
    <div>
      <h4>{props.title}</h4>
      <h6>{props.description}</h6>
      <p>{props.technologies}</p>
    </div>
  );
}
Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.string
};

export default Project;
