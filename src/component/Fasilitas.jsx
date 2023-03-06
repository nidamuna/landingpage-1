import React from 'react'

const Fasilitas = () => {
  return (
    <>
      <section className='w-full bg-white h-auto md:min-h-screen py-[100px] px-10'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-start text-[#120036]'>
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
          <div className='w-full md:w-[50%] bg-red-200 ml-0 md:ml-11 p-5'>
              ilustrasi/foto/video
          </div>
        </div>
      </section>
    </>
  )
}

export default Fasilitas