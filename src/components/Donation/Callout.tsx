import { HandHeartIcon, HandshakeIcon } from 'lucide-react'
import React from 'react'

function Callout() {
  return (
    <div id="info-container" className="w-3/4 grid grid-cols-2 gap-2 my-4">
          <div className="flex flex-row gap-4">
            <HandshakeIcon size={96} absoluteStrokeWidth strokeWidth={3} />
            <div className="">
              <h3 className="uppercase font-bold text-lg">
                Junte-se à Transformação
              </h3>
              Apoie mensalmente com um valor fixo de sua escolha!
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <HandHeartIcon size={96} absoluteStrokeWidth strokeWidth={3} />
            <div className="">
              <h3 className="uppercase font-bold text-lg">
                Faça uma doação única
              </h3>
              Apoie mensalmente com um valor fixo de sua escolha!
              <br />
              Ou doe por meio de <strong>transferência bancária</strong>{" "}
              <span className="text-orange-400">entrando em contato</span>{" "}
              conosco.
            </div>
          </div>
        </div>  )
}

export default Callout