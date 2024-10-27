import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';
function Card(props) {
  let course = props.course;
  let likedCourses=props.likedCourses;
  let setlikedcourses=props.setlikedcourses;

  function clickhandler(){
      if(likedCourses.includes(course.id)){
        setlikedcourses((prev)=>prev.filter((cid)=>(cid!==course.id)))
        toast.warning("like removed");
      }

      else{
        if(setlikedcourses.length===0){
          setlikedcourses([course.id]);
        }
        else{
          setlikedcourses((prev)=>([...prev,course.id]));
        }
        toast.success("liked successfully");
      }
  }
  return (
    <div className='bg-[#202052] m-2 w-[300px] overflow-hidden rounded-md'>
      <div className='relative'>
        <img className=''src={course.image.url} alt="unable to load" />
        <div>
        <button onClick={clickhandler} className='p-2 bg-white rounded-full absolute right-2 bottom-2'>
          {
            (() => {
              if (likedCourses.includes(course.id)) {
                return <FcLike fontSize={"1.75rem"} />;
              } else {
                return <FcLikePlaceholder fontSize={"1.75rem"} />;
              }
            })()
            // likedCourses.includes(course.id) ? <FcLike fontSize={"1.75rem"}/> : <FcLikePlaceholder fontSize={"1.75rem"}/>
          }
        </button>
      </div>
      </div>
      
      <div className='p-2 text-slate-200'>
        <div>
          <p className='font-bold text-white'>{course.title}</p>
          <p>
            {
              course.description.length>100 ? (course.description.substr(0,100)) + '...' : (course.description)
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
