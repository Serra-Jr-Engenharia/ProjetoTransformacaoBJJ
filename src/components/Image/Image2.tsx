export default function Image() {
  return (
    <div className="relative flex justify-center items-center bg-black w-full h-full">
      <img src="/Banner.svg" className="w-full h-full opacity-50"></img>

      <div className="absolute flex flex-col justify-center items-center p-[330px]">
        <p className=" text-white text-6xl font-bold mb-4">NOSSO PROJETO</p>
        <p className=" text-white text-lg font-semibold flex text-center">
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
