import { useEffect, useState } from 'react';
import Axios from 'axios';
import AboutCourse from '../UI/AboutCouse';
import Header from '../UI/Header';
import ProjectsCourse from '../UI/ProjectsCourse';
import Ratings from '../UI/Ratings';
import Summary from '../UI/Summary';
import Temary from '../UI/Temary';

interface Props {
  match:any,
}

const Details: React.FC<Props> = ({match}) => {
  
  const [selectedCourse, setSelectedCourse]:any = useState({});
  const idCourse = match.params.id;

  useEffect(() => {
    const fetchCourse = async() => {
      const { data } = await Axios.get(`https://catalogo-courses-back.herokuapp.com/api/v1/courses/${idCourse}/`)
      setSelectedCourse(data);
    };
    fetchCourse();
  }, [idCourse]);
  
  return (
    <>
      <Header />
      <Summary dataCourse={selectedCourse}/>
      <Temary />
      <AboutCourse />
      <ProjectsCourse username={selectedCourse.username}/>
      <Ratings />
    </>
  );
}

export default Details;