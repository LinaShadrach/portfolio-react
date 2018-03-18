import React from 'react';
import Skill from './Skill';
import { Col } from 'react-materialize';
import PropTypes from 'prop-types';
import { CardPanel } from 'react-materialize';

function SkillsList(props){
  return (
    <Col s={12} m={4} l={4}>
      <CardPanel>
        <ul>
          {props.masterSkillsList.map((skill, index) =>
            <Skill
              title={skill.title}
              key={index}
            />
          )}
        </ul>
      </CardPanel>
    </Col>
  );
}

SkillsList.propTypes = {
  masterSkillsList: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

export default SkillsList;
