import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import {AbTag, AbTagProps} from '../src/components/AbTag'


export default {
    title: 'Components/AbTag',
    component: AbTag

} as ComponentMeta <typeof AbTag>

const Template: ComponentStory<typeof AbTag> = (args) => <AbTag {...args}/>

export const Primario = Template.bind({})

Primario.args = {
    text: 'Tag'
} as AbTagProps

