export default function Card3() {
  return (
    <div className="bg-white px-6 py-10 max-w-6xl mx-auto rounded-2xl shadow-lg mt-[60px] mb-[60px] flex gap-6">
      <h1 className="text-orange-500 font-bold text-4xl">
        NOSSO
        <br />
        PROJETO
      </h1>
      <div> 
        <p className="text-black text-justify font-semibold">
          O Projeto Transformação é um exemplo inspirador de como uma iniciativa
          social pode impactar positivamente a vida de muitas pessoas. Fundado
          em 11 de abril de 2005, no bairro da Lagoinha, e inicialmente
          conhecido como Lagoinha Jiu-Jitsu, o projeto oferece aulas gratuitas
          de Jiu-Jitsu, promovendo inclusão social, disciplina e superação. Ao
          longo dos anos, formou grandes lutadores que conquistaram importantes
          títulos em competições nacionais e internacionais, representando o
          Brasil em lugares como Portugal e Dubai.
        </p>
        <button className="text-orange-500 px-20 py-2 rounded-md mt-4 border border-orange-500" onClick={() => alert("Curty passou aqui!")}>
            Conheça mais nosso projeto
        </button>
      </div>
    </div>
  );
}
