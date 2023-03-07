import React from 'react'
import Obat from '../assets/obat.png'

const Pelatihansection = () => {
  return (
    <>
      <section id="materi" className='w-full bg-white lg:min-h-0 min-h-screen py-[100px] px-10'>
        <div className='flex flex-col container mx-auto items-center text-[#023047]'>
          <h1 className='font-black text-[2rem] text-center w-full'>
            Dapatkan 
            <span className='stabs ml-1'>
              pelatihan terbaik
            </span> yang sesuai dengan kebutuhanmu
          </h1>
          <p className='text-center w-full'>
            Pelatihan sunat yang dilengkapi instruktur berpengalaman dan fasilitas lengkap
          </p>
          <div className='w-full flex-col md:flex-row flex justify-center items-center p-5'>
            <div className='w-full md:w-[50%] bg-red-200 p-3'>
              Gambar/video pelatihan
            </div>
            <div className='w-full md:w-[50%] ml-0 md:ml-11 p-4'>
              <div className='w-full md:w-[70%] ml-0 md:ml-11 bg-[#FFB703] p-4 rounded-md font-medium'>
                <ol className="list-decimal ml-6 text-white font-semibold">
                  <li className='mb-3 last:mb-0'>Anestesi lokal</li>
                  <li className='mb-3 last:mb-0'>Teknik sunat</li>
                  <li className='mb-3 last:mb-0'>Pencegahan komplikasi</li>
                  <li className='mb-3 last:mb-0'>Perawatan pasca sunat</li>
                  <li className='mb-3 last:mb-0'>Etika dan hukum</li>
                  <li className='mb-3 last:mb-0'>Kesehatan seksual</li>
                </ol>
              </div>
                <div className='flex w-full justify-end ml-[15%] md:ml-0 pr-[0%] md:pr-[16%] -mt-[0%] md:-mt-[15%] animate-bounce'>
                  <img src={Obat} alt='medicine' className='h-[100px]' />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pelatihansection