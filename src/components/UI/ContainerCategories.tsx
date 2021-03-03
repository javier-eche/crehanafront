import React, { useState } from 'react';
import urlIconCategory from "./../../assets/images/icon-2.svg";
import PaginationCategories from './PaginationCategories';

interface Props {
  categories: any[],
}

const ContainerCategories: React.FC<Props> = ({categories}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [categoriesPerPage, setCategoriesPerPage] = useState(3);

    const indexOfLastCategory = currentPage * categoriesPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
    const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory)

    const paginateCategories = (pageNumber:number) => {
        setCurrentPage(pageNumber)
    }

  return (
    <div className="mt-14 sm:hidden">
      <h4 className="text-2xl font-black">Title H4 - Categories</h4>
      <div className="flex justify-between w-full gap-4 overflow-hidden mt-4">
        {currentCategories.map( category => {
          return (
              <div key={category} className="w-28 h-28 bg-gray-100 flex flex-col justify-center items-center	rounded-lg">
                <img src={urlIconCategory} alt="" />
                <p className="mx-10 text-sm font-bold leading-5 text-center">{category}</p>
              </div>          
          );
        })}
      </div>
      <div className="flex justify-center mt-11">
        <PaginationCategories categoriesPerPage={categoriesPerPage} totalCategories={categories.length} paginateCategories={paginateCategories} currentPage={currentPage}/>
      </div>
    </div>
  );
}

export default ContainerCategories;