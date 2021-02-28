import React from 'react';
import Banner from '../UI/Banner';
import Categories from '../UI/Categories';
import ContainerCards from '../UI/ContainerCards';
import Header from '../UI/Header';
import SearchBy from '../UI/SearchBy';

interface Props {
  data: any[],
}

const Home: React.FC<Props>  = ({data}) => {
  //const categories = [...new Set(data.map(course => course.category))];
  const categories = Array.from(new Set(data.map(course => course.category)));
  return (
    <div>
      <Header />
      <Banner />
      <Categories categories={categories}/>
      <SearchBy />
      <ContainerCards data={data} />
    </div>
  );
}

export default Home;