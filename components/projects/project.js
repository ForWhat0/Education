import styled from 'styled-components'
import React from "react";
import {TitleForComponent} from '../titleForComponent/title'
import Icon from '../icon/icon'
import Link from "next/link";
import StyledTextComponent from "../textComponent/textComponent";

const Container = styled.div`
height:288px;
background-color:${props => props.background};
width:100%;
display: flex;
justify-content: center;
margin-top:20px;
padding:20px;
overflow: hidden;
position: relative;
`
const ContainerWrapper = styled.div`
width:80%;
display:flex;
flex-direction:${props => props.flexDirection};
`
const ImageContainer = styled.div`
width: 45%;
margin-right: 5%;
display: flex;
`
const Image = styled.img`
max-height: 288px;
width:100%;
border-radius: 30px;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`
const Text = styled.div`
width:50%;
margin-right: 5%;
`

export default function Project(props) {
    return (
        <Link as={`/posts/${props.slug}`} href="/posts/[slug]">
            <a>
                <Container background={props.background}>
                    <ContainerWrapper flexDirection={props.flexDirection}>
                        <ImageContainer>
                            <Image src={props.coverImage?.sourceUrl}/>
                        </ImageContainer>
                        <Text>
                            <StyledTextComponent
                                title={props.title}
                                excerpt={props.excerpt}
                                textForIcon={props.textForIcon}
                            />
                        </Text>
                    </ContainerWrapper>
                </Container>
            </a>
        </Link>
    )
}
