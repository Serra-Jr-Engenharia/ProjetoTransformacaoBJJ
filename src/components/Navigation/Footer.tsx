import { InstagramIcon, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-6 w-full border-t border-gray-300 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1200px] mx-auto gap-10">
        
        {/* Seção de links */}
        <div className="w-full md:w-auto text-center md:text-left space-y-2">
          <h4 className="text-orange-500 font-bold text-lg uppercase tracking-wide">
            Conheça
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              <a href="#" className="hover:underline">Termos</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Política de Privacidade</a>
            </li>
          </ul>
        </div>

        {/* Seção de contato */}
        <div className="w-full md:w-auto text-center md:text-right space-y-4">
          <h4 className="text-orange-500 font-bold text-lg uppercase tracking-wide">
            Entre em Contato
          </h4>

          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="mailto:felipebraido11@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 transition duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-orange-600" />
            </a>
            <a
              href="https://www.instagram.com/institutotransformacao.nf/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 transition duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6 text-orange-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
