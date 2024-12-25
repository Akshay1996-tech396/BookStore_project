import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from "react-router-dom";
import axios from "axios";


function Course() {
  const [book, setBook] = useState([]);
  useEffect(()=>{
      const getBook = async()=>{
        try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
        } catch (error) {
          console.log(error);
        }
      }
      getBook();
  },[]);
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto md:px-20 px px-4 ">
      <div className="pt-28 items-center justify-center text-center">
        <h1 className="text-2xl  md:text-4xl">We're delighted to have you{" "}
          <span className="text-pink-500">Here!! :)</span>
        </h1>
        <p className="mt-12 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam sequi consectetur dolor mollitia iusto. Amet eveniet, sed quidem rem quas atque eius ea corrupti laboriosam suscipit! Obcaecati eaque praesentium repellat laudantium tempora magnam! Aliquid architecto rerum amet perspiciatis nisi saepe ipsa quisquam exercitationem cumque, minus aut illum reprehenderit quas adipisci temporibus cum sunt ex commodi tenetur optio vel eius iusto!
        </p>
        <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">Back</button>
        </Link>
        
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-4">
          {
            book.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
      </div>
    </div>
    </>
  )
}

export default Course
