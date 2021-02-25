import React from 'react';
import Banner from '../UI/Banner';
import Categories from '../UI/Categories';
import ContainerCards from '../UI/ContainerCards';
import Header from '../UI/Header';
import SearchBy from '../UI/SearchBy';

function Home(): JSX.Element {
    return (
      <div>
        <Header />
        <Banner />
        <Categories />
        <SearchBy />
        <ContainerCards />
      </div>
    );
}

export default Home;