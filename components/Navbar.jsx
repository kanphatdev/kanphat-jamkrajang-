
import Link from 'next/link';
import React from 'react'
import { IoDownloadOutline } from "react-icons/io5";

export default async function Navbar() {

  return (
    <div className="navbar bg-base-100 ">
      <div className="flex-1">
  
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className=' '>
            <button className="btn btn-ghost capitalize">
              <Link href={'/'}>home</Link>
            </button>
          </li>
          <li className=' '  >
            <button className="btn btn-ghost capitalize">
              <Link className='' href={'/gitrepo'}>git repo</Link>
            </button>
          </li>
          <li>
          <button className="btn btn-ghost">
            <Link href={'https://drive.google.com/file/d/1J5UC88xTKJIQWN8nY7eSks_F1wP_u1nU/view?usp=drive_link'}>
              <IoDownloadOutline className='h-5 w-5' />
            </Link>
          </button>
          </li>

        </ul>
      </div>
    </div>
  )
}
