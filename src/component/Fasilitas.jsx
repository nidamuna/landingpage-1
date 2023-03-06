import React from 'react'

const Fasilitas = () => {
  return (
    <>
      <section className='w-full bg-white min-h-screen py-[100px] px-10'>
        <div className='flex flex-row items-center justify-start text-[#120036]'>
          <div className='w-[50%]'>
            <h1 className='font-black text-[2rem] w-full mb-5'>
              Fasilitas yang kami berikan
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
              ✔ Sertifikat
            </p>
          </div>
          <div className='w-[50%] bg-red-200 ml-11 p-5'>
              ilustrasi/foto/video
          </div>
        </div>
      </section>
    </>
  )
}

export default Fasilitas