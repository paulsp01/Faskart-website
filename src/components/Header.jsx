import React, { useState, useContext } from "react";
import {
  Search,
  UserRound,
  Heart,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/ProductContext/CartContext";

const Header = () => {
  const { wishlist, cart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Collections", path: "/collection" },
    { name: "New Arrivals", path: "/new-arrival" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#3B2F2F]/15 bg-[#F7F4EF] shadow-lg">
      <nav className="mx-auto flex h-20 max-w-10xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold uppercase text-[#3B2F2F] sm:text-4xl lg:text-5xl">
            Faskart
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-10 text-lg font-bold text-[#3B2F2F] lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-[#DCC6A1] pb-4"
                    : "transition hover:text-[#8B5E3C]"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-2 text-[#3B2F2F]">

          <button className="hidden rounded-lg p-2 transition hover:bg-[#DCC6A1] sm:block">
            <Search size={22} />
          </button>

          <button className="hidden rounded-lg p-2 transition hover:bg-[#DCC6A1] sm:block">
            <UserRound size={22} />
          </button>

          <Link to="/wishlist">
            <div className="relative rounded-lg p-2 transition hover:bg-[#DCC6A1]">
              <Heart size={22} />
              {wishlist.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#3B2F2F] bg-white px-1 text-[10px] font-bold text-[#3B2F2F]">
                  {wishlist.length}
                </span>
              )}
            </div>
          </Link>

          <Link to="/cart">
            <div className="relative rounded-lg p-2 transition hover:bg-[#DCC6A1]">
              <ShoppingCart size={22} />
              {cart.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#3B2F2F] px-1 text-[10px] font-bold text-[#FFFFEF]">
                  {cart.length}
                </span>
              )}
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 transition hover:bg-[#DCC6A1] lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-[#FFFFEF] transition-all duration-300 lg:hidden ${
          open ? "max-h-96 border-t border-[#DCC6A1]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 font-semibold ${
                  isActive
                    ? "bg-[#3B2F2F] text-white"
                    : "text-[#3B2F2F] hover:bg-[#DCC6A1]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="mt-4 flex gap-3 border-t border-[#DCC6A1] pt-4 sm:hidden">
            <button className="rounded-lg bg-[#F7F4EF] p-3">
              <Search />
            </button>

            <button className="rounded-lg bg-[#F7F4EF] p-3">
              <UserRound />
            </button>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;