import React from 'react';

const ProjectsCourse = () =>{
  return (
    <div className="w-full sm:w-1/2 mt-12">
      <h3 className="text-32px font-black mb-6">H3 - Proyectos del curso</h3>
      <div className="flex gap-5">
        <div className="big-box color-gray"></div>
        <div className="grid grid-cols-2 gap-5">
          <div className="small-box color-gray"></div>
          <div className="small-box color-gray"></div>
          <div className="small-box color-gray"></div>
          <div className="small-box color-gray"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCourse;