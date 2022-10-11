import React from 'react'
import styled, { css } from 'styled-components'

export interface AbBotaoProps {
  texto?: string
  tipo?: TipoBotao.PRIMARIO | TipoBotao.SECUNDARIO

}

export enum TipoBotao {

  PRIMARIO,
  SECUNDARIO

}

export const AbBotao = ({ texto, tipo = TipoBotao.PRIMARIO }: AbBotaoProps) => {
  const handleClick = (type: TipoBotao.PRIMARIO | TipoBotao.SECUNDARIO) => {
    tipo = type == TipoBotao.PRIMARIO ? TipoBotao.SECUNDARIO : TipoBotao.PRIMARIO
  }

  return (
    <BotaoEstilizado onClick={_ => handleClick(tipo)} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  )
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
         background: ${(props: AbBotaoProps) => props.tipo === TipoBotao.PRIMARIO ? '#EB9B00' : '#fff'};
         padding: 16px 32px;
         border: 2px solid #EB9B00;
         color: ${(props: AbBotaoProps) => props.tipo === TipoBotao.PRIMARIO ? '#ffff' : '#EB9B00'};
         font-size: 20px;
         cursor: pointer;
         color: ${(props: AbBotaoProps) => props.tipo === TipoBotao.PRIMARIO
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



