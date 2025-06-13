import Image from 'next/image';

export default function Card2() {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden ">
            <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
                <div className="flex items-center justify-between max-w-6xl w-full gap-64">
                    <div className="flex-1 flex justify-center relative">
                        <div className="absolute inset-0 -z-1000 bg-cover bg-center "> 
                            <Image
                                src="./Background-page.svg"
                                alt="Background Image"
                                width={1600}
                                height={1600}
                            />
                        </div>
                        <div className="w-[500px] h-[500px] rounded-full overflow-hidden shadow-2xl border-8 border-white">
                            <img 
                                src="/feminino.svg"
                                className="w-full h-full object-cover"
                            />
                        </div>                      
                    </div>

                    <div className="flex-1 max-w-md">
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
        </div>
    );
}