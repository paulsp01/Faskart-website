import React from 'react'
import {Search,UserRound,Heart,ShoppingCart} from "lucide-react"
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
   <>
    <nav className="border flex items-center justify-between h-22 p-8 bg-[#F7F4EF] border-[#3B2F2F]/15 shadow-lg">
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#3B2F2F]'>faskart</h1>
      <ul className="hidden lg:flex text-lg font-bold items-center justify-center gap-10 text-[#3B2F2F] ">
        <li> <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " border-b-4 border-[#DCC6A1] pb-5"
                  : "text-[#3B2F2F]  transition duration-300"
              }
            >
              Home
            </NavLink></li>
        <li> <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? " border-b-4 border-[#DCC6A1] pb-5"
                  : "text-[#3B2F2F]    transition duration-300"
              }
            >
              About
            </NavLink></li>
        <li> <NavLink
              to="/collection"
              className={({ isActive }) =>
                isActive
                  ? " border-b-4 border-[#DCC6A1] pb-5"
                  : "text-[#3B2F2F]  transition duration-300"
              }
            >
              Collections
            </NavLink></li>
        <li> <NavLink
              to="/new-arrival"
              className={({ isActive }) =>
                isActive
                  ? " border-b-4 border-[#DCC6A1] pb-5"
                  : "text-[#3B2F2F]  transition duration-300"
              }
            >
              New Arrivals
            </NavLink></li>

      </ul>
      <div className="flex justify-center items-center gap-4 text-[#3b2f37]">
        <h1><Search /></h1>
        <h1><UserRound /></h1>
        <h1><Heart /></h1>
        <h1><ShoppingCart /></h1>
      </div>
    </nav>
   </>
  )
}

export default Header