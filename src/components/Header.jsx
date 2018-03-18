import React from 'react';
import Tag from './Tag';
import { panel } from './../styles/styles.js';

function Header(){
  return (
    <div>
      <style jsx>{panel}</style>
      <div className='panel center'>
        <h1>Lina Shadrach</h1>
        <Tag></Tag>
      </div>
    </div>
  );
}

export default Header;
