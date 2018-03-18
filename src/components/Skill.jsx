import React from 'react';
import PropTypes from 'prop-types';
import { skillStyles } from './../styles/styles.js';

function Skill(props){
  return (
    <li>
      <style jsx>{skillStyles}</style>
      - <span className="skillTitle">{props.title}</span>:  {props.description}
    </li>
  );
}
Skill.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Skill;
