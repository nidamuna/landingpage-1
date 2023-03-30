import React from 'react'
import Sertif from '../assets/sertif.png'
import Medical from '../assets/medical.png'

const Fasilitas = () => {
  return (
    <>
      <section id='fasilitas' className='w-full bg-white h-auto lg:min-h-0 md:min-h-screen py-[100px] px-10'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-start text-[#023047]'>
          <div className='w-full mb-10 md:w-[50%]'>
            <h1 className='font-black text-[2rem] w-full mb-5'>
              <span className='stabs'>
                Fasilitas
              </span> yang kami berikan
            </h1>
            <p className='font-normal italic'>
              Tidak hanya instruktur yang memadai tapi kami juga memberikan
              banyak fasilitas lainnya
            </p>
            <p className='mt-5 font-semibold'>
              ✔ Ruang praktik
            </p>
            <p className='mt-2 font-semibold'>
              ✔ Alat pelindung diri
            </p>
            <p className='mt-2 font-semibold'>
              ✔ Peralatan sterilisasi
            </p>
            <p className='mt-2 font-semibold'>
              ✔ Akses Materi selamanya
            </p>
            <p className='mt-2 font-semibold'>
              ✔ Sertifikat Penyelesaian
            </p>
          </div>
          <div className='flex w-full md:w-[50%] h-[300px] ml-0 md:ml-11'>
              <img src={Sertif} alt='sertifikat' className='z-30 w-[100px] h-[100px] mt-[200px] ml-[100px] animate-bounce' />
              <img src={Medical} alt='sertifikat' className='w-[500px] -ml-[200px] -mt-[100px]' />

          </div>
        </div>
      </section>
    </>
  )
}

export default Fasilitas