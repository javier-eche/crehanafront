import React from 'react';
import Statistics from './Statistics';
import {Link} from 'react-router-dom';

interface Props {
  id:number,
  name:string,
  level:string,
  users:number,
  score:number,
  price:number,
  real_price:number,
}

const Card: React.FC<Props> = ({id, name, level, users, score, price, real_price}) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
          <div className="flex flex-col leading-tight p-2 md:p-4">
            <h1 className="text-base font-bold mt-1">{name}</h1>
            <p className="text-sm mt-0.5">Profesor del curso</p>
            <Statistics level={level} users={users} score={score} />
            <div className="flex flex-col mt-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <p className="text-lg font-extrabold">co</p>
                  <p className="text-2xl font-extrabold">${price}</p>
                </div>
                <p className="text-xs font-normal text-gray-400">CO${real_price}</p>                
              </div>
              <div className="mt-3">
                <Link to={{pathname:`/details/${id}`}}>
                  <button className="w-full bg-dark hover:bg-gray-400 text-white font-bold py-3.5 px-4 rounded">Comprar ahora</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Card;