import React, { useEffect, useState } from 'react';
import Card from './Card';
import PaginationCourses from './PaginationCourses';

interface Props {
  dataa: any[],
}

const ContainerCards: React.FC<Props>   = ({dataa}) => {

  console.log(dataa)

  const [courses, setCourses] = useState(dataa);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(12)

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  console.log(courses)
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber:number) => {
    pageNumber >= 1 ? setCurrentPage(pageNumber) : setCurrentPage(1)
  }

  useEffect(() => {
    setCourses(dataa)
  },[dataa])

  console.log(currentCourses)
  return (
    <div className="container my-12 mx-auto">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        { currentCourses.map(course => {
          const {id, name, level, users, score, price, real_price} = course;
          return <Card key={id} id={id} name={name} level={level} users={users} score={score} price={price} real_price={real_price} />
        })}        
      </div>
      <div className="w-full flex flex-row-reverse">
        <PaginationCourses coursesPerPage={coursesPerPage} totalCourses={courses.length} paginate={paginate} currentPage={currentPage}/>
      </div>
    </div>
  );
}

export default ContainerCards;