import React from 'react';

interface Props {
  categories: any[],
  filterBy:string,
}

const SearchByItem: React.FC<Props> = ({filterBy, categories}) =>{
  return (
    <div className="flex flex-col">
      <p className="text-xs font-bold">{filterBy}</p>
      <select className="w-52 border h-12 bg-white rounded px-3 py-2 outline-none">
        <option className="py-1">Todos</option>
        {categories.map(item => {
          return  <option key={item} className="py-1">{item}</option>
        })}
      </select>
    </div>
  );
}

export default SearchByItem;