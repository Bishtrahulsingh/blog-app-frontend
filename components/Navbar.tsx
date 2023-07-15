import Image from "next/image";
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3">
        <Link href={'/'}>
            <div className='cursor-pointer'>
                <Image width={40} height={40} alt="logo" src={'/techlogo/png/logo-color.png'}/>
            </div>
        </Link>
        <ul className="items-center hidden md:flex ">
          <li className="mr-6 font-medium text-white hover:text-gray-400">
            <a href="#">Products</a>
          </li>
          <li className="mr-6 font-medium text-white  hover:text-gray-400">
            <a href="#">pricing</a>
          </li>
          <li className="mr-6 font-medium text-white  hover:text-gray-400">
            <a href="#">docs</a>
          </li>
          <li className="mr-6 font-medium text-white  hover:text-gray-400">
            <a href="#">company</a>
          </li>
        </ul>
        <ul className="flex items-center">
          <li className="font-medium text-white">
            <a href="/subscribe" className="bg-primary py-2 px-4 rounded-sm  text-white hover:bg-primaryDark transition-all">
              Subscribe
            </a>
          </li>
        </ul>
    </div>    
  )
} 

export default Navbar