export default function Image() {
  return (
    <div className="relative flex justify-center items-center bg-black w-full h-full">

      <img src="/Banner.svg" className="w-full h-full object-cover opacity-50"></img>

      <div className="absolute inset-0 flex flex-col justify-center items-center px-3 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-8 sm:py-16 md:py-24 lg:py-32">
        <p className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-center">
          NOSSO PROJETO
        </p>

        <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-center leading-relaxed max-w-4xl">
          O Projeto Transformação é um exemplo inspirador de como uma iniciativa
          social pode impactar positivamente a vida de muitas pessoas. Fundado
          em 11 de abril de 2005, no bairro da Lagoinha, e inicialmente
          conhecido como Lagoinha Jiu-Jitsu, o projeto oferece aulas gratuitas
          de Jiu-Jitsu, promovendo inclusão social, disciplina e superação. Ao
          longo dos anos, formou grandes lutadores que conquistaram importantes
          títulos em competições nacionais e internacionais, representando o
          Brasil em lugares como Portugal e Dubai.
        </p>
      </div>
    </div>
  );
}