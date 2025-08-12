"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";


export default function Header() {
  const rota = usePathname(); 
  const [menuOpen, setMenuOpen] = useState(false);

  // const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const homePage = rota === "/";
  
  const handleLinkClick = () => {
    setMenuOpen(false);
  }

  return(
      <header className="flex flex-wrap items-center px-4 lg:px-24 py-4 bg-white border-b border-gray-200 relative z-50">

      <div className="flex-1 flex items-center">
        <Link href="/">
          <button className="flex items-center gap-2 transition-color duration-500 hover:opacity-80 cursor-pointer">
            <Image
              src="LogoProjeto.svg"
              width={50}
              height={50}
              alt="Logo Transformação"
              className="rounded-full"
            />
          </button>
        </Link>

        <button
          className="lg:hidden text-3xl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <nav
           className={`absolute top-[70px] left-0 w-full bg-white shadow-md lg:shadow-none lg:static lg:w-auto ${
            menuOpen ? "block" : "hidden"
            } lg:block`}
           >
          <ul className="flex flex-col ml-[60px] lg:flex-row lg:gap-1 text-lg lg:text-xl font-darker font-bold p-4 lg:p-0 ">
            <li className="md:flex md:justify-end ml:flex ml:justify-end mm:flex mm:justify-end ms:flex ms:justify-end">
              { homePage ? (
              <Link href="#Information" scroll={true} >
                <button className="cursor-pointer block text-black px-10 py-2 transition-color duration-500 hover:text-[#2D875A] text-left md:px-2 ml:px-2 mm:px-2 ms:px-2"
                onClick={handleLinkClick}
                >
                  SOBRE
                </button>
              </Link>

              ) : (
              <Link href="/">
                <button className="cursor-pointer block text-black px-10 py-2 transition-color duration-500 hover:text-[#2D875A] text-left md:px-2 ml:px-2 mm:px-2 ms:px-2">
                  SOBRE
                </button> 
              </Link>
              )}              
            </li>

            <li className="md:flex md:justify-end ml:flex ml:justify-end mm:flex mm:justify-end ms:flex ms:justify-end">
              { homePage ? (
              <Link href="#Partners" scroll={true}>
                <button className="cursor-pointer block text-black px-2 py-2 transition-color duration-500 hover:text-[#2D875A] text-left lg:text-center"
                onClick={handleLinkClick}
                >
                  PARCEIROS
                </button>
              </Link>

              ) : ( 
              <Link href="/">
                <button className="cursor-pointer block text-black px-2 py-2 transition-color duration-500 hover:text-[#2D875A] text-left lg:text-center">
                  PARCEIROS
                </button> 
              </Link> 
              )}
            </li>

            <li className="md:flex md:justify-end ml:flex ml:justify-end mm:flex mm:justify-end ms:flex ms:justify-end">
              <Link href="/nosso-instituto">
                <button className="cursor-pointer block text-black px-2 py-2 transition-color duration-500 hover:text-[#2D875A] text-left lg:text-center"
                onClick={handleLinkClick}>
                  NOSSO INSTITUTO
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="hidden lg:block">
          <Link href='/doacao'>
            <button
              className="cursor-pointer font-bold block text-white rounded-lg px-4 py-2 transition-color duration-500 hover:opacity-80 text-left lg:text-center bg-orange-500">
              QUERO DOAR
            </button>
          </Link>
      </div>
      
    </header>
  );
}