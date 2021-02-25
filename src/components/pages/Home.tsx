import React from 'react';
import Banner from '../Banner';
import Categories from '../Categories';
import Header from '../Header';

function Home(): JSX.Element {
    return (
      <div>
        <Header />
        <Banner />
        <Categories />
      </div>
    );
}

export default Home;