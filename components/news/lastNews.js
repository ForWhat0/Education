import React from 'react'
import {TitleForComponent} from "../titleForComponent/title";
import {NewsLsi} from "../../Lsi/lsi"
import styled from 'styled-components'
import {StyledButton} from '../button/button'
import News from "./news";
import Icon from "../icon/icon";
import {useDispatch, useSelector} from "react-redux";
import {actionGetNews} from "../../redux/actions/actions";
import StyledLoader from "../loader/loader";
import Link from "next";

const {lastNews,review,button} = NewsLsi

const Container = styled.div`
position:relative;
width:80%;
margin-left:10%;      
`
const Header = styled.div`
display:flex;
align-items:center;    
`
const IconContainer = styled.button`
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
const NewsContainer = styled.div`
margin-top:40px;
display: flex;
flex-wrap: wrap;
        
`
const StyledContainer = styled.div`
 display:flex;
 justify-content: center;
 cursor:pointer;
 flex: 1 1 301px;
 flex-direction: column;
 overflow: hidden;
 margin: 0 0 40px;
 padding: 0 20px 40px;
 min-height: 250px;
 background-size: cover;
  transition: transform .2s linear;
    &:hover  {
    transform: scale(1.01);
  }
 @media (max-width: 768px) {
   flex: 1 1 301px;
    flex-direction: column;
    padding-bottom: 40px;
    border-top: 0;
  }
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
                <NewsContainer>
                    {posts.map(({node},i) => (
                        <StyledContainer>
                            {
                                loading ?
                            <StyledLoader/>:
                                    <News
                                        key={node.slug}
                                        title={node.title}
                                        coverImage={node.featuredImage?.node}
                                        date={node.date}
                                        slug={node.slug}
                                        excerpt={node.excerpt}
                                        textForIcon={review[language]}
                                    />
                            }
                        </StyledContainer>
                    ))}
                </NewsContainer>
                <ButtonContainer>
                    <Link href={'/news'}>
                        <a>
                            <StyledButton text={button[language]}/>
                        </a>
                    </Link>
                </ButtonContainer>
            </Container>
        </section>
    )
}