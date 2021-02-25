import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between py-4">
      <h3 className="text-xl font-black">Crashcourse</h3>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Registrate Gratis</button>
    </div>
  );
}

export default Header;