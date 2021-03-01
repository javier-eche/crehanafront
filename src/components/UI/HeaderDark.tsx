import React from 'react';
import { Link } from 'react-router-dom';
import urlIconWorld from './../../assets/images/globe-2.svg';

const HeaderDark = () => {
  return (
    <Link to="/">
      <div className="h-72px flex justify-center items-center bg-dark gap-2">
        <img src={urlIconWorld} alt=""/>
        <h3 className="text-xl text-white font-black">Crashcourse</h3>
      </div>
    </Link>
  );
}

export default HeaderDark;