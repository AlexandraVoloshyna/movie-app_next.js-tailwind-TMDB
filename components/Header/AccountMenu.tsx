import React from 'react';
import Image from "next/image";
import Link from 'next/link';


interface Props {
  visible?: boolean;
}

function AccountMenu ({ visible } :Props)  {


  if (!visible) {
    return null;
  }

  return (
    <nav className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <ul className="flex flex-col gap-3">
        <li className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image 
              src="/profile.png" 
              alt="peofile" 
              width={60}
              height={40} 
              className="w-8 rounded-md"
              />
              <Link className="text-white text-sm group-hover/item:underline" href={'#'}>
             Username
             </Link>
        </li>
        <li className="px-3 group/item flex flex-row gap-3 items-center w-full">
              <Link className="text-white text-sm group-hover/item:underline" href={'#'}>
             Manage Profile
             </Link>
        </li>
        <li className="px-3 group/item flex flex-row gap-3 items-center w-full">
              <Link className="text-white text-sm group-hover/item:underline" href={'#'}>
             Exit Profile
             </Link>
        </li>
        <li className="px-3 group/item flex flex-row gap-3 items-center w-full">
              <Link className="text-white text-sm group-hover/item:underline" href={'#'}>
             Transfer Profile
             </Link>
        </li>
        <li className="px-3 group/item flex flex-row gap-3 items-center w-full">
              <Link className="text-white text-sm group-hover/item:underline" href={'#'}>
             Account
             </Link>
        </li>
        <li className="px-3 group/item flex flex-row gap-3 items-center w-full">
              <Link className="text-white text-sm group-hover/item:underline" href={'#'}>
             Help Center
             </Link>
        </li>
      </ul>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <Link className="px-3 text-center text-white text-sm hover:underline" href={'#'}>
        Sign out of Netflix
      </Link>
    </nav>
  )
}

export default AccountMenu;