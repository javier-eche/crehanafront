import React from 'react';
import urlIconLeft from './../../assets/images/arrow-ios-leftt.svg';
import urlIconRigth from './../../assets/images/arrow-ios-right.svg';

interface Props {
  categoriesPerPage: number,
  totalCategories: number,
  paginateCategories:any,
  currentPage:number,
}

const PaginationCategories: React.FC<Props> = ({categoriesPerPage, totalCategories, paginateCategories, currentPage}) => {
  
  let current = currentPage;

  const upPage = () => {
    current += 1;
    paginateCategories(current);
  }

  const downPage = () => {
    current -= 1;
    paginateCategories(current);
  }

  return (
    <div className="flex items-center">
      <img onClick={downPage} src={urlIconLeft} alt=""/>
      <p className="mx-20">{current} / {totalCategories}</p>
      <img onClick={upPage} src={urlIconRigth} alt=""/>
    </div>
  );
}

export default PaginationCategories;