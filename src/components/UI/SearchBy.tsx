import React from "react";

const SearchBy = () => {
  return (
    <div className="w-full mt-3.5">
      <h4 className="text-2xl font-black">Title H4 - Listado de cursos</h4>
      <div className="w-full flex justify-between">
        <div>
          <p className="text-xs font-bold">CATEGORIA</p>
          <select className="w-52 border bg-white rounded px-3 py-2 outline-none">
            <option className="py-1">Todos</option>
            <option className="py-1">Option 2</option>
            <option className="py-1">Option 3</option>
          </select>         
        </div>
        <button className="bg-dark hover:bg-gray-400 text-white font-bold px-4 rounded">Aplicar filtros</button>       
      </div>

    </div>
  );
}

export default SearchBy;