'use client'

import { TypewriterEffectSmooth } from "@/components/typewriter";
import { Typewriter } from 'react-simple-typewriter'






export default function Home() {

	const handleType = (count: number) => {
		// access word count number
		console.log(count)}
	  
	
	  const handleDone = () => {
		console.log(`Done after 5 loops!`)
	  }

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

	return (
		<div>
<section>
		<div className="h-[25rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
			{/* Radial gradient for the container to give a faded look */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>


			<div className="text-center">
				<h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal', textAlign: 'center' }}>
					Custom Solutions in{' '}
					<br></br>
					<span className="text-primary w-full" style={{ fontWeight: 'bold' }}>
						{/* Style will be inherited from the parent element */}
						<Typewriter
							words={['Web Design', 'Application Development', 'Digital Marketing', 'Branding']}
							loop={10}
							cursor
							cursorStyle='_'
							typeSpeed={100}
							deleteSpeed={50}
							delaySpeed={1000}
							onLoopDone={handleDone}
							onType={handleType}
						/>
					</span>
				</h1>

			

			</div>


		</div>

		</section>

		
		<section className="bg-white dark:bg-gray-900">
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
	
		</div>
	);
}

