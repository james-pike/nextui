'use client'

import { TypewriterEffectSmooth } from "@/components/typewriter";
import { Typewriter } from 'react-simple-typewriter'
import ServicesPage from "./services/page";






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
		// <div className="flex justify-center">
	    //   <TypewriterEffectSmooth words={words} />
		  <div className="flex justify-center">


	  <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
	  <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Life is simple{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
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
      </p>
    </div>

	
    </div>



	

			// </div>

			
	);
}
