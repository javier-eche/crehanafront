import React from "react";
import SearchByItem from "./SearchByItem";

interface Props {
  categories: any[],
  subcategories: any[],
  levels:any[],
  prices:any[],
}

const SearchBy: React.FC<Props> = ({categories, subcategories, levels, prices}) => {
  return (
    <div className="w-full mt-14">
      <h4 className="text-xl sm:text-2xl font-black">Title H4 - Listado de cursos</h4>
      <div className="hidden lg:flex justify-between items-center mt-10">
          <SearchByItem filterBy={"CATEGORIA"} categories={categories}/>
          <SearchByItem filterBy={"SUBCATEGORIA"} categories={subcategories}/>
          <SearchByItem filterBy={"NIVEL"} categories={levels}/>
          <SearchByItem filterBy={"PRECIO"} categories={prices}/>
        <button className="hidden xl:block bg-dark hover:bg-gray-400 text-white font-bold px-4 w-48 h-12 rounded">Aplicar filtros</button>       
      </div>
      <button className="w-full lg:hidden border-purple font-semibold py-2 px-4 hover:bg-gray-900 hover:text-white text-dark rounded">Filtrar por</button>
    </div>
  );
}

export default SearchBy;