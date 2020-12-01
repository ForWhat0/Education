import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
font-size:${props => props.fontSize};
font-weight:400;
`
const TitleContainer = styled.div`
margin-left: 10%;
padding: 20px;
`
export const TitleForComponent=({text,fontSize})=>{
    return(
        <TitleContainer>
        <Title fontSize={fontSize}>
            {text}
        </Title>
        </TitleContainer>
    )
}