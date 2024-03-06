"use client"
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';
import Link from 'next/link';
import TypewriterComponent from 'typewriter-effect';
import hsm from '../components/hsm.jpg';


export default function Homepage() {


 
 
  return (
    <>
    <div className="flex  h-screen sm:h-[500px] bg-[#111827] items-center">
               {/* Left Sidebar */}
        <div className="bg-[#D1D4FF] p-4 h-[300px] flex flex-col justify-center">
        <div className="flex flex-col items-center space-y-4 ">
        <a href="https://www.facebook.com/Hasin.Ishrak.Hisham/"target="_blank" rel="noopener noreferrer"><FacebookIcon/></a>
        <a href="https://www.instagram.com/hasin.ishrak.hisham/"target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
        <a href="https://wa.link/fhiq5c"target="_blank" rel="noopener noreferrer"><WhatsAppIcon/></a>
        <a href="https://www.linkedin.com/in/hasin-ishrak-hisham-b9a67b20b/"target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
        <a href="https://github.com/Ishrak01?tab=repositories"target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
 
    
      </div>
  
      </div>

        {/* Main Content */}
        <div className="flex-1 p-4 flex items-center justify-center">
          <div className="container mx-auto px-6 text-white md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:w-6/12 text-left">
                <h2 className="text-sm text-white font-bold md:text-3xl">
                  Hello, 
                </h2>
                <h2 className="text-2xl text-white font-bold md:text-4xl">
                <TypewriterComponent 
  options={{
    strings: ["I'm Hasin Ishrak"],
    autoStart: true,
    delay:100,
    loop: true,
  }}
/>
                
                  
                </h2>
                <br/>
                <h2 className="text-2xl font-bold text-red-300   md:text-medium">
                  Full Stack Developer  &&  Programmer  &&  Software Engineer
                </h2>
                <p className="mt-6 text-white text-pretty font-medium">
                  Skilled and motivated web developer with experience in designing and developing visually appealing, user-friendly websites.
                  Seeking a challenging position in a dynamic organization where I can utilize my technical expertise and creativity to deliver exceptional web solutions.
                </p>
                <br/>
                <div className='text-left space-x-4 space-y-4 text-lg font-bold '>
                  <a href='https://github.com/Ishrak01?tab=repositories' className='p-2 border rounded-sm hover:bg-violet-700'target="_blank" rel="noopener noreferrer">GitHub</a>
                  <Link href='/Projects'><button className='p-1 border rounded-sm hover:bg-violet-700'>Projects</button></Link>
                </div>
              </div>
              <div className="md:w-6/12 text-center items-center">
                {/* Add your image here */}
                <Image src={hsm} alt="my Photo" className="rounded-full   hover:w-48 h-48 w-48 object-cover mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
