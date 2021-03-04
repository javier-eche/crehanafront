import React, { useState } from "react";
import ContainerCards from "./ContainerCards";
import SearchByItem from "./SearchByItem";

interface Props {
  categories: any[],
  subcategories: any[],
  levels: any[],
  prices: any[],
  data: any[];
}

const SearchBy: React.FC<Props> = ({ categories, subcategories, levels, prices, data }) => {

  const [currentCategory, setCurrentCategory] = useState("");
  const [currentSubcategory, setCurrentSubcategory] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");
  const [currentprice, setCurrentPrice] = useState(0);

  const [currentData, setCurrentData]: any[] = useState(data);

  const setFilteredCategory = (categoryReceived: string) => setCurrentCategory(categoryReceived);
  const setFilteredSubcategory = (subcategoryReceived: string) => setCurrentSubcategory(subcategoryReceived);
  const setFilteredLevel = (levelReceived: string) => setCurrentLevel(levelReceived);
  const setFilteredPrice = (priceReceived: string) => setCurrentPrice(parseInt(priceReceived));

  console.log(currentCategory, currentSubcategory)

  const filterData = () => {
    const a = filterCategory(data);
    const b = filterSubcategory(a);
    const c = filterLevel(b);
    const d = filterPrice(c);
    setCurrentData(d)
    console.log(currentData)
  }

  const filterCategory = (data: any[]) => {
    return data.filter(course => {
      if (!(currentCategory === "" || currentCategory === "Todos")) {
        if (currentCategory === course.category) {
          return course;
        }
      } else {
        return course
      }
    })
  }

  const filterSubcategory = (a: any[]) => {
    return a.filter(course => {
      if (!(currentSubcategory === "" || currentSubcategory === "Todos")) {
        if (currentSubcategory === course.subcategory) {
          return course;
        }
      } else {
        return course
      }
    })
  }

  const filterLevel = (b: any[]) => {
    return b.filter(course => {
      if (!(currentLevel === "" || currentLevel === "Todos")) {
        if (currentLevel === course.level) {
          return course;
        }
      } else {
        return course
      }
    })
  }

  const filterPrice = (c: any[]) => {
    return c.filter(course => {
      if (!(currentprice.toString() === "0" || currentprice.toString() === "Todos")) {
        if (currentprice === course.price) {
          return course;
        }
      } else {
        return course
      }
    })
  }

  return (
    <>
      <div className="w-full mt-14">
        <h4 className="text-xl sm:text-2xl font-black">Title H4 - Listado de cursos</h4>
        <div className="hidden lg:flex justify-between items-center mt-10">
          <SearchByItem filterBy={"CATEGORIA"} categories={categories} filtered={setFilteredCategory} />
          <SearchByItem filterBy={"SUBCATEGORIA"} categories={subcategories} filtered={setFilteredSubcategory} />
          <SearchByItem filterBy={"NIVEL"} categories={levels} filtered={setFilteredLevel} />
          <SearchByItem filterBy={"PRECIO"} categories={prices} filtered={setFilteredPrice} />
          <button onClick={(e) => filterData()} className="hidden xl:block bg-dark hover:bg-gray-400 text-white font-bold px-4 w-48 h-12 rounded">Aplicar filtros</button>
        </div>
        <button className="w-full lg:hidden border-purple font-semibold py-2 px-4 hover:bg-gray-900 hover:text-white text-dark rounded">Filtrar por</button>
      </div>
      <ContainerCards dataa={currentData} />
    </>
  );
}

export default SearchBy;