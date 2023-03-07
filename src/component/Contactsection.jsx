import React from 'react'

const Contactsection = () => {
  return (
    <>
      <section id="daftar" className='w-full bg-white px-10 flex flex-col justify-center items-center'>
        <div className='bg-[#023047] w-full md:w-[80%] h-full px-5 py-12 rounded-xl flex flex-col justify-center items-center text-white'>
          <h1 className='font-normal text-[25px] md:text-[2.25rem] text-center w-full mb-5'>
            Daftarkan segera dirimu di pelatihan sunat kami
          </h1>
          <button className='bg-[#6136ff] rounded-full text-white text-[1.25rem] font-semibold p-2 shadow-md mt-8 w-full md:w-[40%] hover:bg-[#0a58ca]'>
            Hubungi Kami
          </button>
          <div className='mt-10 flex flex-col md:flex-row px-6 items-start md:items-center justify-center text-[12px]'>
            <p className='mr-10'>✔ Akses Materi selamanya</p>
            <p className='mr-10'>✔ Instruktur terbaik</p>
            <p>✔ Sertifikat Penyelesaian </p>
          </div>
        </div>
        <div className='bg-white w-[80%] p-5 flex justify-center items-center'>
          logo kerjasama
        </div>
      </section>
    </>
  )
}

export default Contactsection