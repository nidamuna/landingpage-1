import React from 'react'

const Pelatihansection = () => {
  return (
    <>
      <section className='w-full bg-white min-h-screen py-[100px] px-10'>
        <div className='flex flex-col container mx-auto items-center text-[#120036]'>
          <h1 className='font-black text-[2rem] text-center w-full'>
            Dapatkan pelatihan terbaik yang sesuai dengan kebutuhanmu
          </h1>
          <p className='text-center w-full'>
            Pelatihan sunat yang dilengkapi instruktur berpengalaman dan fasilitas lengkap
          </p>
          <div className='w-full flex justify-center items-center p-5'>
            <div className='w-[50%] bg-red-200 p-3'>
              Gambar/video pelatihan
            </div>
            <div className='w-[50%] ml-11 p-4'>
              <div className='w-[70%] ml-11 bg-blue-100 p-4 rounded-md font-medium'>
                <ol className="list-decimal ml-6">
                  <li className='mb-3 last:mb-0'>Anestesi lokal</li>
                  <li className='mb-3 last:mb-0'>Teknik sunat</li>
                  <li className='mb-3 last:mb-0'>Pencegahan komplikasi</li>
                  <li className='mb-3 last:mb-0'>Perawatan pasca sunat</li>
                  <li className='mb-3 last:mb-0'>Etika dan hukum</li>
                  <li className='mb-3 last:mb-0'>Kesehatan seksual</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pelatihansection