import Image from 'next/image';

export default function Card4() {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen gap-8 lg:gap-12">
                
                <div className="flex-1 flex justify-center relative w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px]">
                    <div className="absolute inset-0 -z-10 flex justify-center items-center w-[100%] h-[100%]">
                        <Image 
                            className="w-full h-auto"
                            src="./Background-page.svg"
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"   
                        />
                    </div>

                    <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 lg:border-8 border-white">
                        <img 
                            src="/judo-pilates.svg"
                            className="w-full h-full object-cover"
                            alt="Judô e Ginástica"
                        />
                    </div>                      
                </div>

                <div className="flex-1 max-w-md lg:max-w-lg xl:max-w-xl text-center lg:text-left order-2 lg:order-2 px-4 lg:px-0">
                    
                    <p className="font-semibold text-xs sm:text-sm mb-2 lg:mb-3">
                        Bem estar físico e mental
                    </p>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-red-500 mb-4 sm:mb-6 leading-tight">
                        JUDÔ E GINÁSTICA
                    </h1>
                    
                    <p className="font-medium sm:font-semibold text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                        A TURMA DE JIU-JITSU ADULTO MISTO É
                        DIRECIONADA PARA HOMENS E MULHERES QUE
                        BUSCAM APRIMORAR SUAS HABILIDADES
                        NESTA ARTE MARCIAL E ALCANÇAR UM NÍVEL
                        COMPETITIVO EXCEPCIONAL.
                        NOSSAS AULAS MISTAS OFERECEM UMA
                        PLATAFORMA ÚNICA PARA O
                        DESENVOLVIMENTO DO JIU-JITSU DE ALTO
                        NÍVEL, ONDE OS PARTICIPANTES TÊM A
                        OPORTUNIDADE DE TREINAR EM CONJUNTO E
                        COMPARTILHAR EXPERIÊNCIAS, PROMOVENDO
                        UM AMBIENTE DE APRENDIZADO
                        COLABORATIVO E ENRIQUECEDOR.
                        ALÉM DISSO, TEMOS O COMPROMISSO DE
                        OFERECER UM AMBIENTE INCLUSIVO. NOSSA
                        METODOLOGIA É ADAPTADA PARA ATENDER ÀS
                        NECESSIDADES DE ALUNOS COM DEFICIÊNCIA,
                        GARANTINDO QUE TODOS TENHAM ACESSO
                        IGUALITÁRIO AO APRENDIZADO E AO
                        DESENVOLVIMENTO ATLÉTICO.
                    </p>

                </div>
                
            </div>
        </div>
    );
}