import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import HeaderDark from '../UI/HeaderDark';
import PaidCourse from '../UI/PaidCourse';

interface Props {
  match:any,
}

const Checkout: React.FC<Props> = ({match}) => {
  const [selectedCourse, setSelectedCourse]:any = useState({});
  const idCourse = match.params.id;

  useEffect(() => {
    const fetchCourse = async() => {
      const { data } = await Axios.get(`http://127.0.0.1:8000/api/v1/courses/${idCourse}/`)
      setSelectedCourse(data);
    };
    fetchCourse();
  }, [idCourse]);
  return (
    <div>
      <HeaderDark />
      <PaidCourse dataCourse={selectedCourse}/>
    </div>
  );
}

export default Checkout;