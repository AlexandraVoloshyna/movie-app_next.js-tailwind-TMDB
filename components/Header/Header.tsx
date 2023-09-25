"use client"
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
import { usePathname } from 'next/navigation'

import {
  BsBell,
  BsChevronDown,
  BsSearch,
} from "react-icons/bs";


const TOP_OFFSET = 66;

function Header() {
  const pathname = usePathname()
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
    <header>
      <nav className="w-full fixed z-40">
      <div className={`flex px-6 md:px-16 py-6 flex-row items-center w-full transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' :'gradient'}`}>
        <Image 
        width={128}
        height={35}
        src="/logo.png"
         alt="Logo" />
        <ul className="flex-row ml-8 gap-7 hidden lg:flex">
          <li>
            <Link
               className={`link ${pathname === '/' ? 'text-white cursor-default underline' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}`}
               href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === '/tvShows' ? 'text-white cursor-default underline' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}`}
              href="/tvShows"
            >
            Tv Shows
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === '/movies' ? 'text-white cursor-default underline' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}`}
              href="/movies"
            >
            Movies
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === '/new' ? 'text-white cursor-default underline' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}`}
              href="/new"
            >
            New & Popular
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === '/list' ? 'text-white cursor-default underline' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}`}
              href="/list"
            >
            My List
            </Link>
          </li>
        </ul>
        <div  onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-gray-200 hover:text-gray-300 cursor-pointer transition">Browse</p>
          <BsChevronDown className={`w-4 text-white fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch className="w-6" />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell className="w-6" />
          </div>
          <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="overflow-hidden">
              <Image 
              src="/profile.png" 
              alt="peofile" 
              width={24}
              height={24} 
              className="lg:w-10  lg:h-10 rounded-md"
              />
            </div>
            <BsChevronDown className={`w-4 text-white fill-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
}

export default Header;