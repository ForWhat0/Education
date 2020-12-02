import React from 'react'
import {TitleForComponent} from "../titleForComponent/title";
import {NewsLsi} from "../../Lsi/lsi"
import styled from 'styled-components'
import {StyledButton} from '../button/button'
import Icon from "../icon/icon";
import {useDispatch, useSelector} from "react-redux";
import {actionGetNews} from "../../redux/actions/actions";
import Link from 'next/link'
import NewsWrapper from "./newsWrapper";


const {lastNews,button} = NewsLsi

export const Container = styled.div`
position:relative;
width:80%;
margin-left:10%;      
`
const Header = styled.div`
display:flex;
align-items:center;    
`
export const IconContainer = styled.button`
margin-left:40px;  
cursor:pointer;
opacity:${props => props.opacity};
`
const Arrows = styled.div`
position:absolute;
display:flex;
flex-direction:row;
right:0;    
`
const ButtonContainer = styled.div`
width:100%;
margin-top:40px;
display:flex;
justify-content:center;
`
export default function LastNews({language,posts,pageInfo}){
    console.log(pageInfo)
    const {loading} = useSelector(state=>state.app)
    const dispatch = useDispatch()
    const nextNews=()=>{
        const newsVariables = {
            first: 3,
            last: null,
            after: pageInfo.endCursor || null,
            before: null
        }
        dispatch(actionGetNews(newsVariables))
    }
    const prevNews=()=>{
        const newsVariables = {
            first: null,
            after: null,
            last: 3,
            before: pageInfo ? pageInfo.startCursor : null
        }
        dispatch(actionGetNews(newsVariables))
    }
    return(
        <section>
            <Container>
                <Header>
                    <TitleForComponent text={lastNews[language]} fontSize='40px' />
                    <Arrows>
                        <IconContainer opacity={loading || !pageInfo.hasPreviousPage ? '0.5' : 'unset'} disabled={loading && !pageInfo.hasPreviousPage} onClick={()=>prevNews()}>
                            <Icon width='40px' height='30px' alt='prev' src='/left.png'/>
                        </IconContainer>
                        <IconContainer opacity={loading || !pageInfo.hasNextPage ? '0.5' : 'unset'} disabled={loading && !pageInfo.hasNextPage} onClick={()=>nextNews()}>
                            <Icon width='40px' height='30px' alt='next' src='/right.png'/>
                        </IconContainer>
                    </Arrows>
                </Header>
                <NewsWrapper posts={posts}/>
                <ButtonContainer>
                    <Link href={'/news'}>
                        <a>
                            <StyledButton
                                func={()=> {
                                return null }}
                                text={button[language]}/>
                        </a>
                    </Link>
                </ButtonContainer>
            </Container>
        </section>
    )
}