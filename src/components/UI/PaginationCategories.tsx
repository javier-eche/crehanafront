import React from 'react';
import urlIconLeft from './../../assets/images/arrow-left.svg';
import urlIconRigth from './../../assets/images/arrow-rigth.png';

interface Props {
  coursesPerPage: number,
  totalCourses: number,
  paginate:any;
}

const PaginationCategories: React.FC<Props> = ({ coursesPerPage, totalCourses, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 flex justify-center items-center rounded-lg border-2 border-gray-300 mr-10">
        <img src={urlIconRigth} alt=""/>
      </div>
      <p className="text-gray-300">Pagina</p>
      <select onChange={(e) => paginate(e.target.value)} className="w-16 h-14 border-2 border-gray-300 bg-white rounded-lg mx-6 px-3 py-2 outline-none">
        {pageNumbers.map(item => {
          return <option key={item} >{item}</option>
        })}
      </select>
      <p className="text-gray-300">de {pageNumbers.length}</p>
      <div className="w-12 h-12 flex justify-center items-center rounded-lg border-2 border-gray-300 ml-10">
      <img src={urlIconLeft} alt=""/>
      </div>
    </div>

  );
}

export default PaginationCategories;