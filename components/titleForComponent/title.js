import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
font-size:${props => props.fontSize};
font-weight:400;
`

export const TitleForComponent=({text,fontSize})=>{
    return(
        <Title fontSize={fontSize}>
            {text}
        </Title>
    )
}