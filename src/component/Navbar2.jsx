import React, { useEffect, useState } from 'react'

const Navbar2 = () => {
    const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 37) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);
  
  return (
    <>
        <section className={navbar ? 'hidden md:flex w-full bg-white h-auto py-4 px-8 justify-between items-start shadow-lg top-0' : 'hidden'}>
           <div className='flex flex-col'>
                <h1 className='font-bold'>
                    Siap mengikuti Pelatihan Sunat Moderen ?
                </h1>
                <div className='flex flex-row pitems-center justify-center text-[12px]'>
                    <p className='mr-10'>✔ Akses Materi selamanya</p>
                    <p className='mr-10'>✔ Instruktur terbaik</p>
                    <p>✔ Sertifikat Penyelesaian </p>
                </div>
           </div>
           <button className='bg-[#6136ff] hover:bg-[#0a58ca] rounded-full text-white font-semibold p-2 shadow-md'>
                Daftar Sekarang
            </button>
        </section>
    </>
  )
}

export default Navbar2