'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const EditTopicForm = ({id, title, description}) => {

  const [newTitle, setnewTitle ] = useState(title);
  const [newDescription, setNewDescription ] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if(!res.ok) {
        throw new Error("Failed to update topic.");
      }

      router.refresh();
      router.push("/");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input 
        onChange={(e) => setnewTitle(e.target.value)}
        value={newTitle}
        type='text' 
        placeholder='Topic Title' 
        className='border border-slate-500 px-8 py-2'/>

        <input 
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type='text' 
        placeholder='Description' 
        className='border border-slate-500 px-8 py-2' />

        <button 
          type="submit"
        className='bg-violet-600 font-medium text-white w-fit py-2 px-6 rounded-md'>
            Update
        </button>
    </form>
  );
}

export default EditTopicForm