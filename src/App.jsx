import './App.css'
import Navbar from './components/navbar.jsx'
import Cards from './components/cards'
import Filter from './components/filter'
import Spinner from './components/spinner'
import {apiUrl,filterData} from './data.js'
import { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
function App() {


  const [courses,setcourses]=useState([]);
  const [loading,setloading]=useState(true);
  const [category,setcategory]=useState(filterData[0].title)
  async function fetchdata(){
    try {
      let response=await fetch(apiUrl);
      let output=await response.json();
      setcourses(output.data);
    } catch (error) {
      toast.error("Please check your network");
    }
  }
  useEffect(()=>{
    fetchdata();
    setloading(false);
  },[])
  return (
    <div className='min-h-screen flex flex-col bg-[#2c2f53b7]'>
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData} category={category} setcategory={setcategory}/>
      </div>
      <div className='w-2/3 max-w-screen mx-auto  flex flex-wrap justify-center items-center'>
        {
          loading?(<Spinner/>) :(<Cards category={category} courses={courses}/>)
        }
      </div>
    </div>
  )
}

export default App
