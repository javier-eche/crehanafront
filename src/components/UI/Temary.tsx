import React from 'react';
import urlIconArrow from './../../assets/images/arrow-ios-down.svg';

const Temary = () =>{
  return (
    <div className="mt-16 sm:mt-0">
      <h3 className="text-32px font-black mb-6">H3 - Temario del curso</h3>
      <div className="pb-28-75">
        <p className="text-lg font-bold">Introducción</p>
        <ol className="list-decimal list-inside	text-lg font-normal">
          <li>Un cuento de superación con todo</li>
          <li>El no ilustrator</li>
          <li>Break 1: Súbete al robot</li>
        </ol>
      </div>
      <div className="pb-28-75">
        <p className="text-lg font-bold">Buildungroman</p>
        <ol className="list-decimal list-inside	text-lg font-normal" start={4}>
          <li>Objetivo de Branding</li>
          <li>Público Objetivo</li>
          <li>Selecciona tu Red Social</li>
        </ol>
      </div>
      <div className="pb-28-75">
        <p className="text-lg font-bold">¿Qué hacer con tu vida?</p>
        <ol className="list-decimal list-inside	text-lg font-normal" start={4}>
          <li>Objetivo de Branding</li>
          <li>Público Objetivo</li>
          <li>Selecciona tu Red Social</li>
        </ol>
      </div>
      <div className="flex">
        <p>Textlink</p>
        <img src={urlIconArrow} alt=""/>
      </div>
    </div>
  );
}

export default Temary;