import React from 'react'
import {TitleForComponent} from "../titleForComponent/title";
import {ProjectsLsi} from "../../Lsi/lsi"
import Project from "../project/project"
import styled from 'styled-components'
import {StyledButton} from '../button/button'

const {popularProjectsTitle,review,button} = ProjectsLsi
const TitleContainer = styled.div`
margin-left: 10%;
padding: 20px;
`
const ButtonContainer = styled.div`
width:100%;
margin-top:40px;
display:flex;
justify-content:center;
`
export default function Projects({language,posts}){
    console.log('I AM here ',posts)
    return(
        <section>
            <TitleContainer>
                <TitleForComponent text={popularProjectsTitle[language]} fontSize='40px' />
            </TitleContainer>
                {posts.map(({node},i) => (
                    <Project
                        flexDirection={i%2 ? 'row-reverse':'row'}
                        background=
                            {
                                i===0 || i === 4 ? "rgba(0, 143, 213, 0.05)" :
                                i===2 ?"rgba(255, 222, 0, 0.05)" :
                                 "#FFFFFF;"
                            }
                        key={node.slug}
                        title={node.title}
                        coverImage={node.featuredImage?.node}
                        date={node.date}
                        author={node.author?.node}
                        slug={node.slug}
                        excerpt={node.excerpt}
                        textForIcon={review[language]}
                    />
                ))}
                <ButtonContainer>
                    <StyledButton text={button[language]}/>
                </ButtonContainer>
        </section>
    )
}