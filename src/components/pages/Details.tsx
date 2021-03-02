import react, { useEffect, useState } from 'react';
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
      const { data } = await Axios.get(`http://127.0.0.1:8000/api/v1/courses/${idCourse}/`)
      setSelectedCourse(data);
    };
    fetchCourse();
  }, [idCourse]);
  
  return (
    <div>
      <Header />
      <Summary dataCourse={selectedCourse}/>
      <Temary />
      <AboutCourse />
      <ProjectsCourse />
      <Ratings />
    </div>
  );
}

export default Details;