export default function Card2() {
    return (
        <div className="bg-white px-6 py-10 max-w-6xl mx-auto rounded-2xl shadow-lg mt-[60px] flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <h1 className="text-orange-500 font-bold text-4xl">
                    NOSSA<br />HISTORIA
                </h1>
                <p className="text-justify text-black font-semibold py-4">
                    O Instituto Transformação nasceu com o propósito de levar o Jiu-Jitsu e outras artes marciais à comunidade do bairro da Lagoinha, 
                    promovendo inclusão social, disciplina e crescimento pessoal. Mesmo após desafios, como a interrupção das atividades em 2011, 
                    o Instituto perseverou, encontrando novos espaços e expandindo suas modalidades para incluir Muay Thai e musculação.
                    Hoje, a iniciativa não é apenas um centro de treinamento, mas um símbolo de superação e comprometimento, formando atletas, 
                    cidadãos exemplares e inspirando toda a comunidade. Investir no esporte e na educação é investir em um futuro melhor!
                </p>
            </div>
            <div className="md:w-1/2 w-full mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-2 px-4 gap-6">
                <img src="/imgCard1.svg" alt="Card 1 Image" className="w-full h-[200px] rounded-2xl object-cover" />
                <img src="/imgCard2.svg" alt="Card 2 Image" className="w-full h-[200px] rounded-2xl object-cover" />
                <img src="/imgCard3.svg" alt="Card 3 Image" className="w-full h-[200px] rounded-2xl object-cover" />
                <img src="/imgCard4.svg" alt="Card 4 Image" className="w-full h-[200px] rounded-2xl object-cover" />
            </div>
        </div>
    );
}
