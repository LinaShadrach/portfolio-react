import React from 'react';
import Tag from './Tag';
import { myHeader } from './../styles/styles.js';

function Header(){
  return (
    <div>
      <style jsx>{myHeader}</style>
      <div id='myHeader' className='center'>
        <h1>Lina Shadrach</h1>
        <Tag></Tag>
      </div>
    </div>
  );
}

export default Header;
