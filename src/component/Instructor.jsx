import React from 'react'
import doctor from '../assets/doctor.png'

const Instructor = () => {
  return (
    <>
    <section className='w-full bg-[#023047] lg:min-h-0 min-h-screen py-[100px] px-10 -skew-y-3'>
      <div className='flex flex-row container mx-auto items-center text-[#FFF] skew-y-3'>
        <div className='text-justify w-[50%]'>
          <h1 className='font-black text-[1.5rem] w-full mb-5'>
            Bertemulah dengan instruktur kami<br/>
            <span className='stabs'>
              Budi Santoso
            </span>
          </h1>
          <p className='mt-5'>
            Selama pelatihan, instruktur seperti Budi Santoso dapat memberikan 
            penjelasan mendetail mengenai teknik sunat modern yang meliputi 
            penggunaan anestesi lokal, metode khitan non-eksisi, penggunaan 
            teknologi modern dalam proses sunat, serta penanganan pasca-sunat 
            yang tepat.
            <br/>
            Selain itu, instruktur dapat memberikan pemahaman tentang etika dan tata 
            cara melaksanakan prosedur sunat yang aman dan mengikuti standar medis 
            yang berlaku. Instruktur juga dapat memberikan contoh kasus dan pengetahuan
            terbaru dalam bidang sunat modern yang dapat diterapkan oleh peserta 
            pelatihan.
          </p>
        </div>
        <div className='bg-[#FB8500] w-[50%] ml-11 h-[400px] rounded-t-full'>
          <img src={doctor} alt='doctor' />
        </div>
      </div>
    </section>


    </>
  )
}

export default Instructor