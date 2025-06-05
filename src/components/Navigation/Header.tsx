"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="flex flex-wrap justify-between items-center px-4 lg:px-24 py-4 bg-white border-b border-gray-200 relative z-50">
      <Link href='/'>
        <button
          className="flex items-center gap-2 hover:opacity-80"
        >
          <Image 
            src='LogoUerj.svg'
            width={250}
            height={250}
            alt="Logo Transformação"
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

      <nav className={`absolute top-[70px] left-0 w-full bg-white shadow-md lg:shadow-none lg:static lg:w-auto ${menuOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex flex-col lg:flex-row lg:gap-10 text-lg lg:text-xl font-darker font-bold p-4 lg:p-0">
          <li>
            <Link href=''>
              <button
                className="block text-black px-4 py-2 hover:text-[#2D875A] text-left lg:text-center"
              >
                SOBRE NÓS
              </button>
            </Link>
          </li>

          <li>
            <Link href=''>
              <button
                className="block text-black px-4 py-2 hover:text-[#2D875A] text-left lg:text-center"
              >
                PARCEIROS
              </button>
            </Link>
          </li>


          <li>
            <Link href='/nosso-projeto'>
              <button
                className="block text-black px-4 py-2 hover:text-[#2D875A] text-left lg:text-center"
              >
                NOSSO PROJETO
              </button>
            </Link>
          </li>
          
          <li>
            <Link href='/doacao'>
              <button
                className="block text-black px-4 py-2 hover:text-[#2D875A] text-left lg:text-center"
              >
                DOAÇÃO
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}