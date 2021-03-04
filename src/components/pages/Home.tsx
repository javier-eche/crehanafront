import React from 'react';
import Banner from '../UI/Banner';
import Categories from '../UI/Categories';
import ContainerCards from '../UI/ContainerCards';
import ContainerCategories from '../UI/ContainerCategories';
import Header from '../UI/Header';
import SearchBy from '../UI/SearchBy';

interface Props {
  data: any[],
}

const Home: React.FC<Props>  = ({data}) => {
  const categories = Array.from(new Set(data.map(course => course.category)));
  const subcategories = Array.from(new Set(data.map(course => course.subcategory)));
  const levels = Array.from(new Set(data.map(course => course.level)));
  const prices = Array.from(new Set(data.map(course => course.price)));
  return (
    <div>
      <Header />
      <Banner />
      <Categories categories={categories}/>
      <ContainerCategories categories={categories}/>
      <SearchBy categories={categories} subcategories={subcategories} levels={levels} prices={prices} data={data}/>
    </div>
  );
}

export default Home;