import React from 'react';
import Card from './Card';

interface Props {
  data: any[],
}

const ContainerCards: React.FC<Props>   = ({data}) => {
  return (
    <div className="container my-12 mx-auto">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        { data.map(course => {
          const {id, name, level, users, score, price, real_price} = course;
          return <Card key={id} id={id} name={name} level={level} users={users} score={score} price={price} real_price={real_price} />
        })};        
      </div>
    </div>
  );
}

export default ContainerCards;