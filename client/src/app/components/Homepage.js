"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import TypewriterComponent from 'typewriter-effect';
import hsm from './hsm.jpg';

import hsm3 from './hsm3.jpg';

import hsm5 from './hsm5.jpg';
import hsm6 from './hsm6.jpg';

const photos = [hsm, hsm3, hsm5, hsm6]





export default function Homepage() {

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 2000); // Change photo every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);




  return (
    <div className='flex md:mx-[120px]  mx-10 justify-between items-start md:items-center md:h-screen h-auto'>
      <div >
        <div className="block sm:hidden"><br /></div>
        <div>

          <h2 className="text-sm text-white font-bold md:text-3xl">
            Hello,
          </h2>
          <h2 className="text-2xl text-white font-bold md:text-4xl">
            <TypewriterComponent
              options={{
                strings: ["I'm Hasin Ishrak"],
                autoStart: true,
                delay: 150,
                loop: true,
              }}
            />


          </h2>
          <br />
          <h2 className="text-2xl font-bold text-red-500 md:text-medium">
            Full Stack Developer  ||  Programmer  ||  Software Engineer
          </h2>
          <p className="hidden sm:block mt-6   max-w-[600px] text-white text-pretty font-medium">
            Skilled and motivated web developer with experience in designing and developing visually appealing, user-friendly websites.
            Seeking a challenging position in a dynamic organization where I can utilize my technical expertise and creativity to deliver exceptional web solutions.
          </p>
          <br />
          <div>

            {/* //small device */}
            <div className="flex justify-center items-center block sm:hidden">
              <Image src={photos[currentPhotoIndex]} alt={`Photo ${currentPhotoIndex + 1}`} className="rounded-full border h-60 w-60 object-cover" />
            </div>

                   {/* //small device */}
            <div className="block sm:hidden"><br /></div>



          </div>
        </div>
        <div className='space-x-3 flex text-green-500 text-xl font-bold'>
          <button> <a href='https://github.com/Ishrak01?tab=repositories' className='inline-block px-2 py-1 border rounded-sm hover:bg-white' target="_blank" rel="noopener noreferrer">GitHub</a></button>
          <button><Link href='/Projects'><button className='inline-block px-2 py-1 border rounded-sm hover:bg-white'>Projects</button></Link></button>
           
          <button><Link href='/Contact'><button className='inline-block px-2 py-1 border 
          rounded-sm hover:bg-white  '>HIRE ME</button></Link></button>
        </div>
      </div>



      <div>
        <Image src={photos[currentPhotoIndex]} alt={`Photo ${currentPhotoIndex + 1}`} className="rounded-full border hidden sm:block   h-60 w-60 object-cover" />

      </div>




    </div>

  );
};
