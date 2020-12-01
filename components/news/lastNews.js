import React from 'react'
import {TitleForComponent} from "../titleForComponent/title";
import {NewsLsi} from "../../Lsi/lsi"
import Project from "../project/project"
import styled from 'styled-components'
import {StyledButton} from '../button/button'
import News from "./news";

const {lastNews,review,button} = NewsLsi

const NewsContainer = styled.div`
position:relative;
width:80%;
margin-left:10%;
                    display: flex;
                    flex-wrap: wrap;
        
`
const StyledContainer = styled.div`
 display:flex;
 cursor:pointer;
 flex: 1 1 301px;
 flex-direction: column;
 overflow: hidden;
 margin: 0 0 40px;
 padding: 0 20px 40px;
 min-height: 250px;
 border-bottom: 1px solid #e9eef1;
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
export default function LastNews({language,posts}){
    return(
        <section>
                <TitleForComponent text={lastNews[language]} fontSize='40px' />
                <NewsContainer>
                    {posts.map(({node},i) => (
                        <StyledContainer>
                            <News
                                size='sd'
                                key={node.slug}
                                title={node.title}
                                coverImage={node.featuredImage?.node}
                                date={node.date}
                                slug={node.slug}
                                excerpt={node.excerpt}
                                textForIcon={review[language]}
                            />
                        </StyledContainer>
                    ))}
                </NewsContainer>
            <ButtonContainer>
                <StyledButton text={button[language]}/>
            </ButtonContainer>
        </section>
    )
}