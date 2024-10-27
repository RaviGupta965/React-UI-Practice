import React from 'react'

function filter(props) {
    let filterData = props.filterData;
    let category=props.category;
    let setcategory=props.setcategory;

    const filterhandler=(title)=>{
      setcategory(title)
    }
  return (
    <div className='w-1/2 flex mx-auto flex-wrap max-w-max space-x-4 gap-y-4 py-4 justify-around'>
    {
        filterData.map((data)=>{
            return <button onClick={()=>filterhandler(data.title)} className={`bg-[#282626] text-white p-2 rounded-md hover:opacity-80 transition-all duration-200 ${category===data.title ? "border-2 border-white" : ""}`} key={data.id}>{data.title}</button>
        })
    }
    </div>
  )
}

export default filter
