import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}


export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export * from './components/AbBotao';
export * from './components/AbGrupoOpcoes';
export * from './components/AbTag';
export * from './components/AbCampoTexto';
export * from './components/AbInputQuantidade'

