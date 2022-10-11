import React from "react";
import {ComponentMeta, ComponentStory} from '@storybook/react'
import { AbCampoTexto, AbCampoTextoProps  } from '../src/components/AbCampoTexto'
import {TipoBotao} from '../src/components/AbBotao'

export default {
    title: 'Components/AbCampoTexto',
    component: AbCampoTexto,
    argTypes: {
        label:{
            control: 'text'
        }
    },
    parameters: {actions: {argTypesRegex: '^on.*'}},

} as ComponentMeta<typeof AbCampoTexto>

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args}/>


export const AbCampoTextoComponent = Template.bind({})

AbCampoTextoComponent.args = {
    label: 'Uma label criada por LeoSchuch',
} as AbCampoTextoProps
    