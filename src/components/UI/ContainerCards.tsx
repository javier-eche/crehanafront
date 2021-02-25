import React from 'react';
import Card from './Card';

const ContainerCards = () => {
  return (
    <div className="container my-12 mx-auto">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default ContainerCards;