import React from 'react';
import LevelStarts from './LevelStarts';
import ProgressBar from './ProgressBar';
import Questions from './Questions';
import Testimonial from './Testimonial';

const Ratings = () =>{
  return (
    <div className="w-1/2 mt-12">
      <h3 className="text-32px font-black mb-6">Valoraciones</h3>
      <div className="flex">
        <div className="mr-10">
          <h1 className="font-52 font-extrabold">4.8</h1>
          <div>
            <LevelStarts nOn={4} nOff={1} />
          </div>
          <p className="text-base text-gray">Media total</p>
        </div>
        <div className="flex flex-col justify-between pt-4 pb-1 mr-8">
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
        </div>
        <div className="flex flex-col justify-between pt-3">
          <LevelStarts nOn={5} nOff={0} />
          <LevelStarts nOn={4} nOff={1} />
          <LevelStarts nOn={3} nOff={2} />
          <LevelStarts nOn={2} nOff={3} />
          <LevelStarts nOn={1} nOff={4} />
        </div>
      </div>
      <Testimonial />
      <Questions />
    </div>
  );
}

export default Ratings;