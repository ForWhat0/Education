import {getNewsForHome, getProjectsForHome} from "../../lib/api";
import {useDispatch, useSelector} from "react-redux";
import {TitleForComponent} from "../../components/titleForComponent/title";
import React, {useEffect} from "react";
import {actionGetNews} from "../../redux/actions/actions";
import {MainLayout} from "../../components/MainLayout";
import NewsWrapper from "../../components/news/newsWrapper";
import styled from "styled-components";
import {NewsLsi} from "../../Lsi/lsi";
import {Container} from '../../components/news/lastNews'
import Pagination from "../../components/pagination/pagination";
import {SearchBarStyled} from "../../components/searchBar/searchBar";
import StyledLoader from "../../components/loader/loader";


const FlexContainer = styled.div`
display:flex;
align-items:center;  
justify-content:${props => props.justify};
position:relative;  
`

export default function AllNews({initialNews, preview }) {
    const {news,search} = NewsLsi
    const dispatch = useDispatch()
    const {language} = useSelector(state=>state.app)
    const {loading} = useSelector(state=>state.app)
    const {newsReducer} = useSelector(state=>state.news)

    useEffect(() => {
        async function load_SPA_data() {
            const newsVariables = {
                first: 9,
                last: null,
                after: null,
                before: null
            }
            dispatch(actionGetNews(newsVariables,preview))
        }

        if (!initialNews ) {
            load_SPA_data()
        }
    }, [initialNews])

    const  renderNews=()=>{
        if (initialNews && !newsReducer){
            return (
                <>
                    <NewsWrapper
                        posts={initialNews.edges}
                        pageInfo={initialNews.pageInfo}
                        language={language}
                    />
                    <Pagination
                        action={actionGetNews}
                        loading={loading}
                        language={language}
                        pageInfo={initialNews.pageInfo}
                    />
                </>
            )
        }
        else if (newsReducer){
            return(
                <>
                    <NewsWrapper
                        posts={newsReducer.edges}
                        pageInfo={newsReducer.pageInfo}
                        language={language}
                    />
                    <Pagination
                        action={actionGetNews}
                        loading={loading}
                        language={language}
                        pageInfo={newsReducer.pageInfo}
                    />
                </>
                )
        }
        else{
            return <FlexContainer justify='center'><StyledLoader/></FlexContainer>
        }
    }
    return (
            <MainLayout >
                <Container>
                    <FlexContainer justify='unset'>
                        <TitleForComponent text={news[language]} fontSize='40px' />
                        <SearchBarStyled
                            position='absolute'
                            right='0'
                            border='1px solid #000000;'
                            width='30%'
                            inputFunc={()=>{return null}}
                            name={'name'}
                            inputPlaceholder={search[language]}/>
                    </FlexContainer>
                    {renderNews()}
                </Container>
            </MainLayout>

    )
}
AllNews.getInitialProps = async ({req,preview}) => {
    if (!req) {
        return {initialNews: null}
    }
    const newsVariables = {
        first: 9,
        last: null,
        after: null,
        before: null
    }
    const initialNews = await getNewsForHome(newsVariables,preview)

    return {
        initialNews,
        preview
    }
}





