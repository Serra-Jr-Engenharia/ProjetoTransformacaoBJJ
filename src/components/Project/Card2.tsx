import Image from 'next/image';

export default function Card2() {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden w-[100vw]   flex items-center justify-center  ">
            <div className="max-w-6xl w-full relative z-10 flex items-center justify-between min-h-screen mr-3  ">
            
                    <div className="flex-1 flex justify-center relative ">
                        <div className=" absolute flex inset-0 -z-1000 bg-cover bg-center -mt-30"> 
                            <Image 
                                src="./Background-page.svg"
                                alt="Background Image"
                                width={1600}
                                height={1600}
                            />
                        </div>
                        <div className="w-[500px] h-[500px] rounded-full overflow-hidden shadow-2xl border-8 border-white ">
                            <img 
                                src="/feminino.svg"
                                className="w-full h-full object-cover"
                            />
                        </div>                      
                    </div>

                    <div className="flex-1 max-w-md ml-5">
                        <p className="font-semibold text-sm mb-2">
                            Empoderamento feminino
                        </p>
                        
                        <h1 className="text-6xl font-bold text-red-500 mb-6">
                            FEMININO
                        </h1>
                        
                        <p className="font-semibold text-base leading-relaxed mb-8">
                            Each year we're kickstarting climate action by
                            supporting 12 amazing community partners all
                            over the UK.
                        </p>
    
                    </div>
                
            </div>
        </div>
    );
}