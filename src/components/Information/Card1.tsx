export default function Card1() {
  return (
    <div className="bg-white px-6 py-10 max-w-6xl mx-auto rounded-2xl shadow-lg">

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <h1 className="font-bold text-orange-500 text-3xl md:text-4xl leading-tight">
            INCLUSÃO,<br /> ESPORTE E <br /> EDUCAÇÃO
          </h1>
          <p className="text-black text-base leading-relaxed font-semibold">
            O Instituto visa promover a inclusão social através do esporte, capacitando crianças, adolescentes e adultos,
            especialmente aqueles com necessidades especiais. Busca gerar saúde, equilíbrio psicológico e oportunidades
          </p>
          
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img src="/Imagemcard1.svg" alt="Crianças do Instituto" className="rounded-xl shadow-md w-[500px] h-[300px] object-cover" />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:space-x-24 space-y-6 md:space-y-0 items-center justify-between mt-10">
        <div className="flex flex-col items-center text-center">
          <img src="/20.svg" alt="Vidas transformadas" className="w-[100px] h-[100px]" />
          <p className="text-sm text-black font-semibold">Vidas transformadas</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/4000.svg" alt="Alunos pelo Brasil" className="w-[100px] h-[100px]" />
          <p className="text-sm text-black font-semibold">Alunos pelo Brasil</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/250.svg" alt="Bolsas de estudo" className="w-[100px] h-[100px]" />
          <p className="text-sm text-black font-semibold">Alunos contemplados com bolsas de estudos</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/3000.svg" alt="Medalhas conquistadas" className="w-[100px] h-[100px]" />
          <p className="text-sm text-black font-semibold">Medalhas conquistadas nos últimos 5 anos</p>
        </div>
      </div>

    </div>
  );
}
