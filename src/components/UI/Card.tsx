import React from 'react';
import Statistics from './Statistics';

const Card = () => {
  return (
    <div className="my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
          <div className="flex flex-col leading-tight p-2 md:p-4">
            <h1 className="text-base font-bold mt-1">Nombre del curso</h1>
            <p className="text-sm mt-0.5">Profesor del curso</p>
            <Statistics />
            <div className="flex flex-col mt-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <p className="text-lg font-extrabold">co</p>
                  <p className="text-2xl font-extrabold">$349,929</p>
                </div>
                <p className="text-xs font-normal text-gray-400">CO$164.434</p>                
              </div>
              <div className="mt-3">
                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded">Comprar ahora</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Card;