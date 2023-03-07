import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {ImQuotesLeft} from 'react-icons/im'

const Testimoni = () => {
  return (
    <>
      <section className='w-full bg-[#219EBC] lg:min-h-0 min-h-screen py-[100px] px-10 -skew-y-3'>
      <div className='flex flex-col container mx-auto items-center text-[#023047] skew-y-3'>
          <h1 className='font-black text-[2rem] text-center stabs text-white'>
            Ini yang dikatakan beberapa pengguna
          </h1>
          <span className='flex'>
            <AiFillStar style={{ height: '20px', width: '20px', color: '#feef5c'}}/>
            <AiFillStar style={{ height: '20px', width: '20px', color: '#feef5c'}}/>
            <AiFillStar style={{ height: '20px', width: '20px', color: '#feef5c'}}/>
            <AiFillStar style={{ height: '20px', width: '20px', color: '#feef5c'}}/>
            <AiFillStar style={{ height: '20px', width: '20px', color: '#feef5c'}}/>
          </span>
          <div className='w-full flex-col md:flex-row flex justify-between items-center p-5 mt-10'>
            {/* 1 */}
            <div className='w-full mb-10 md:w-[30%] bg-[#FFB703] p-3 rounded-md skew-y-3 h-[400px]'>
              <ImQuotesLeft style={{ height: '30px', width: '30px'}}/>
              <p className='my-5 -skew-y-3'>
                Sangat puas dengan pelatihan tentang sunat yang saya ikuti di sini. 
                Instruktur sangat berpengalaman dan ahli di bidangnya. 
                Saya belajar banyak tentang teknik sunat yang aman dan 
                efektif serta tata cara perawatan pasca sunat yang benar. 
                Sangat direkomendasikan!
              </p>
              <div className='flex justify-between items-start -skew-y-3'>
                <span className='bg-[#023047] w-8 h-8 justify-center items-center flex text-gray-200 rounded-full p-2'>
                  A
                </span>
                <div className='w-full pl-4'>
                  <h1 className='font-bold'>Ahmad</h1>
                  <span className=''>
                    Perawat 
                  </span>
                </div>
              </div>
            </div>
             {/* 2 */}
             <div className='w-full mb-10 md:w-[30%] bg-[#FFB703] p-3 rounded-md skew-y-3 md:skew-y-3 h-[400px]'>
              <ImQuotesLeft style={{ height: '30px', width: '30px'}}/>
              <p className='my-5 -skew-y-3'>
                Pelatihan tentang sunat yang saya ikuti di sini sangat informatif 
                dan membantu. Instruktur sangat ramah dan membantu menjawab semua 
                pertanyaan saya tentang prosedur sunat. Saya merasa lebih percaya 
                diri dan siap untuk melaksanakan prosedur sunat setelah mengikuti 
                pelatihan ini. Terima kasih banyak!
              </p>
              <div className='flex justify-between items-start -skew-y-3'>
                <span className='bg-[#023047] w-8 h-8 justify-center items-center flex text-gray-200 rounded-full p-2'>
                  D
                </span>
                <div className='w-full pl-4'>
                  <h1 className='font-bold'>Dwi</h1>
                  <span className=''>
                    Pemilik Klinik Hati 
                  </span>
                </div>
              </div>
            </div>
             {/* 3 */}
             <div className='w-full mb-10 md:w-[30%] bg-[#FFB703] p-3 rounded-md skew-y-3 h-[400px]'>
              <ImQuotesLeft style={{ height: '30px', width: '30px'}}/>
              <p className='my-5 -skew-y-3'>
                Pelatihan tentang sunat yang saya ikuti di sini sangat profesional dan 
                lengkap. Instruktur sangat berpengalaman dan memberikan penjelasan yang 
                jelas dan mudah dipahami. Saya sangat merekomendasikan pelatihan ini 
                kepada siapa saja yang ingin belajar tentang sunat.
              </p>
              <div className='flex justify-between items-start -skew-y-3'>
                <span className='bg-[#023047] w-8 h-8 justify-center items-center flex text-gray-200 rounded-full p-2'>
                  B
                </span>
                <div className='w-full pl-4'>
                  <h1 className='font-bold'>Budi</h1>
                  <span className='flex flex-row items-center'>
                    Perawat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimoni