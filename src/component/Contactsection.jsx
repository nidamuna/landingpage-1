import React from 'react'

const Contactsection = () => {
  return (
    <>
      <section id="daftar" className='w-full bg-white px-10 flex flex-col justify-center items-center'>
        <div className='bg-[#8ECAE6] w-full max-w-[1000px] h-full px-5 py-12 rounded-xl flex flex-col justify-center items-center text-[#023047]'>
          <h1 className='font-normal text-[25px] md:text-[2.25rem] text-center w-full mb-5'>
            Daftarkan segera dirimu di pelatihan sunat kami
          </h1>
          <button className='bg-[#FB8500] rounded-full text-white text-[1.25rem] font-semibold p-2 shadow-md mt-8 w-full md:w-[40%] hover:bg-[#FFB703]'>
            Hubungi Kami
          </button>
          <div className='mt-10 flex flex-col md:flex-row px-6 items-start md:items-center justify-center text-[12px]'>
            <p className='mr-10'>✔ Akses Materi selamanya</p>
            <p className='mr-10'>✔ Instruktur terbaik</p>
            <p>✔ Sertifikat Penyelesaian </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contactsection