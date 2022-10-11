import React from 'react'
import styled from 'styled-components'

export interface AbTagProps {
    texto?: string,
}

export const AbTag = ({ texto }: AbTagProps) => {
    return (
        <TagEstilizada>
            {texto}
        </TagEstilizada>
    )
}

export default AbTag

const TagEstilizada = styled.div`
    padding: 24px 32px;
    color: #FFFFFF;
    background: #EB9B00;
    font-weight: 700;
    font-size: 24px;
    display: inline-block;
    font-family: sans-serif;
`