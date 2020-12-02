import  {useEffect} from "react";
import Head from 'next/head'
import {MainLayout} from '../components/MainLayout'
import {getNewsForHome, getProjectsForHome} from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Projects from "../components/projects/projects"
import {useSelector,useDispatch} from "react-redux";
import LastNews from "../components/news/lastNews";
import {actionGetNews} from "../redux/actions/actions";

export default function HOME({ projects,initialNews, preview }) {
  const dispatch = useDispatch()
  const {language} = useSelector(state=>state.app)
  const {newsReducer} = useSelector(state=>state.news)
  useEffect(() => {
    async function load_SPA_data() {
      const newsVariables = {
        first: 3,
        last: null,
        after: null,
        before: null
      }
      dispatch(actionGetNews(newsVariables,preview))
    }

    if (!initialNews && !newsReducer.length) {
      load_SPA_data()
    }
  }, [initialNews])

  const  renderNews=()=>{
    if (initialNews && !newsReducer){
      return <LastNews  posts={initialNews.edges}  pageInfo={initialNews.pageInfo} language={language}/>
    }
    else {
      return <LastNews  posts={newsReducer.edges} pageInfo={newsReducer.pageInfo} language={language}/>
    }
  }
  return (
    <>
      <MainLayout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
          {
            projects && projects.edges.length > 0 &&
                  <Projects posts={projects.edges} language={language}/>
          }
        {renderNews()}
      </MainLayout>
    </>
  )
}

HOME.getInitialProps = async ({req,preview}) => {
  if (!req) {
    return {initialNews: null}
  }

  const projects = await getProjectsForHome(preview)

  const newsVariables = {
    first: 3,
    last: null,
    after: null,
    before: null
  }
  const initialNews = await getNewsForHome(newsVariables,preview)

  return {
    projects,
    initialNews,
    preview
  }
}

