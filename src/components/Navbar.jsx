"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const Navbar = () => {
    const pathName = usePathname()
  const links = (
    <>
      <li>
        <Link href="/" className={`${pathName === "/"? "text-blue-500 border mr-3": " mr-3 text-black"}`}>Home</Link>
      </li>
      <li>
        <Link href="/about" className={`${pathName === "/about"? "text-blue-500 border mr-3 ": " mr-3 text-black"}`}>About</Link>
      </li>
      <li>
        <Link href="/services" className={`${pathName === "/services"? "text-blue-500 border mr-3": " mr-3 text-black"}`}>Services</Link>
      </li>
      <li>
        <Link href="/blog" className={`${pathName === "/blog"? "text-blue-500 border mr-3": " mr-3 text-black"}`}>Blog</Link>
      </li>
      <li>
        <Link href="/contact" className={`${pathName === "/contact"? "text-blue-500 border mr-3": " mr-3 text-black"}`}>Contact</Link>
      </li>
    
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[1600px] mx-auto p-6 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
         <Link href="/">
          <Image width={107} height={87} src="/assets/logo.svg"  alt="Logo"></Image>
         </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline text-red-500">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
