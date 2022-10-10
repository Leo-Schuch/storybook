import React from 'react'
import styled, { css } from 'styled-components'

export interface AbBotaoProps {
  texto?: string
  tipo?: 'primario' | 'secundario'
  onClick?: () => void
}


export const AbBotao = ({ texto, onClick, tipo = 'primario' }: AbBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  )
}



const BotaoEstilizado = styled.button<AbBotaoProps>`
         background: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#EB9B00' : '#fff'};
         padding: 16px 32px;
         border: 2px solid #EB9B00;
         color: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#ffff' : '#EB9B00'};
         font-size: 20px;
         cursor: pointer;
         color: ${(props: AbBotaoProps) => props.tipo === 'primario'
          ? css`{
          background: #B87900;
           border: 2px solid #EB9B00;
        }
      `
          : css`
          &:hover{
            background: #fff;
            border: 2px solid #EB9B00;
            color: #B87900;
        }
      `
}
`



