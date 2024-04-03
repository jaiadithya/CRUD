import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between rounded-md items-center bg-violet-600 px-8 py-4'>
        <Link className='text-white font-bold' href={"/"}>CRUD</Link>
        <Link className='bg-white p-2 px-4 rounded-md font-medium' href={"/addTopic"}>Add Topic</Link>
    </nav>
  )
}

export default Navbar