import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
    <Router>
      <div className="container mx-auto px-9 pcb">
        <Switch>
          {/* <Home data = {listData}/> */}
          <Route exact path="/" component={() => <Home data={listData} />}/>
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/checkout/:id" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
