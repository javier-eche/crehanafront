import React from 'react';
import { Link } from 'react-router-dom';
import Statistics from './Statistics';
import urlIconHeart from './../../assets/images/heart.svg';
import urlIconMoon from './../../assets/images/moon.svg';
import urlIconNavigation from './../../assets/images/navigation-2.svg';
import urlIconPlay from './../../assets/images/play_icon.svg'

const Summary = () => {
  return (
    <div className="flex">
      <div className="w-3/5 pr-32">
        <h2 className="text-4xl font-black">Title H2 - Nombre del curso</h2>
        <p className="mt-6 leading-6">Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sedut.</p>
        <div className="w-56 mt-6">
          <Statistics />
        </div> 
        <div className="flex items-center mt-10 gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
          <div>
            <p>Subtitle 3 - Nombre profesor</p>
            <p>Body 3 - Cargo profesor</p>
          </div>
        </div>
        <div className="flex mt-10 gap-16">
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
      <div className="w-2/5">
        <div className="w-full h-movie bg-black flex flex-col justify-center items-center">
          <img src={urlIconPlay} alt=""/>
          <p className="text-xl font-black text-white mt-1">Ver Trailer del curso</p>
        </div>
        <div className="w-full h-description bg-gray-200 pt-2">
          <div className="flex justify-center items-center pix-5">
            <div className="flex items-center">
              <p className="text-2xl font-extrabold">co</p>
              <p className="text-sxl font-extrabold">$349,929</p>
            </div>
            <p className="text-2xl font-normal text-gray-400">CO$164.434</p>                
          </div>
          <Link to="/checkout">
            <div className="flex flex-col mx-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3.5 rounded">Comprar ahora</button>
            </div>
          </Link>
          <div className="flex flex-col mx-4">
            <button className="bg-transparent mt-2.5 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-3.5 border border-blue-500 hover:border-transparent rounded">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;