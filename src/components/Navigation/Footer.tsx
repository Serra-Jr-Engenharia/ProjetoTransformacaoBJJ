import { InstagramIcon, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-black py-[20px] px-[30px] w-full box-border mt-auto">
      < hr/>
      <div className="flex md:flex-row justify-between items-center gap-4 max-w-[1200px] w-full px-4 mx-auto">

        <div className="text-base leading-snug text-center md:text-left w-full md:w-auto">
          <p className='text-[orange] font-bold'>
            CONHEÇA  
          </p>  
          <p className="m-0">
            Termos 
          </p>
          <p>
            Política de privacidade
          </p>
        </div>

        <div className="flex flex-col *:gap-4 flex-wrap justify-center md:justify-end w-full md:w-auto">

          <p className='text-[orange] font-bold'>
            ENTRE EM CONTATO
          </p>

          <div className='flex justify-center'>
            <a href="mailto:felipebraido11@outlook.com" target='_blank' rel="noopener noreferrer" className="flex justify-center items-center rounded-full hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer">
            <Mail className="w-[26px] h-[26px]" />
            </a>

          <a
            href="https://www.instagram.com/institutotransformacao.nf/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center rounded-full hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer">
            <InstagramIcon className="w-[26px] h-[26px]" />
          </a>
          </div>


        </div>
      </div>
    </footer>
  );
}
