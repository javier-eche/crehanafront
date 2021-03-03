import React, { useState } from 'react';
import Card from './Card';
import PaginationCategories from './PaginationCategories';

interface Props {
  data: any[],
}

const ContainerCards: React.FC<Props>   = ({data}) => {

  const [courses, setCourses] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(12)

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstPost = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstPost, indexOfLastCourse);

  const paginate = (pageNumber:number) => setCurrentPage(pageNumber)

  return (
    <div className="container my-12 mx-auto">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        { currentCourses.map(course => {
          const {id, name, level, users, score, price, real_price} = course;
          return <Card key={id} id={id} name={name} level={level} users={users} score={score} price={price} real_price={real_price} />
        })}        
      </div>
      <div className="w-full flex flex-row-reverse">
        <PaginationCategories coursesPerPage={coursesPerPage} totalCourses={courses.length} paginate={paginate} />
      </div>
    </div>
  );
}

export default ContainerCards;