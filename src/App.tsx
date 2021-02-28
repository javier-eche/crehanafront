import React, { useEffect, useState } from 'react';
import Checkout from './components/pages/Checkout';
import Details from './components/pages/Details';
import Home from './components/pages/Home';
import Axios from 'axios';

function App(): JSX.Element {

  const [listData, setListData] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const { data } = await Axios.get("http://127.0.0.1:8000/api/v1/courses/");
      setListData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="container mx-auto px-9 pcb">
      <Home data = {listData}/>
    </div>
  );
}

export default App;
