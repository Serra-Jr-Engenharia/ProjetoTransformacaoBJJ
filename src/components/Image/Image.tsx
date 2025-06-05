export default function Image () {
    return(
        <div className="relative flex justify-left items-center bg-black w-full h-full">
            <img src="/Banner.svg" className="w-full h-full opacity-50">
            </img>
            
            <div className="absolute flex justify-center items-start flex-col left-0 top-1/4 px-[70px]">

                <p className=" text-white text-6xl font-bold ">HÁ MAIS DE 19 ANOS <br/>TRANSFORMANDO <br/>VIDAS ATRAVÉS DO<br/> ESPORTE E EDUCAÇÃO.</p>
                <div className="flex gap-4 py-3 ">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl h-[46px] w-[227px] transition  ">Conheça nosso projeto</button>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl h-[46px] w-[148px] transition  ">Junte-se a nós</button>
                </div>
            </div>
        </div>
    )
}