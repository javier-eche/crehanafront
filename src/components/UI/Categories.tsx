import React from 'react';
import urlIconCategory from "./../../assets/images/icon-2.svg";

interface Props {
  categories: any[],
}

const Categories: React.FC<Props> = ({categories}) => {
  return (
    <div className="hidden sm:flex flex-col mt-14">
      <h4 className="text-2xl font-black">Title H4 - Categories</h4>
      <div className="w-full flex gap-4 overflow-hidden mt-4">
        {categories.map( category => {
          return (
              <div key={category} className="w-28 h-28 bg-gray-100 flex flex-col justify-center items-center	rounded-lg">
                <img src={urlIconCategory} alt="" />
                <p className="mx-10 text-sm font-bold leading-5 text-center">{category}</p>
              </div>          
          );
        })}

      </div>
    </div>
  );
}

export default Categories;