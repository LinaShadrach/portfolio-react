import React from 'react';
import PropTypes from 'prop-types';

function Skill(props){
  return (
    <li>{props.title}</li>
  );
}
Skill.propTypes = {
  title: PropTypes.string,
};

export default Skill;
