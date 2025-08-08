import Image from 'next/image';

export default function Card1() {
    return (

    <div className="min-h-screen bg-white relative overflow-hidden w-full">
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl w-full gap-8 lg:gap-12">

          <div className="flex-1 max-w-md lg:max-w-lg xl:max-w-xl text-center lg:text-left px-4 lg:px-0">
            <p className="text-xs sm:text-sm font-semibold mb-2 lg:mb-3">
                Mais de 80 crianças matriculadas
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-red-500 mb-4 sm:mb-6 leading-tight">
              INFANTIL
            </h1>

            <p className="font-medium sm:font-semibold text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                AS AULAS DE JIU-JITSU INFANTIL DO INSTITUTO TRANSFORMAÇÃO OFERECEM UMA EXPERIÊNCIA INCLUSIVA E ENRIQUECEDORA PARA 
                CRIANÇAS DE TODAS AS IDADES E HABILIDADES. COM MAIS DE 80 CRIANÇAS MATRICULADAS ATUALMENTE, DIVIDIDAS EM DUAS 
                TURMAS – INFANTIL 1, PARA CRIANÇAS ATÉ OS 9 ANOS, E INFANTIL 2, DE 10 A 14 ANOS – O PROGRAMA PRIORIZA O DESENVOLVIMENTO 
                FÍSICO, EMOCIONAL E SOCIAL DOS ALUNOS. A METODOLOGIA APLICADA NAS AULAS É CUIDADOSAMENTE ADAPTADA PARA CADA FAIXA ETÁRIA, 
                FOCANDO NA CONSTRUÇÃO DE HABILIDADES TÉCNICAS E ÉTICAS, ALÉM DE PROMOVER VALORES COMO RESPEITO, DISCIPLINA E TRABALHO EM EQUIPE. 
                O INSTITUTO TRANSFORMAÇÃO TÊM SE DESTACADO PELO TREINAMENTO INCLUSIVO, ACOLHENDO ALUNOS COM NECESSIDADES ESPECIAIS, COMO AQUELES NO 
                ESPECTRO AUTISTA (TEA) E ALUNOS COM SÍNDROME DE DOWN, PROPORCIONANDO-LHES UMA OPORTUNIDADE ÚNICA DE DESENVOLVIMENTO E INTEGRAÇÃO NA COMUNIDADE.
            </p>
          </div>

          <div className="flex-1 flex justify-center relative  w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[500px]  lg:h-[500px]  xl:w-[550px] xl:h-[550px]">
            <div className="absolute inset-0 -z-10 flex justify-center items-center  w-[100%] h-[100%]">
              <Image className="w-full h-auto"
                src="./Background-page.svg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 lg:border-8 border-white">
              <img
                src="/infantil.svg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}