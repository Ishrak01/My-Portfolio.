"use client"

import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import myLogo from '../components/myLogo.svg';

export default function Navbar() {
  const [open, setOpen] = useState(true)

  const toggleNavbar = () => {
    setOpen(!open)
  }
  

  

  return (
    <div className=' mx-auto bg-[#111827] text-white font-semibold sticky top-0 '>
      <div>
        <div className='flex justify-between p-4 text-xl sticky mx-auto lg:mx-[100px]'>
          <Link href='/'><Image src={myLogo} className='h-20 w-150 text-white font-bold text-2xl' /></Link>
          
          <div className='space-x-5 flex items-center'>
            <div className='sm:hidden flex justify-between px-[60px]'>
            
              <button onClick={toggleNavbar}><MenuIcon /></button>
              {!open && (
                <div className='flex flex-col bg-[#D1D4FF]  font-semibold text-xs text-black justify-center p-1 absolute py-5 space-y-2 my-10 pr-5'>
                  <Link href='/'>Skill</Link>
                  <Link href='/Projects'>Projects</Link>
                  <Link href='/Service'>Services</Link>
                  <Link href='/Contact'>Contact</Link>
                  <a className='p-1 border rounded-sm ' href='https://drive.google.com/file/d/1HQVCf4FUy8xSIqbmrbtaE5XNISDn4RP3/view?usp=sharing'target="_blank" rel="noopener noreferrer">RESUME</a>
                </div>
              )}
            </div>


            <div className='hidden sm:block px-8 font-bold space-x-4 duration-200'>
              <Link href='/Skill'>Skills</Link>
              <Link href='/Projects'>Projects</Link>
              <Link href='/Service'>Services</Link>
              <Link href='/Contact'>Contact</Link>
              <a className='p-1 border rounded-sm hover:text-emerald-400' href='https://drive.google.com/file/d/1HQVCf4FUy8xSIqbmrbtaE5XNISDn4RP3/view?usp=sharing'target="_blank" rel="noopener noreferrer">RESUME</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
