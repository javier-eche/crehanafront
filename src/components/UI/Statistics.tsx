import React from 'react';
import urlIconLevel from './../../assets/images/bar-chart-2.svg';
import urlIconPeople from './../../assets/images/people.svg';
import urlIconScore from './../../assets/images/star.svg';

interface Props {
  level?:string,
  users?:number,
  score?:number,
}

const Statistics: React.FC<Props> = ({level,users,score}) => {
  return (
    <div className="flex justify-between mt-0.5">
      <div className="flex items-center gap-1">
        <img src={urlIconLevel} alt=""/>
        <p className="text-xs font-bold text-gray-400">{level}</p>
      </div>
      <div className="flex items-center gap-1">
        <img src={urlIconPeople} alt=""/>
        <p className="text-xs font-bold text-gray-400">{users} Usuarios</p>
      </div>
      <div className="flex items-center gap-1">
        <img src={urlIconScore} alt=""/>
        <p className="text-xs font-bold text-gray-400">{score}</p>
      </div>
    </div>
  );
}

export default Statistics;