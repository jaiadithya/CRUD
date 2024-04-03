"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


const page = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    console.log(title,description)
    e.preventDefault();
  
    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }else{
      try {
        const res = await fetch("http://localhost:3000/api/topics", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        });
  
        if (res.ok) {
          router.refresh();
          router.push("/");
        } else {
          throw new Error("Failed to create a topic");
        }
      } catch (error) {
        console.log(error);
      }
    }


  
    
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input 
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type='text' 
        placeholder='Topic Title' 
        className='border border-slate-500 px-8 py-2'/>

        <input 
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type='text' 
        placeholder='Description' 
        className='border border-slate-500 px-8 py-2' />

        <button 
      onClick={handleSubmit }
className='bg-violet-600 font-medium text-white w-fit py-2 px-6 rounded-md'>
            Add Topic
        </button>
    </form>
  )
}

export default page