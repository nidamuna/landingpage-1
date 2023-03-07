import React, { useState } from 'react'
import {CiMenuKebab} from 'react-icons/ci'
import {IoCloseOutline} from 'react-icons/io5'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const handleNav = () => {
        setNavbar(!navbar);
    }

  return (
    <>
        <nav className='w-full bg-[#8ECAE6] h-[75px] py-4 px-8 flex justify-between items-center'>
            <span className='bg-blue-500 p-2 text-white'>
                Logo Pelatihan
            </span>
            <div className='font-bold p-2 text-[#023047]'>
                <ul className='hidden md:flex flex-row cursor-pointer'>
                    <li className='mr-10 last:mr-0 hover:text-[#0a58ca] hover:underline'><a href='#hero'>Tentang Kami</a></li>
                    <li className='mr-10 last:mr-0 hover:text-[#0a58ca] hover:underline'><a href='#materi'>Materi</a></li>
                    <li className='mr-10 last:mr-0 hover:text-[#0a58ca] hover:underline'><a href='#fasilitas'>Fasilitas</a></li>
                    <li className='mr-10 last:mr-0 hover:text-[#0a58ca] hover:underline'><a href='#footer'>Kontak Kami</a></li>
                </ul>
            </div>
            <a href='#daftar'>
                <button className='hidden md:flex bg-[#6136ff] hover:bg-[#0a58ca] rounded-full text-white font-semibold p-2 shadow-md'>
                    Daftar Sekarang
                </button>
            </a>
            {/* phone */}
            <div className='flex md:hidden'>
                <CiMenuKebab 
                    className={navbar ? 'hidden' : 'flex'}
                    onClick={handleNav}
                    style={{ height: '30px', width: '20px', color: '#120036'}}
                />
                <IoCloseOutline 
                    className={!navbar ? 'hidden' : 'flex'}
                    onClick={handleNav}
                    style={{ height: '30px', width: '20px', color: '#120036'}}
                />
            </div>
        </nav>
        <div className={navbar ? 'text-[#023047] w-full h-auto p-5 bg-white shadow-lg flex flex-col md:hidden' : 'hidden'}>
            <ul className='flex flex-col cursor-pointer'>
                <li onClick={handleNav} className='mb-4 last:mb-0 hover:text-[#0a58ca] hover:underline'><a href='#hero'>Tentang Kami</a></li>
                <li onClick={handleNav} className='mb-4 last:mb-0 hover:text-[#0a58ca] hover:underline'><a href='#materi'>Materi</a></li>
                <li onClick={handleNav} className='mb-4 last:mb-0 hover:text-[#0a58ca] hover:underline'><a href='#fasilitas'>Fasilitas</a></li>              
                <li onClick={handleNav} className='mb-4 last:mb-0 hover:text-[#0a58ca] hover:underline'><a href='#footer'>Kontak Kami</a></li>
            </ul>
            <a href='#daftar'>
                <button onClick={handleNav} className='mt-8 w-full bg-[#6136ff] hover:bg-[#0a58ca] rounded-full text-white font-semibold p-2 shadow-md'>
                    Daftar Sekarang
                </button>
            </a>
        </div>
    </>
  )
}

export default Navbar