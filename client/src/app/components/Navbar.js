"use client"

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(true)






  const toggleNavbar = () => {
    setOpen(!open)
  }

  const handleDownload = async () => {
    try {
      const response = await axios({
        url: 'https://server.ishrakhasin.com/download',
        method: 'GET',
        responseType: 'blob', // Important to handle the file download
      });

      // Create a link element and trigger a download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Hasin Ishrak CV.pdf'); 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed', error);
    }
  };


  return (
    <div className=' mx-auto  bg-[#111A28] justify-between items-center  text-white font-semibold sticky top-0 z-0'>
      <div className='justify-end flex md:mx-[120px] mx-10  gap-4 py-2 '>
        <a href="https://www.facebook.com/Hasin.Ishrak.Hisham/" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
        <a href="https://www.instagram.com/hasin.ishrak.hisham/" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
        <a href="https://wa.link/fhiq5c" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
        <a href="https://www.linkedin.com/in/hasin-ishrak01/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
        <a href="https://github.com/Ishrak01?tab=repositories" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
      </div>
      <div className='flex md:mx-[120px] mx-10 justify-between  text-xl'>
        <div className=' text-xl  justify-between '>
          <Link className='hover:text-green-500' href='/'>HOME</Link>
        </div>





        <div className='space-x-5 flex items-center'>
          <div className='sm:hidden flex justify-between '>

            <button onClick={toggleNavbar}><MenuIcon /></button>
            {!open && (
              <div className='flex absolute space-y-4 border rounded-sm p-2 my-10 right-4 flex-col bg-[#111A28] font-semibold text-xs text-white justify-center items-start'>
                <Link href='/Skill'>Skill</Link>
                <Link href='/Projects'>Projects</Link>
                <Link href='/Service'>Services</Link>
                <Link href='/Contact'>Contact</Link>
                <button className='p-1 border text-red-500 rounded-sm ' onClick={handleDownload}>RESUME</button>


              </div>
            )}
          </div>


          <div className='hidden sm:block   font-bold space-x-4  duration-200'>
            <Link className='hover:text-green-500' href='/Skill'>Skills</Link>
            <Link className='hover:text-green-500' href='/Projects'>Projects</Link>
            <Link className='hover:text-green-500' href='/Service'>Services</Link>
            <Link className='hover:text-green-500' href='/Contact'>Contact</Link>

            <button className='p-1 border text-red-500 rounded-sm ' onClick={handleDownload}>RESUME</button>


          </div>
        </div>
      </div>
    </div>

  )
}
