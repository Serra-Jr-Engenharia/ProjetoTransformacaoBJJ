import Image from 'next/image';

export default function Card4 (){
    return (
        <div className="min-h-screen bg-white relative overflow-hidden ">
            <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
                <div className="flex items-center justify-between max-w-6xl w-full gap-64">
   
                    <div className="flex-1 flex justify-center relative">
                        <div className="absolute inset-0 -z-1000 bg-cover bg-center -mt-15"> 
                            <Image
                                src="./Background-page.svg"
                                alt="Background Image"
                                width={1700}
                                height={1700}
                            />
                        </div>
                        <div className="w-[500px] h-[500px] rounded-full overflow-hidden shadow-2xl border-8 border-white">
                            <img 
                                src="/judo-pilates.svg"
                                className="w-full h-full object-cover"
                            />
                        </div> 
                    </div>

                    <div className="flex-1 max-w-md">
                        <p className="font-semibold text-sm mb-2">
                        Bem estar físico e mental
                        </p>
                        
                        <h1 className="text-6xl font-bold text-red-500 mb-6">
                            Judo e pilates
                        </h1>
                        
                        <p className="font-semibold text-base leading-relaxed mb-8">
                        Em 2024, o Projeto Transformação expandiu suas atividades! Além do Jiu-Jitsu, agora oferece aulas de Judô, em parceria com o Instituto Tiago Camilo, e Pilates.
                        </p>
    
                    </div>
                </div>
            </div>
        </div>
    );
}