// import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CommentSlider from './components/CommentSLider'
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <section className='section-container'>
        <div className='w-full h-44 sm:h-96 bg-slate-400 text-white flex justify-center items-center sm:flex-1'>
          image
        </div>
        <div className='mt-4 sm:flex-1 sm:flex sm:flex-col sm:justify-center'>
          <h2 className='section-title-1'>
            Two line long header example
          </h2>
          <div className='section-content'>
            Poster can be one of the effective marketing and advertising materials. It is also a great tool to use when you want to present your.
          </div>
          <button className='button bg-primary text-white mt-4'>
            Button
          </button>
        </div>
      </section>
      <section className='container mx-auto p-3'>
        <div className='text-size-7 text-tertiary'>
          Partners
        </div>
        <div className='flex flex-wrap gap-2 sm:gap-6 md:gap-12 mb-4 mt-4'>
          <img src="/images/Logitech.png" alt="" />
          <img src="/images/Logitech.png" alt="" />
          <img src="/images/Logitech.png" alt="" />
          <img src="/images/Logitech.png" alt="" />
          <img src="/images/Logitech.png" alt="" />
        </div>
      </section>
      <section className='section-container p-0 sm:p-3'>
        <div className='h-64 bg-slate-400 text-white flex justify-center items-center sm:h-96 sm:flex-1 sm:order-2 md:h-[34rem] lg:-mr-64'>
        {/* lg:-mr-64 */}
          image
        </div>
        <div className='p-3 sm:p-0 sm:flex-1 flex flex-col justify-center order-1 md:w-1/2 md:flex-none'>
          <h3 className='text-size-6 font-bold'>
            CAPS HEADING
          </h3>
          <h2 className='section-title-1'>
            Two line long header example  
          </h2>
          <p className='section-content'>
            You will likely be required to install the fixed mounts. 
            These are what will keep the apparatus stable and secure with your computer monitor in it. 
            Follow directions carefully so that you can be sure to get everything.
          </p>
          <a href="#" className='text-size-5 text-blue font-bold block mt-4'>
            Learn More
          </a>
        </div>
      </section>
      <section className='section-container border-t-2 border-slate-300 md:border-t-0 md:h-80 md:pt-32'>
        <div className='md:flex-1'>
          <h2 className='section-title-1'>
            Heading
          </h2>
          <p className='section-content text-size-7 mt-1'>
            In the history of modern astronomy, 
            there is probably no one greater leap forward than the building and launch.
          </p>
        </div>
        <div className='flex flex-wrap gap-4 mt-3 md:mt-0 md:flex-1 md:flex-col md:items-end'>
          <input type="text"  className='border-2 border-slate-300 rounded-md p-2 md:w-full' placeholder='email'/>
          <button className='button bg-primary text-white'>
            Subscribe
          </button>
        </div>
      </section>
      <section className='section-container border-t-2 border-slate-300'>
        <div className='flex flex-col flex-1'>
          <div>
            <h2 className='section-title-1'>
              Heading
            </h2>
            <p className='section-content'>
              With so many different ways today to find information online, it can sometimes be hard to know where to go to first.
            </p>
          </div>
          <div className='mt-3 flex flex-col gap-2 '>
            <div className='flex flex-wrap gap-2'>
              <img src="/images/Appstore.png" alt="appStore" />
              <img src="/images/Appstore.png" alt="appStore" />
            </div>
            <p className='section-content text-size-6 text-secondary'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, aspernatur.
            </p>
          </div>
        </div>
        <div className='flex-1 flex flex-col justify-end items-center h-64 overflow-y-hidden sm:h-auto'>
          <img src="/images/Devices.png" alt="device" className='-mb-12 md:mb-0'/>
        </div>
      </section>
      <CommentSlider></CommentSlider>
      <section className='container p-3 mx-auto mt-12 py-12 md:flex md:justify-between border-t-2 border-slate-300'>
        <h2 className='section-title-1 sm:w-2/3 lg:w-1/2' >
          Four line header example with text description
        </h2>
        <div className='mt-4'>
          <button className='button bg-primary text-white'>
            Button
          </button>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default App
