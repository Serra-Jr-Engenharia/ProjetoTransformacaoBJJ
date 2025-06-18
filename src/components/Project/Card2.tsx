import Image from "next/image";

export default function Card2() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen gap-8 lg:gap-12">
        <div className="flex-1 flex justify-center relative mb-6">
          <div className="absolute inset-0 -z-10 flex justify-center items-center">
            <Image
              src="./Background-page.svg"
              alt="Background Image"
              width={1600}
              height={1600}
            />
          </div>
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 lg:border-8 border-white">
            <img src="/feminino.svg" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex-1 max-w-md lg:max-w-lg xl:max-w-xl text-center lg:text-left order-2 lg:order-2 px-4 lg:px-0">
          <p className="font-semibold text-xs sm:text-sm mb-2 lg:mb-3">
            Empoderamento feminino
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-red-500 mb-4 sm:mb-6 leading-tight">
            FEMININO
          </h1>

          <p className="font-semibold sm:font-semibold text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
            AS AULAS DE JIU-JITSU FEMININO SÃO CUIDADOSAMENTE ESTRUTURADAS PARA
            ATENDER ÀS DEMANDAS ESPECÍFICAS DAS MULHERES NESSE ESPORTE, COM UMА
            METODOLOGIA QUE VISA NÃO APENAS O APRIMORAMENTO DAS TÉCNICAS DE
            JIU-JITSU, MAS TAMBÉM O DESENVOLVIMENTO DA DEFESA PESSOAL.
            ATUALMENTE COM MAIS DE 40 MULHERES INSCRITAS, NOSSA ABORDAGEM
            ENFATIZA NÃO APENASA PRÁTICA ESPORTIVA, MAS TAMBÉM O EMPODERAMENTO
            FEMININO. ATRAVÉS DE NOSSO PROGRAMA, AS ALUNAS NÃO SÓ ADQUIREM
            HABILIDADES FÍSICAS, MAS TAMBÉM DESENVOLVEM CONFIANÇA E AUTOESTIMA,
            TORNANDO-SE MAIS CAPACITADAS PARA ENFRENTAR DESAFIOS DENTRO E FORA
            DO TATAME. ESTAMOS COMPROMETIDOS EM OFERECER UM AMBIENTE SEGURO E
            INCLUSIVO, ONDE CADA MULHER POSSA SE SENTIR EMPODERADA E CAPAZ DE
            ALCANÇAR SEUS OBJETIVOS.
          </p>
        </div>
      </div>
    </div>
  );
}
