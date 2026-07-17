import { NavLink, Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-[#DCC6A1] bg-[#FFFFEF] px-6 py-10 shadow-[0_-10px_30px_rgba(139,94,60,0.08)] sm:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <section className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold uppercase text-[#3B2F2F]">
            FASKART
          </h2>

          <p className="max-w-sm text-sm font-semibold uppercase leading-6 text-[#8B5E3C]">
            Premium everyday products designed for comfort, style, and reliable
            quality.
          </p>

          <div className="flex items-center gap-3">
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#DCC6A1] text-[#8B5E3C] transition-colors duration-200 hover:border-[#3B2F2F] hover:bg-[#3B2F2F] hover:text-[#FFFFEF]"
              to="https://www.facebook.com"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </Link>

            <Link
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#DCC6A1] text-[#8B5E3C] transition-colors duration-200 hover:border-[#3B2F2F] hover:bg-[#3B2F2F] hover:text-[#FFFFEF]"
              to="https://www.instagram.com"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>

            <Link
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#DCC6A1] text-[#8B5E3C] transition-colors duration-200 hover:border-[#3B2F2F] hover:bg-[#3B2F2F] hover:text-[#FFFFEF]"
              to="https://twitter.com"
              aria-label="X"
            >
              <FaXTwitter />
            </Link>

            <Link
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#DCC6A1] text-[#8B5E3C] transition-colors duration-200 hover:border-[#3B2F2F] hover:bg-[#3B2F2F] hover:text-[#FFFFEF]"
              to="https://www.linkedin.com"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-bold uppercase text-[#3B2F2F]">
            Explore
          </h3>

          <ul className="flex flex-col gap-3 text-sm font-bold uppercase tracking-wide text-[#8B5E3C]">
            <li>
              <NavLink
                className="transition-colors duration-200 hover:text-[#3B2F2F]"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className="transition-colors duration-200 hover:text-[#3B2F2F]"
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                className="transition-colors duration-200 hover:text-[#3B2F2F]"
                to="/new-arrival"
              >
                New Arrival
              </NavLink>
            </li>

            <li>
              <NavLink
                className="transition-colors duration-200 hover:text-[#3B2F2F]"
                to="/collections"
              >
                Collections
              </NavLink>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-bold uppercase text-[#3B2F2F]">
            Support
          </h3>

          <ul className="flex flex-col gap-3 text-sm font-bold uppercase tracking-wide text-[#8B5E3C]">
            <li>
              <NavLink
                className="transition-colors duration-200 hover:text-[#3B2F2F]"
                to="/shipping"
              >
                Shipping
              </NavLink>
            </li>

            <li>
              <NavLink
                className="transition-colors duration-200 hover:text-[#3B2F2F]"
                to="/returns"
              >
                Returns
              </NavLink>
            </li>

            <li>
              <NavLink
                className="transition-colors duration-200 hover:text-[#3B2F2F]"
                to="/size-guide"
              >
                Size Guide
              </NavLink>
            </li>

            <li>
              <NavLink
                className="transition-colors duration-200 hover:text-[#3B2F2F]"
                to="/help-center"
              >
                Help Center
              </NavLink>
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold uppercase text-[#3B2F2F]">
            Stay Updated
          </h3>

          <p className="text-sm font-semibold uppercase leading-6 text-[#8B5E3C]">
            Get product drops, offers, and store updates in your inbox.
          </p>

          <form className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <input
              className="min-h-12 flex-1 rounded-md border border-[#DCC6A1] bg-[#F7F4EF] px-4 text-sm font-semibold uppercase text-[#3B2F2F] outline-none transition-colors duration-200 placeholder:text-[#8B5E3C]/60 focus:border-[#8B5E3C]"
              type="email"
              placeholder="Email address"
              aria-label="Email address"
            />

            <button
              className="min-h-12 rounded-md bg-[#3B2F2F] px-5 text-sm font-bold uppercase text-[#FFFFEF] transition-colors duration-200 hover:bg-[#8B5E3C]"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </section>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-5 border-t border-[#DCC6A1] pt-6 text-sm font-semibold uppercase text-[#8B5E3C] lg:flex-row lg:items-center lg:justify-between">
        <div className="grid gap-3 sm:grid-cols-3 lg:gap-8">
          <p className="flex items-center gap-2">
            <FiMapPin className="text-[#8B5E3C]" />
            New Delhi, India
          </p>

          <p className="flex items-center gap-2">
            <FiPhone className="text-[#8B5E3C]" />
            +91 98765 43210
          </p>

          <p className="flex items-center gap-2">
            <FiMail className="text-[#8B5E3C]" />
            support@FASKART.com
          </p>
        </div>

        <p className="text-[#8B5E3C]">
          © {new Date().getFullYear()} FASKART. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;