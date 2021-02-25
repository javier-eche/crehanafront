import React from 'react';
import urlIconCategory from "./../../assets/images/icon-2.svg";

const Categories = () => {
  return (
    <div className="mt-3.5">
      <h4 className="text-2xl font-black">Title H4 - Categories</h4>
      <div className="w-full flex justify-between">
        <div className="w-28 h-28 bg-gray-100 flex flex-col	justify-center items-center	rounded-lg">
          <img src={urlIconCategory} alt=""/>
          <p>Category</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;