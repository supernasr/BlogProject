import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase/config';
 
export default function Homepage() {

    const [alldata, setData] = useState([])


    const getAllBlogs = async ( )=> {

        let dataitems = []
        const response = await getDocs(collection(db, "Blog_db"));
        response.forEach((doc) => {

        // doc.data() is never undefined for query doc snapshots
        const item = {
            id: doc.id,
            title: doc.data().title,
            img: doc.data().img,
            author: doc.data().author,
            description: doc.data().description,
        }
        // console.log(item);
        dataitems.push(item)
        });

        setData(dataitems)
    }

    useEffect(()=>{
        getAllBlogs()
    }, [])

  return (
    
    <div className='bg-gray-800 min-h-[100vh]'>
        <div className="flex justify-between px-10 items-center bg-gray-800 h-10 shadow-lg shadow-gray-700">
            <div className="left"><h1 className='text-white font-extrabold'>My-<span className='text-red-500 font-extrabold'>Blog</span></h1></div>
            <div className="">
                <ul className='flex gap-5 text-white'>
                    <li>HOME</li>
                    <li>NEW BLOG</li>
                </ul>
            </div>
        </div>
        {/* all */}
     <div className="flex flex-wrap gap-10 pt-20 px-10">
        {
             alldata.map((item, index)=>(
                <div key={index} className=" bg-gray-700 w-[30%]">
      <div className="firdt">
        <img className='w-[100%]' src={item.img} alt="" />
        <div className="p-5 flex flex-col gap-5 ">
        <p className=' text-white font-bold'>{item.title}</p>
        <p className=' text-white text-xs'>{item.description}</p>
        <hr className='w-95' />
        <div className=" flex justify-between ">
            <div className="text-white"><p>{item.author}</p></div>
            <div className="gap-3 flex ">
            <i className={` pi pi-pencil text-white`}></i>
            <i className={` pi pi-trash text-white`}></i>
            </div>
        </div>
        </div>
      </div>
        </div>
            ))
        }
     </div>
    </div>
  )
}
