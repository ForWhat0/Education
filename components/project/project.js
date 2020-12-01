import styled from 'styled-components'
import React from "react";
import {TitleForComponent} from '../titleForComponent/title'
import Icon from '../icon/icon'
import Link from "next/link";

const Container = styled.div`
height:288px;
background-color:${props => props.background};
width:100%;
display: flex;
justify-content: center;
padding: 20px;
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
const TextContent = styled.div`
    margin-top:20px;
    border-top:2px solid #1D1D1B;
    padding-top: 20px;
`
const Review = styled.div`
    display:flex;
   align-items: center;
`
const IconText = styled.div`
   margin-left:10px;
   font-weight:400;
   line-height:15px;  
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
                            <TitleForComponent text={props.title} fontSize='30px' />
                            <TextContent
                                dangerouslySetInnerHTML={{ __html: props.excerpt }}
                            />
                            <Review>
                                <Icon src='/arrow.png' alt='arrow' width='30px' height='30px'/>
                                <IconText>
                                    {props.textForIcon}
                                </IconText>
                            </Review>
                        </Text>
                    </ContainerWrapper>
                </Container>
            </a>
        </Link>
    )
}
