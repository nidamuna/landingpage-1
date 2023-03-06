import React from 'react'

const Herosection = () => {
  return (
    <>
      <section className='w-full bg-blue-200 min-h-screen py-[100px] px-10'>
        <div className='flex flex-row container mx-auto'>
          {/* Left */}
          <div className='w-[50%] text-[#212529]'>
            <h1 className='font-black text-[2.875rem]'>
              Pelatihan dan Training Kesehatan
            </h1>
            <div className='bg-[#edf0ff] py-3 px-5 mt-6 rounded-md text-[19px] font-extralight'>
              <p>
                Bergabunglah dengan ribuan peserta yang telah memperluas pengetahuan 
                mereka di 
                <span className='bg-blue-200 pl-1 pr-2 rounded-md font-semibold ml-1'>
                  bidang kesehatan
                </span>
              </p>
              <button className='bg-[#6136ff] rounded-full text-white font-semibold p-2 shadow-md mt-5 w-full'>
                Daftar Sekarang
              </button>
              <div className='mt-5 flex flex-row px-6 items-center justify-center text-[12px]'>
                <p className='mr-10'>✔ Full access to all course</p>
                <p>✔ Good Instructor</p>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className='w-[50%] text-[#212529] ml-11 bg-red-100'>
            foto atau video pelatihan atau foto instruktur
          </div>
        </div>
      </section>
    </>
  )
}

export default Herosection