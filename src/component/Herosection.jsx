import React from 'react'
import doctor from '../assets/doctor2.png'

const Herosection = () => {
  return (
    <>
      <section id='hero' className='w-full bg-[#8ECAE6] lg:min-h-0 min-h-screen text-[#023047] pt-[60px] pl-10 pb-20 md:pb-0 pr-10 md:pr-0'>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
          {/* Left */}
          <div className='w-full md:w-[50%] flex flex-col items-end'>
            <h1 className='font-black text-[2.875rem]'>
              Pelatihan Sunat Modern
            </h1>
            <div className='bg-[#fcfdff] max-w-[550px] p-8 mt-6 rounded-2xl text-[19px] font-extralight'>
              <p>
                Bergabunglah dengan ribuan peserta yang telah memperluas pengetahuan 
                mereka di 
                <strongs className='stabs font-semibold ml-1'>
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
          <div className='w-full md:h-[500px] overflow-hidden md:w-[50%] ml-0 md:ml-11 mb-10 md:mb-0'>
            <div className='w-full flex items-end lg:items-start h-[300px] md:h-[500px]'>
              <img src={doctor} alt="doctor" className='' />
            </div>
          </div>
        </div>
      </section>
      <div className='bg-white text-center pt-20 text-[16px] font-light leading-5 flex flex-col justify-center items-center'>
          <p className='w-full max-w-[1000px]'>
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
    </>
  )
}

export default Herosection