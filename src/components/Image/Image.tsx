export default function Image () {
    return(
        <div className="flex justify-left items-center bg-black w-[1920px] h-[807px]">
            <img src="/Banner.svg" className="w-[1920px] h-[807px] relative opacity-80">
            </img>
            
            <div className="absolute flex justify-center items-center flex-col">

                <p className=" text-white text-4xl font-bold">HÁ MAIS DE 19 ANOS <br/>TRANSFORMANDO <br/>VIDAS ATRAVÉS DO<br/> ESPORTE E EDUCAÇÃO.</p>
                <div className="flex gap-4">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl h-[46px] w-[227px] transition  ">Conheça nosso projeto</button>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl h-[46px] w-[148px] transition  ">Junte-se a nós</button>
                </div>
            </div>
        </div>
    )
}