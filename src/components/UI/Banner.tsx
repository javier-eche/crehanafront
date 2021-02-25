import React from 'react';

const Banner = () => {
  return (
    <div className="w-full h-72 bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-1/2">
        <h2 className="text-4xl font-black mb-1.5 text-center">Title H2 -</h2>
        <h2 className="text-4xl font-black mb-1.5 text-center">banner cursos nuevos</h2>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Comprar ahora</button>
    </div>
  );
}

export default Banner;