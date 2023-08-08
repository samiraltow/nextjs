"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg">
      <nav className=" container flex justify-between items-center h-20 py-4 ">
        <img src="/image/Logo.png" alt="LOGO" />

        {/* Mobile Menu Icon */}
        {!isMenuOpen ? (
          <div
            className="block md:hidden cursor-pointer"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        ) : (
          <div
            className="block md:hidden cursor-pointer"
            onClick={handleMenuToggle}
          >
            {/* Cross Icon for Closing the Mobile Menu */}
            <svg
              className="w-6 h-6 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 352 512"
            >
              <path
                fill="currentColor"
                d="M227.2 256l123.5-123.5c12.5-12.5 12.5-32.8 0-45.2l-22.6-22.6c-12.5-12.5-32.8-12.5-45.2 0L160 188.8 36.5 65.2c-12.5-12.5-32.8-12.5-45.2 0l-22.6 22.6c-12.5 12.5-12.5 32.8 0 45.2L92.8 256 14.3 379.5c-12.5 12.5-12.5 32.8 0 45.2l22.6 22.6c12.5 12.5 32.8 12.5 45.2 0L160 323.2l123.5 123.5c12.5 12.5 32.8 12.5 45.2 0l22.6-22.6c12.5-12.5 12.5-32.8 0-45.2L227.2 256z"
              ></path>
            </svg>
          </div>
        )}

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:gap-6 md:items-center  `}
        >
          <ul className="sm:hidden  md:flex md:gap-[24px] md:flex-row md:list-none mt-[25px] mb-[25px]  body1 navtext">
            <Link href="/home">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </ul>
          <ul className=" md:hidden flex flex-col gap-6 md:flex-row md:list-none mt-3 body1 navtext ">
            <Link href="/home">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </ul>
          <button type="submit" className="btn">
            Subscribe
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
