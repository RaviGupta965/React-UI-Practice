import React from 'react'
import Card from './card';
import { useState } from 'react';
function Cards(props) {
  let courses=props.courses;
  let category=props.category;
  const [likedcourses,setlikedcourses]=useState([]);
  function getcourses(){
    if(category=='ALL'){
      let allcourses=[];
      Object.values(courses).forEach(array=>{
        array.forEach(course=>{
          allcourses.push(course)
        })
      })
      return allcourses;
    }
    else{
      console.log(courses);
      return courses[category];
    }
  }
   
  return (
    <div className='m-2 flex flex-wrap justify-center'>
      {
        getcourses().map((course)=>{
          return <Card key={course.id} course={course} likedCourses={likedcourses} setlikedcourses={setlikedcourses}/>
        })
      }
    </div>
  )
}

export default Cards;
