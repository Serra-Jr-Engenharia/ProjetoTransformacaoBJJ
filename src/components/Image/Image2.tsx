export default function Image() {
  return (
    <div className="relative flex justify-center items-center bg-black w-full h-full">
      <img
        src="/Banner.svg"
        className="w-full h-full object-cover opacity-50"
      ></img>

      <div className="absolute inset-0 flex flex-col justify-center items-center px-3 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-8 sm:py-16 md:py-24 lg:py-32">
        <p className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-center">
          NOSSO INSTITUTO
        </p>

        <p className="hidden md:block text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-center leading-relaxed max-w-5xl">
          O INSTITUTO TRANSFORMAÇÃO PASSOU POR UMA INCRÍVEL RENOVAÇÃO EM NOSSO
          ESPAÇO! COM MAIS DE 10 LÂMPADAS DE LED TUBULARES INSTALADAS, REPAROS
          FUNDAMENTAIS EM NOSSA REDE ELÉTRICA, A PINTURA REVITALIZADA DE TODAS
          AS PAREDES E A INSTALAÇÃO DE UMA LONA EM NOSSO TATAME PRINCIPAL,
          ESTAMOS MAIS PREPARADOS DO QUE NUNCA PARA OFERECER UM AMBIENTE SEGURO
          E ACOLHEDOR PARA NOSSOS ALUNOS. ALÉM DISSO, A AQUISIÇÃO DE DIVERSOS
          EQUIPAMENTOS NOVOS NOS PERMITE EXPANDIR NOSSAS ATIVIDADES E OFERECER
          UM TREINAMENTO AINDA MAIS COMPLETО.
        </p>
      </div>
    </div>
  );
}
