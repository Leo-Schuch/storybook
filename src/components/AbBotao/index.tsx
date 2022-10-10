import React from 'react'
import styled from 'styled-components'


       

export const AbBotao = () => {
  return (
    <BotaoEstilizado>
      Clique aqui!
    </BotaoEstilizado>
    )
}



const BotaoEstilizado = styled.button`
         background: #EB9B00;
         padding: 16px 32px;
         border: 2px solid #EB9B00;
         color: #ffff;
         font-size: 20px;
         cursor: pointer;
         &:hover{
          background: #B87900;
          border: 2px solid #EB9B00;
         }
`




