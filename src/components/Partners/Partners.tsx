export default function Partners() {
    return (

      <section className="py-12 bg-white">

        <div className="px-6 py-10 max-w-6xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-10">
                Parceiros
            </h2>

          <div className="grid grid-cols-3 gap-6 items-center justify-center">
  
            <img src="/LogoUerj.svg" alt="Parceiro 1" className="h-16 mx-auto" />
           
            <img src="/LogoSparta.svg" alt="Parceiro 2" className="h-16 mx-auto" />
  
            <img src="/LogoFermoplast.svg" alt="Parceiro 3" className="h-16 mx-auto" />

          </div>

           <div className="px-6 py-10 grid grid-cols-2 gap-6 items-center justify-center">
  
            <img src="/LogoPontes.svg" alt="Parceiro 4" className="h-16 mx-auto" />
  
            <img src="/LogoSpartanus.svg" alt="Parceiro 5" className="h-16 mx-auto" />
            
          </div>

        </div>

      </section> 
    );
  }