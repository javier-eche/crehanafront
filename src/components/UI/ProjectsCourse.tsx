import React from 'react';
import urlIconEllipse from './../../assets/images/ellipse4.svg';

interface Props {
  username:string,
}

const ProjectsCourse: React.FC<Props> = ({username}) =>{
  return (
    <div className="w-full sm:w-1/2 mt-12">
      <h3 className="text-32px font-black mb-6">H3 - Proyectos del curso</h3>
      <div className="flex gap-5">
        <div className="relative big-box color-gray">
          <div className="absolute left-4 bottom-4 flex gap-2">
            <img src={urlIconEllipse} alt=""/>
            <p className="text-xs text-white">{username}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="relative small-box color-gray">
            <div className="absolute left-4 bottom-4 flex gap-2">
              <img src={urlIconEllipse} alt=""/>
              <p className="text-xs text-white">{username}</p>
            </div>
          </div>
          <div className="relative small-box color-gray">
            <div className="absolute left-4 bottom-4 flex gap-2">
              <img src={urlIconEllipse} alt=""/>
              <p className="text-xs text-white">{username}</p>
            </div>
          </div>
          <div className="relative small-box color-gray">
            <div className="absolute left-4 bottom-4 flex gap-2">
              <img src={urlIconEllipse} alt=""/>
              <p className="text-xs text-white">{username}</p>
            </div>
          </div>
          <div className="flex justify-center items-center small-box bg-gray-900">
            <h3 className="text-white text-5xl font-extrabold">+07</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCourse;