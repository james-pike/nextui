'use client'

import { ImagesSlider } from "@/components/heroslider";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];


export default function AboutPage() {

  const handleType = (count: number) => {
		// access word count number
		console.log(count)}
	  
	
	  const handleDone = () => {
		console.log(`Done after 5 loops!`)
	  }

	return (

    

       <main className="h-[60rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
			{/* Radial gradient for the container to give a faded look */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">

				
			</div>

				<section className="bg-white dark:bg-gray-900 lg:px-10">
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

	  </main>
	);
}
