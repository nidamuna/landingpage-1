import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='w-full bg-white h-auto py-4 px-8 flex justify-between items-center shadow-lg'>
            <span className='bg-blue-500 p-2 text-white'>
                Logo Pelatihan
            </span>
            <div className='font-bold p-2 text-[#212529]'>
                <ul className='flex flex-row cursor-pointer'>
                    <li className='mr-10 last:mr-0 hover:text-blue-500 hover:underline'>Home</li>
                    <li className='mr-10 last:mr-0 hover:text-blue-500 hover:underline'>Pelatihan</li>
                    <li className='mr-10 last:mr-0 hover:text-blue-500 hover:underline'>Fasilitas</li>
                    <li className='mr-10 last:mr-0 hover:text-blue-500 hover:underline'>Contact Us</li>
                </ul>
            </div>
            <button className='bg-blue-500 rounded-full text-white font-semibold p-2 shadow-md'>
                Daftar Sekarang
            </button>
        </nav>
    </>
  )
}

export default Navbar