import Link from "next/link";

export default function Image() {
  return (
    <div className="relative flex items-center bg-black w-full h-full">
      <img
        src="/Banner.svg"
        alt="Banner"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="hidden ml:block absolute z-10 left-0 top-1/2 ml:top-1/4 flex flex-col items-start gap-4 px-4 ml:px-8 lg:px-[70px] w-full max-w-[600px]">
        <p className="text-white font-bold leading-tight text-lg ml:text-xl md:text-3xl lg:text-4xl xl:text-4xl ">
          HÁ MAIS DE 19 ANOS
          <br />
          TRANSFORMANDO
          <br />
          VIDAS ATRAVÉS DO
          <br />
          ESPORTE E EDUCAÇÃO.
        </p>
        
        <Link href="/nosso-projeto">
        <button
          className="hidden md:block items-center justify-center px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition text-xs ml:text-sm md:text-base lg:text-base    
          h-8 ml:h-9 md:h-11 lg:h-12 w-62 z-50 cursor-pointer">
          Conheça nosso projeto
        </button>
        </Link>
      </div>
    </div>
  );
}
