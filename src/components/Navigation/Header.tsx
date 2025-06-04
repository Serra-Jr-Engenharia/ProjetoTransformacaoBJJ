"use client";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (sectionId: string) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-4 lg:px-24 py-4 bg-white border-b border-gray-200 relative z-50">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 hover:opacity-80"
      >
        <img src="src/assets/Logo.svg" alt="Logo Transformação" className="w-[60px] h-[60px]" />
      </button>

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
            <button
              onClick={() => handleNavigation('Information')}
              className="block text-black px-4 py-2 hover:text-[#2D875A] text-left lg:text-center"
            >
              SOBRE NÓS
            </button>
          </li>

          <li>
            <button
              onClick={() => handleNavigation('Partners')}
              className="block text-black px-4 py-2 hover:text-[#2D875A] text-left lg:text-center"
            >
              PARCEIROS
            </button>
          </li>


          <li>
            <button
              onClick={() => navigate('/nossoprojeto')}
              className="block text-black px-4 py-2 hover:text-[#2D875A] text-left lg:text-center"
            >
              NOSSO PROJETO
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}