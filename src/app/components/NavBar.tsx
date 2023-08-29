"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full h-28 border-b-[1px] border-gray-500 fixed top-0 left-0 right-0">
        <div className="justify-between px-2 mx-auto pb-2  lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:px-2 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/image/logo.png"
                  alt="logo"
                  width={140}
                  height={40}
                  className="w-full dark:hidden"
                />
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/image/close.svg" width={30} height={30} alt="close" />
                  ) : (
                    <Image
                      src="/image/menu.svg"
                      width={30}
                      height={30}
                      alt="menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
          <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
                navbar ? 'p-12 md:p-0 block bg-transparent  h-full' : 'hidden'
              }`}
            >
              <ul className="h-100 md:h-auto items-center justify-center md:flex">
                <li className="navbarLi pb-6 text-xl font-bold py-2 md:px-6 text-center border-b-2 md:border-b-0   md:hover:bg-transparent text-slate-50">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="navbarLi pb-6 text-xl font-bold py-2 md:px-6 text-center border-b-2 md:border-b-0   md:hover:bg-transparent text-slate-50">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>
                <li className="navbarLi pb-6 text-xl font-bold py-2 md:px-6 text-center border-b-2 md:border-b-0   md:hover:bg-transparent text-slate-50">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;