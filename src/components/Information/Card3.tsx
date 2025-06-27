import Link from "next/link";

export default function Card3() {
  return (
    <div className="bg-white px-6 py-10 max-w-6xl mx-auto rounded-2xl shadow-lg mb-[60px] flex flex-col lg:flex-row gap-6">
      {/* mt-[60px] */}
      <h1 className="text-orange-500 font-bold text-4xl lg:w-1/3">

        NOSSO
        <br />
        PROJETO
      </h1>
      <div>
        <p className="text-black font-semibold">
          O Projeto Transformação é um exemplo inspirador de como uma iniciativa
          social pode impactar positivamente a vida de muitas pessoas. Fundado
          em 11 de abril de 2005, no bairro da Lagoinha, e inicialmente
          conhecido como Lagoinha Jiu-Jitsu, o projeto oferece aulas gratuitas
          de Jiu-Jitsu, promovendo inclusão social, disciplina e superação. Ao
          longo dos anos, formou grandes lutadores que conquistaram importantes
          títulos em competições nacionais e internacionais, representando o
          Brasil em lugares como Portugal e Dubai.
        </p>
        <Link href="/nosso-projeto">
          <button className="text-orange-500 cursor-pointer px-6 py-2 rounded-md mt-4 border border-orange-500 hover:bg-orange-50 transition">
              Conheça mais nosso projeto
          </button>
        </Link>
        
      </div>
    </div>
  );
}
