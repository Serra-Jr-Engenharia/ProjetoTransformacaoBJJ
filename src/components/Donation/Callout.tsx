import { HandHeartIcon, HandshakeIcon } from 'lucide-react'
import React from 'react'

function Callout() {
  return (
    <div id="info-container" className="w-3/4 grid grid-cols-2 gap-2 my-4 max-md:grid-rows-2 max-md:grid-cols-1">
          <div className="flex flex-row gap-3 sm:gap-4 items-start">
            <div className='flex-shrink-0'>
              <HandshakeIcon size={80} className="w-12 h-12 sm:w-16 sm:h-16" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="uppercase font-bold text-base sm:text-lg mb-2">
                Junte-se à Transformação
              </h3>
              Apoie mensalmente com um valor fixo de sua escolha!
            </div>
          </div>
          <div className="flex flex-row gap-4 max-md:mt-4">
            <div className='flex-shrink-0'>
              <HandHeartIcon size={80} className='w-16 h-16 sm:w-20 sm:h-20' strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="uppercase font-bold text-base sm:text-lg mb-2">
                Faça uma doação única
              </h3>
              Apoie mensalmente com um valor fixo de sua escolha!
              <br />
              Ou doe por meio de <strong>transferência bancária</strong>{" "}
              <span className="text-orange-400">entrando em contato</span>{" "}
              conosco.
            </div>
          </div>
        </div>  
    )
}

export default Callout