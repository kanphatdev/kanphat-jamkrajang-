import React from 'react'
import { IoDownloadOutline } from "react-icons/io5";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li className='capitalize'><a>home</a></li>
      <li className='capitalize'  ><a>git repo</a></li>
      <li><a>
      <IoDownloadOutline className='h-5 w-5'/>
        
        
        </a></li>
     
    </ul>
  </div>
</div>
  )
}
