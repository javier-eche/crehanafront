import React from 'react';
import LevelStarts from './LevelStarts';
import urlIconArrow from './../../assets/images/arrow-ios-down.svg';

const Testimonial= () =>{
  return (
    <div className="mt-33">
      <div className="flex gap-4">
        <div className="w-10 h-10 color-gray rounded-lg"></div>
        <div>
          <p>Usuario213</p>
          <LevelStarts nOn={5} nOff={0} />
        </div>
      </div>
      <p className="text-base leading-6 mt-4">Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sedut.</p>
      <div className="flex mt-4 gap-2">
        <p className="font-extrabold">Textlink</p>
        <img src={urlIconArrow} alt=""/>
      </div>
    </div>
  );
}

export default Testimonial;