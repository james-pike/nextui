'use client'

import { LampDemo } from "@/components/lamp";
import { TracingBeam } from "@/components/tracing-beam";
import { TypewriterEffectSmooth } from "@/components/typewriter";
import { ImagesSlider } from "@/components/heroslider";
import { motion } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

export default function ServicesPage() {
	return (

       
<div>
<ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
{/* <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div> */}
    
    
<TracingBeam className="max-w-full">
<section className="bg-white dark:bg-gray-900 lg:-mt-10">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="text-center text-gray-900">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl dark:text-white">Turn collaboration into innovation</h2>
          <a href="#" className="inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
              Learn more about inner source 
              <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
      </div>
      <div className="grid gap-6 mt-12 lg:mt-14 lg:gap-12 md:grid-cols-3">
          <div className="flex mb-2 md:flex-col md:mb-0">
              <img className="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-1.png" alt="office image" />
              <div>
                  <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">Build as one team</h3>
                  <p className="text-gray-500 dark:text-gray-400">Work seamlessly across your organization on a platform designed for collaboration.</p>
              </div>
          </div>
          <div className="flex mb-2 md:flex-col md:mb-0">
              <img className="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-2.png" alt="office image 2" />
              <div>
                  <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">Transform your culture</h3>
                  <p className="text-gray-500 dark:text-gray-400">Embrace innersource, iterate faster, and ship more frequently using best tools from open source teams.</p>
              </div>
          </div>
          <div className="flex md:flex-col">
              <img className="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-3.png" alt="office image 3" />
              <div>
                  <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">Learn as you build</h3>
                  <p className="text-gray-500 dark:text-gray-400">Get insight into how your team builds today with community-backed KPIs.</p>
              </div>
          </div>
      </div>
  </div>
</section>

<section className="bg-white dark:bg-gray-900">
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16"/>
        <div className="grid items-center gap-8 mb-8 lg:mb-16 lg:gap-12 lg:grid-cols-12">
            <div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
                <a href="#" className="inline-flex items-center justify-between px-1 py-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                    <span className="px-3 py-1 mr-3 text-xs text-white rounded-full bg-primary-600">New</span> <span className="text-sm font-medium">Flowbite is out! See whats new</span> 
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">We invest in the world’s potential</h1>
                <p className="max-w-xl mx-auto mb-6 font-light text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where innovation can unlock long-term value and drive economic growth.</p>
                <form className="max-w-lg mx-auto lg:ml-0" action="#">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <input type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search Mockups, Logos..."/>
                        <button type="submit" className="text-white inline-flex items-center absolute right-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            <svg className="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            Search
                        </button>
                    </div>
                </form>                        
            </div>
            <div className="col-span-6">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup.png" className="dark:hidden" alt="mockup"/>
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup-dark.png" className="hidden dark:block" alt="mockup dark"/>
            </div>
        </div>
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
            <div className="flex justify-center">
                <svg className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path></svg>
                <div>
                    <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Customizable Categories</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Host code that you dont want to share with the world in private.</p>
                </div>
            </div>
            <div className="flex justify-center">
                <svg className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                <div>
                    <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Private repos</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Host code that you dont want to share with the world in private.</p>
                </div>
            </div>
            <div className="flex justify-center">
                <svg className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clip-rule="evenodd"></path></svg>
                <div>
                    <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Tracking Saving Rate</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Host code that you dont want to share with the world in private.</p>
                </div>
            </div>
        </div>
      </section>

      
 
      </TracingBeam>

      <section className="bg-white dark:bg-gray-900">
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16"/>
        <div className="grid items-center gap-8 mb-8 lg:mb-16 lg:gap-12 lg:grid-cols-12">
            <div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
                <a href="#" className="inline-flex items-center justify-between px-1 py-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                    <span className="px-3 py-1 mr-3 text-xs text-white rounded-full bg-primary-600">New</span> <span className="text-sm font-medium">Flowbite is out! See whats new</span> 
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">We invest in the worlds potential</h1>
                <p className="max-w-xl mx-auto mb-6 font-light text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where innovation can unlock long-term value and drive economic growth.</p>
                <form className="max-w-lg mx-auto lg:ml-0" action="#">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <input type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search Mockups, Logos..."/>
                        <button type="submit" className="text-white inline-flex items-center absolute right-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            <svg className="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            Search
                        </button>
                    </div>
                </form>                        
            </div>
            <div className="col-span-6">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup.png" className="dark:hidden" alt="mockup"/>
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup-dark.png" className="hidden dark:block" alt="mockup dark"/>
            </div>
        </div>
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
            <div className="flex justify-center">
                <svg className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path></svg>
                <div>
                    <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Customizable Categories</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Host code that you dont want to share with the world in private.</p>
                </div>
            </div>
            <div className="flex justify-center">
                <svg className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                <div>
                    <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Private repos</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Host code that you dont want to share with the world in private.</p>
                </div>
            </div>
            <div className="flex justify-center">
                <svg className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clip-rule="evenodd"></path></svg>
                <div>
                    <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Tracking Saving Rate</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Host code that you dont want to share with the world in private.</p>
                </div>
            </div>
        </div>
      </section>
      

      </div>


	);
}
