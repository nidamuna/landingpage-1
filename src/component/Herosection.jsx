import React from 'react'
import doctor from '../assets/doctor.png'

const Herosection = () => {
  return (
    <>
      <section id='hero' className='w-full bg-[#8ECAE6] min-h-screen text-[#023047] pt-[160px] px-10 pb-[100px]'>
        <div className='flex flex-col-reverse md:flex-row container mx-auto'>
          {/* Left */}
          <div className='w-full md:w-[50%]'>
            <h1 className='font-black text-[2.875rem]'>
              Pelatihan Sunat Modern
            </h1>
            <div className='bg-[#fcfdff] py-3 px-5 mt-6 rounded-md text-[19px] font-extralight'>
              <p>
                Bergabunglah dengan ribuan peserta yang telah memperluas pengetahuan 
                mereka di 
                <br/>
                <strongs className='stabs font-semibold'>
                  bidang sunat modern
                </strongs>
              </p>
              <a href='#daftar'>
                <button className='bg-[#FB8500] hover:bg-[#FFB703] rounded-full text-white font-semibold p-2 shadow-md mt-5 w-full'>
                  Daftar Sekarang
                </button>
              </a>
              <div className='mt-5 flex flex-row px-6 items-center justify-center text-[12px]'>
                <p className='mr-10'>✔ Akses Materi selamanya</p>
                <p>✔ Instruktur terbaik</p>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className='w-full md:h-[400px] overflow-hidden md:w-[50%] ml-0 md:ml-11 bg-red-100 mb-10 md:mb-0'>
            <div className='p-10 rounded-full'>
              <img src={doctor} alt="doctor" className='h-[500px]' />
            </div>
          </div>
        </div>
        <div className='text-center mt-20 text-[16px] font-light leading-5 flex flex-col justify-center items-center'>
          <p className='w-full md:w-[70%] max-w-[1000px]'>
            Pelatihan sunat adalah program pelatihan yang dirancang untuk memberikan 
            pengetahuan, keterampilan, dan pemahaman tentang teknik sunat yang benar dan aman. 
            <span className='stabs'>Tujuan utama dari pelatihan sunat adalah untuk meningkatkan kualitas 
            dan keselamatan prosedur sunat</span> serta memastikan bahwa praktisi kesehatan 
            memiliki pengetahuan dan keterampilan yang cukup dalam melakukan prosedur 
            tersebut. Selain itu, pelatihan sunat juga dapat membantu mengurangi 
            risiko komplikasi dan memberikan manfaat kesehatan yang lebih baik bagi 
            pasien yang menjalani prosedur sunat.
          </p>
        </div>
      </section>
    </>
  )
}

export default Herosection