import React from 'react';
import urlIconStarOn from './../../assets/images/starOn.svg';
import urlIconStarOff from './../../assets/images/starOff.svg';

interface Props {
  nOn:number,
  nOff:number
}

const LevelStarts: React.FC<Props> = ({nOn, nOff}) => {
  let arrayStarOn:any = [];
  let arrayStarOff:any = [];
  for(let i=0; i < nOn; i++){
    arrayStarOn.push(<img key={i} src={urlIconStarOn} alt=""/>)
  }
  for(let i=0; i < nOff; i++){
    arrayStarOff.push(<img key={i} src={urlIconStarOff} alt=""/>)
  }
  const startRating = <div className="flex">
                        {arrayStarOn}{arrayStarOff}
                      </div> 
  return (
    <>
      {startRating}
    </>
  );
}

export default LevelStarts;