import React from 'react'
import {AiOutlineMail, AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'

const Footer = () => {

  const links = [
    {
      name: 'email',
      icon: AiOutlineMail,
      link: '',
    },
    {
      name: 'fb',
      icon: AiOutlineFacebook,
      link: '',
    },
    {
      name: 'ig',
      icon: AiOutlineInstagram,
      link: '',
    },
    {
      name: 'wa',
      icon: AiOutlineWhatsApp,
      link: '',
    },
  ];

  return (
    <>
      <footer id='footer' className='w-full bg-[#023047] h-auto pt-[200px] -mt-[100px] px-8 flex flex-col justify-between items-center'>
        <div className='container mx-auto flex flex-col md:flex-row justify-start items-start gap-10 text-white mb-5 cursor-pointer'>
          <div className='w-full md:w-[40%]'>
            <span className='bg-blue-500 p-2 text-white'>
               Logo Pelatihan
            </span>
            <p className='mt-6 text-[14px] font-normal'>
              Pelatihan sunat adalah program pelatihan yang bertujuan untuk 
              memberikan pengetahuan dan keterampilan tentang teknik sunat 
              yang aman, efektif, dan sesuai dengan standar medis yang berlaku. 
              Pelatihan ini dapat diikuti oleh dokter, perawat, atau tenaga 
              medis lainnya yang ingin memperdalam atau meningkatkan kemampuan 
              mereka dalam melakukan sunat. 
            </p>
          </div>
          <div className='w-full flex flex-col md:flex-row gap-5 text-white'>
            <div>
              <h1 className='font-bold text-[19px] text-[#FB8500]'>
                Pelatihan
              </h1>
              <ul className='mt-5'>
                <li className='mt-1 hover:underline'>Pelatihan Sunat Modern</li>
                <li className='mt-1 hover:underline'>Pelatihan Mendirikan Klinik</li>
                <li className='mt-1 hover:underline'>Pelatihan Mom and Baby Spa</li>
                <li className='mt-1 hover:underline'>Pelatihan Skincare</li>
              </ul>
            </div>
            <div className='ml-0 mt-5 md:mt-0 md:ml-20'>
              <h1 className='font-bold text-[19px] text-[#FB8500]'>
                Hubungi Kami
              </h1>
              <div className='mt-5'>
                <p>Alamat lengkap</p>
                <p>nomor telp</p>
              </div>
              <div className='mt-5'>
                <div className="grid grid-cols-4 lg:grid-cols-8 gap-y-6 items-center mt-[43px] lg:mt-0">
                    {links.map((link) => (
                      <a
                        className="mr-[32px] last:mr-0"
                        key={link.name}
                        href={link.link}
                      >
                        <link.icon
                          style={{ height: '20px', width: '20px', color: '#FB8500'}}
                        />
                      </a>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto pt-[16px] border-t border-[#FB8500] w-full mb-5">
          <p className="text-[14px] leading-[17px] text-white">
              &copy; Copyright 2022
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer