"use client";


import { useRouter } from 'next/navigation';
import React from 'react'
import { BsFillTrashFill } from "react-icons/bs";


const RemoveBtn = ({ id }) => {
const router = useRouter ();
const removeTopic = async () => {
  const confirmed = confirm("Are you sure !");

  if (confirmed) {
    const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
      method: "DELETE",
    });

  if (res.ok) {
    router.refresh();
  }  
  }
};

  return (
    <button onClick={removeTopic}>
<BsFillTrashFill size={24} className='text-red-600'/>
    </button>
  )
}

export default RemoveBtn