import Head from 'next/head'
import {MainLayout} from '../components/MainLayout'
import { getProjectsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Projects from "../components/projects/projects"
import {useSelector} from "react-redux";
import LastNews from "../components/news/lastNews";

export default function Index({ Projects: { edges }, preview }) {
  const {language} = useSelector(state=>state.app)
  return (
    <>
      <MainLayout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
          {
            edges.length > 0 &&
                <>
                  <Projects posts={edges} language={language}/>
                  <LastNews posts={edges} language={language}/>
                </>
          }
      </MainLayout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const Projects = await getProjectsForHome(preview)
  return {
    props: { Projects, preview },
  }
}
