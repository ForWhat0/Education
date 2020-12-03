import React from 'react'
import Project from "./project"
import {TitleForComponent} from "../titleForComponent/title";
import styled from "styled-components";

const TitleContainer = styled.div`
margin-left: 10%;
padding: 20px;
`

export default function Projects({textForIcon,posts,title}){
    return(
      <>
          <TitleContainer>
              <TitleForComponent text={title} fontSize='40px' />
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
                  textForIcon={textForIcon}
              />
          ))}
      </>
    )
}