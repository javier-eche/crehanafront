import react from 'react';
import AboutCourse from '../UI/AboutCouse';
import Header from '../UI/Header';
import ProjectsCourse from '../UI/ProjectsCourse';
import Ratings from '../UI/Ratings';
import Summary from '../UI/Summary';
import Temary from '../UI/Temary';

const Details = () => {
  return (
    <div>
      <Header />
      <Summary />
      <Temary />
      <AboutCourse />
      <ProjectsCourse />
      <Ratings />
    </div>
  );
}

export default Details;