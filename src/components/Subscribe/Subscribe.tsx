export default function Subscribe() {
    const handleDonationClick = () => {
      console.log("Botão de doação clicado");
    };
  
    return (
      <div className="px-6 py-10 max-w-6xl mx-auto bg-white flex items-center justify-center mt-[60px]">
        <div className="text-center">
          <h1 className="text-[orange] text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-snug">
            FAÇA UMA DOAÇÃO E VEJA QUE 100% VAI PARA NOSSO PROJETO
          </h1>
          <button
            onClick={handleDonationClick}
            className="bg-[orange] hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded text-sm transition-colors duration-200"
          >
            Doe Agora
          </button>
        </div>
      </div>
    );
  }