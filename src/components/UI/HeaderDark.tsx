import React from 'react';
import urlIconWorld from './../../assets/images/globe-2.svg';

const HeaderDark = () => {
  return (
    <div className="h-72px flex justify-center items-center bg-dark gap-2">
      <img src={urlIconWorld} alt=""/>
      <h3 className="text-xl text-white font-black">Crashcourse</h3>
    </div>
  );
}

export default HeaderDark;