import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between py-4">
      <h3 className="text-xl font-black">Crashcourse</h3>
      <button className="border-purple font-semibold py-2 px-4 hover:bg-gray-900 hover:text-white text-dark rounded">Registrate Gratis</button>
    </div>
  );
}

export default Header;