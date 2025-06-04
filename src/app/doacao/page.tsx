import React from 'react'
import { HandshakeIcon, HandHeartIcon } from 'lucide-react'
import DonationSelector from '@/components/ui/DonationSelector'

function Doacao() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-6">
            <h1 className="text-4xl font-bold mb-4 py-6">Sua contribuição faz toda a diferença!</h1>

            <div id="info-container" className="w-3/4 grid grid-cols-2 gap-2 my-4">
                <div className="flex flex-row gap-4">
                    <HandshakeIcon />
                    <div className="">
                        <h3 className="uppercase font-bold text-lg">Junte-se à Transformação</h3>
                        Apoie mensalmente com um valor fixo de sua escolha!
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <HandHeartIcon />
                    <div className="">
                        <h3 className="uppercase font-bold text-lg">Faça uma doação única</h3>
                        Apoie mensalmente com um valor fixo de sua escolha!<br />
                        Ou doe por meio de <strong>transferência bancária</strong> <span className="text-orange-400">entrando em contato</span> conosco.
                    </div>
                </div>
            </div>

            <div id="donation-container" className="grid grid-cols-3 gap-2 grid-rows-1 w-4/5 min-h-12">
                <div className="min-h-48 py-4 bg-card flex items-center justify-center flex-col"> 
                    <h3 className='text-left w-3/4'>Escolha o valor de doação:</h3>
                    <DonationSelector />
                </div>
                <div className="min-h-48 py-4 bg-card">Ótimo! Agora, basta preencher  seus dados e finalizar.</div>
                <div className="min-h-48 py-4 bg-card">Doação Selecionada:</div>
            </div>

            <a href="https://example.com/donate" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Faça sua doação
            </a>
        </div>
    </main>
  )
}

export default Doacao