import Image from 'next/image';

export default function Card3 (){
    return (

        <div className="min-h-screen bg-white relative overflow-hidden">
            <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
                <div className="flex items-center justify-between max-w-6xl w-full gap-4">
   
                    <div className="flex-1 max-w-md">
                        <p className="text-sm font-medium mb-2">
                            Para homens e mulheres
                        </p>
                        
                        <h1 className="text-6xl font-bold text-red-500 mb-6">
                            Adulto-misto
                        </h1>
                        
                        <p className="text-base leading-relaxed mb-8">
                        We’re driving long-term transformative change in
                        climate education and climate education for
                        young people.
                        </p>
    
                    </div>

                    <div className="flex-1 flex justify-center relative">
                        <div className="absolute inset-0 -z-1000 bg-cover bg-center -mt-15"> 
                            <Image
                                src="./Background-page.svg"
                                alt="Background Image"
                                width={1600}
                                height={1600}
                            />
                        </div>
                        <div className="w-[500px] h-[500px] rounded-full overflow-hidden shadow-2xl border-8 border-white">
                            <img 
                                src="/adulto-misto.svg"
                                className="w-full h-full object-cover"
                            />
                        </div> 
                    </div>
                    
                </div>
            </div>
        </div>
    );
}