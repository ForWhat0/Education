import {getNewsForHome, getProjectsAPI, getProjectsForHome} from "../../lib/api";
import {useDispatch, useSelector} from "react-redux";
import {TitleForComponent} from "../../components/titleForComponent/title";
import React, {useEffect} from "react";
import {actionGetNews, actionGetProjects} from "../../redux/actions/actions";
import {MainLayout} from "../../components/MainLayout";
import NewsWrapper from "../../components/news/newsWrapper";
import styled from "styled-components";
import {ProjectsLsi} from "../../Lsi/lsi";
import {Container} from '../../components/news/lastNews'
import Pagination from "../../components/pagination/pagination";
import {SearchBarStyled} from "../../components/searchBar/searchBar";
import StyledLoader from "../../components/loader/loader";
import Projects from "../../components/projects/projects";
import ProjectsWrapper from "../../components/projects/projectWrapper";

const {projects} = ProjectsLsi

const FlexContainer = styled.div`
display:flex;
align-items:center;  
justify-content:${props => props.justify};
position:relative;  
`


export default function AllProjects({initialProjects, preview }) {
    const dispatch = useDispatch()
    const {language} = useSelector(state=>state.app)
    const {loading} = useSelector(state=>state.app)
    const {projectsReducer} = useSelector(state=>state.projects)

    useEffect(() => {
        async function load_SPA_data() {
            const projectsVariables = {
                first: 5,
                last: null,
                after: null,
                before: null
            }
            dispatch(actionGetProjects(projectsVariables,preview))
        }

        if (!initialProjects ) {
            load_SPA_data()
        }
    }, [initialProjects])

    const  renderProjects=()=>{
        if (initialProjects && !projectsReducer){
            return  (
                <>
                    <Projects title={projects[language]} posts={initialProjects.edges} language={language}/>
                    <Container>
                        <Pagination
                            action={actionGetProjects}
                            loading={loading}
                            language={language}
                            pageInfo={initialProjects.pageInfo}
                        />
                    </Container>
                </>
                )
        }
        else if (projectsReducer){
            return (
                <>
                    <Projects title={projects[language]} posts={projectsReducer.edges} language={language}/>
                   <Container>
                       <Pagination
                           action={actionGetProjects}
                           loading={loading}
                           language={language}
                           pageInfo={projectsReducer.pageInfo}
                       />
                   </Container>
                </>
            )
        }
        else{
            return <FlexContainer justify='center'><StyledLoader/></FlexContainer>
        }
    }
    return (
        <MainLayout >
                {renderProjects()}
        </MainLayout>

    )
}
AllProjects.getInitialProps = async ({req,preview}) => {
    if (!req) {
        return {initialNews: null}
    }
    const projectsVariables = {
        first: 5,
        last: null,
        after: null,
        before: null
    }
    const initialProjects = await getProjectsAPI(projectsVariables,preview)

    return {
        initialProjects,
        preview
    }
}





