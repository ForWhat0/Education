import React, {useEffect} from "react";
import Head from 'next/head'
import {MainLayout} from '../components/MainLayout'
import {getNewsForHome, getProjectsAPI} from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Projects from "../components/projects/projects"
import {useSelector,useDispatch} from "react-redux";
import LastNews from "../components/news/lastNews";
import {actionGetNews, actionGetProjects} from "../redux/actions/actions";
import StyledLoader from "../components/loader/loader";
import styled from "styled-components";

const FlexContainer = styled.div`
display:flex;
align-items:center;  
justify-content:${props => props.justify};
position:relative;  
`

export default function HOME({ initialProjects,initialNews, preview }) {
  const dispatch = useDispatch()
  const {language} = useSelector(state=>state.app)
  const {newsReducer} = useSelector(state=>state.news)
  const {projectsReducer} = useSelector(state=>state.projects)
  console.log(projectsReducer)
  useEffect(() => {
    async function load_SPA_data() {
      const newsVariables = {
        first: 3,
        last: null,
        after: null,
        before: null
      }
      const projectVariables = {
        first: 6,
        last: null,
        after: null,
        before: null
      }
      dispatch(actionGetNews(newsVariables))
      dispatch(actionGetProjects(projectVariables))
    }

    if (!initialNews || !initialProjects) {
      load_SPA_data()
    }
  }, [initialNews,initialProjects])

  const  renderNews=()=>{
    if (initialNews && !newsReducer){
      return <LastNews  posts={initialNews.edges}  pageInfo={initialNews.pageInfo} language={language}/>
    }
    else if (newsReducer) {
      return <LastNews  posts={newsReducer.edges} pageInfo={newsReducer.pageInfo} language={language}/>
    }
    else {
      return <FlexContainer justify='center'><StyledLoader/></FlexContainer>
    }
  }
  const  renderProjects=()=>{
    if (initialProjects && !projectsReducer){
      return <Projects posts={initialProjects.edges} language={language}/>
    }
    else if (projectsReducer) {
      return  <Projects posts={projectsReducer.edges} language={language}/>
    }
    else {
      return <FlexContainer justify='center'><StyledLoader/></FlexContainer>
    }
  }
  return (
      <MainLayout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        {renderProjects()}
        {renderNews()}
      </MainLayout>
  )
}

HOME.getInitialProps = async ({req,preview}) => {
  if (!req) {
    return {initialNews: null}
  }
  const projectVariables = {
    first: 6,
    last: null,
    after: null,
    before: null
  }
  const initialProjects = await getProjectsAPI(projectVariables,preview)

  const newsVariables = {
    first: 3,
    last: null,
    after: null,
    before: null
  }
  const initialNews = await getNewsForHome(newsVariables,preview)

  return {
    initialProjects,
    initialNews,
    preview
  }
}

