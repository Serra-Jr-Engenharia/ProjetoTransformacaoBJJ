export default function Card1() {
  return (
    <div className="bg-white px-6 py-10 max-w-6xl mx-auto rounded-2xl shadow-lg ">
      <div className="flex flex-col md:flex-row items-center gap-8 ">
        <div className="md:w-1/2 space-y-4">
          <h1 className="font-bold text-orange-500 text-3xl md:text-4xl leading-tight">
            INCLUSÃO,<br /> ESPORTE E <br /> EDUCAÇÃO
          </h1>
          <p className="text-black text-base leading-relaxed">
            O projeto visa promover a inclusão social através do esporte, capacitando crianças, adolescentes e adultos,
            especialmente aqueles com necessidades especiais. Busca gerar saúde, equilíbrio psicológico e oportunidades
          </p>
          <div className="pt-4">
            <button className="font-semibold text-orange-500 rounded-md mt-4 border border-orange-500 py-3 px-8  transition w-full md:w-auto">
              Descubra mais
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/Imagemcard1.svg" alt="Crianças do projeto" className="rounded-xl shadow-md w-[500px] h-[300px] object-cover"/>
        </div>
      </div>

        <div className="w-full h-full flex space-x-48 pl-6 pr-10">
            <div>
                <img src="/20.svg" alt="Card 2 Image" className="w-[100px] h-[100px]" />
                <p className="text-sm text-black font-semibold">Vidas transformadas</p>
            </div>
            <div>
                <img src="/4000.svg" alt="Card 2 Image" className="w-[100px] h-[100px]" />
                <p className="text-sm text-black font-semibold">Alunos pelo Brasil</p>
            </div>
            <div>
                <img src="/250.svg" alt="Card 2 Image" className="w-[100px] h-[100px]" />
                <p className="text-sm text-black font-semibold">Alunos contemplados com bolsas de estudos</p>
            </div>
            <div>
                <img src="/3000.svg" alt="Card 2 Image" className="w-[100px] h-[100px]" />
                <p className="text-sm text-black font-semibold">Medalhas conquistadas nos últimos 5 anos</p>
            </div>
            
        </div>

    </div>
  );
}
