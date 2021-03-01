import React from 'react';
import urlIconGlobe from './../../assets/images/globe-b2.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between py-4">
      <Link to="/">
        <div className="flex gap-2 items-center">
          <img src={urlIconGlobe} alt=""/>
          <h3 className="text-xl font-black">Crashcourse</h3>
        </div>
      </Link>
      <button className="border-purple font-semibold py-2 px-4 hover:bg-gray-900 hover:text-white text-dark rounded">Registrate Gratis</button>
    </div>
  );
}

export default Header;