import React from 'react'

const Contactsection = () => {
  return (
    <>
      <section className='w-full bg-white -mt-[5%] px-10 flex justify-center items-center'>
        <div className='bg-[#120036] w-[80%] h-full px-5 py-12 rounded-xl flex flex-col justify-center items-center text-white'>
          <h1 className='font-normal text-[2.25rem] text-center w-full mb-5'>
            Daftarkan segera dirimu di pelatihan sunat kami
          </h1>
          <button className='bg-[#6136ff] rounded-full text-white text-[1.25rem] font-semibold p-2 shadow-md mt-8 w-[40%] hover:bg-[#0a58ca]'>
            Hubungi Kami
          </button>
          <div className='mt-10 flex flex-row px-6 items-center justify-center text-[12px]'>
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