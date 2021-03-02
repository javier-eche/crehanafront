import React from 'react';
import { Link } from 'react-router-dom';
import Statistics from './Statistics';
import urlIconHeart from './../../assets/images/heart.svg';
import urlIconMoon from './../../assets/images/moon.svg';
import urlIconNavigation from './../../assets/images/navigation-2.svg';
import urlIconPlay from './../../assets/images/play_icon.svg'

interface Props {
  dataCourse:any,
}

const Summary: React.FC<Props> = ({ dataCourse }) => {
  const {id, name, level, users, score, price, real_price} = dataCourse;
  return (
    <div className="flex flex-col sm:flex-row-reverse">
            <div className="w-full sm:w-2/5">
        <div className="w-full h-movie bg-black flex flex-col justify-center items-center">
          <img src={urlIconPlay} alt=""/>
          <p className="text-xl font-black text-white mt-1">Ver Trailer del curso</p>
        </div>
        <div className="hidden sm:flex flex-col w-full h-description bg-gray-200 pt-2">
          <div className="flex justify-center items-center pix-5">
            <div className="flex items-center">
              <p className="text-2xl font-extrabold">co</p>
              <p className="text-sxl font-extrabold">${price}</p>
            </div>
            <p className="text-2xl font-normal text-gray-400">CO${real_price}</p>                
          </div>
          <Link to={{pathname:`/checkout/${id}`}}>
            <div className="flex flex-col mx-4">
              <button className="bg-dark hover:bg-gray-400 text-white font-bold py-3.5 rounded">Comprar ahora</button>
            </div>
          </Link>
          <div className="flex flex-col mx-4">
            <button className="border-purple mt-2.5 hover:bg-gray-900 text-dark font-semibold hover:text-white p-3.5 border hover:border-transparent rounded">Agregar al carrito</button>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-3/5 sm:pr-32">
        <h2 className="text-4xl font-black mt-6 sm:mt-0">{name}</h2>
        <div className="flex justify-center items-center pix-5 sm:hidden">
          <div className="flex items-center">
            <p className="text-2xl font-extrabold">co</p>
            <p className="text-sxl font-extrabold">${price}</p>
          </div>
          <p className="text-2xl font-normal text-gray-400">CO${real_price}</p>                
        </div>
        <p className="mt-6 leading-6">Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sedut.</p>
        <div className="w-56 mt-6">
          <Statistics level={level} users={users} score={score} />
        </div> 
        <div className="flex items-center mt-10 gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
          <div>
            <p>Subtitle 3 - Nombre profesor</p>
            <p>Body 3 - Cargo profesor</p>
          </div>
        </div>
        <div className="w-full bg-gray-200 mt-10 sm:hidden sm:mt-0">
          <Link to={{pathname:`/checkout/${id}`}}>
            <div className="flex flex-col mx-4 pt-6">
              <button className="bg-dark hover:bg-gray-400 text-white font-bold py-3.5 rounded">Comprar ahora</button>
            </div>
          </Link>
          <div className="flex flex-col mx-4 pb-6">
            <button className="border-purple mt-2.5 hover:bg-gray-900 text-dark font-semibold hover:text-white p-3.5 border hover:border-transparent rounded">Agregar al carrito</button>
          </div>
        </div>
        <div className="flex justify-around mt-10 gap-16">
          <div className="flex flex-col items-center justify-center">
            <img src={urlIconHeart} alt=""/>
            <p>Acción 1</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={urlIconMoon} alt=""/>
            <p>Acción 1</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={urlIconNavigation} alt=""/>
            <p>Acción 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;