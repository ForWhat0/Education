import React, {useEffect} from 'react'
import {MainLayout} from '../../components/MainLayout'
import {useRouter} from 'next/router'
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

import {getNewsByIdAPI, getNewsForHome} from "../../lib/api";
import StyledLoader from "../../components/loader/loader";
import LastNews, {Container} from "../../components/news/lastNews";
import {NewsLsi} from "../../Lsi/lsi";;
import PostBody from "../../components/post-body";
import {TitleForComponent} from "../../components/titleForComponent/title";
import Date from "../../components/date/date";
import {actionGetNews, actionGetNewsById} from "../../redux/actions/actions";


const {otherNews} = NewsLsi
const LoaderContainer = styled.div`
                width: 100%;
                display:flex;
                justify-content: center;
                margin-top: 70px;
                margin-bottom: 70px;
`

export default function NewsByID({ initialNews ,initialLastNews}) {
    const {loading} = useSelector(state=>state.app)
    const {extraLoading} = useSelector(state=>state.app)
    const router = useRouter()
    const id = router.query.databaseId
    const dispatch = useDispatch()
    const {language} = useSelector(state=>state.app)
    const {newsReducer} = useSelector(state=>state.news)
    const {newsByID} = useSelector(state=>state.news)
    useEffect(() => {
        async function load_SPA_data() {
            const newsVariables = {
                first: 3,
                last: null,
                after: null,
                before: null
            }
            dispatch(actionGetNews(newsVariables))
            dispatch(actionGetNewsById(id))
        }
        async function load_newsId_SPA_data() {
            dispatch(actionGetNewsById(id))
        }
        if (!initialNews && !initialLastNews && !newsReducer) {
            load_SPA_data()
        }
        else if (!initialNews && !initialLastNews && newsReducer){
            load_newsId_SPA_data()
        }
    }, [id])
    const getNewsForRender=(singleNews,lastNews)=>{
        return (
            <>
                <Container>
                    {
                        extraLoading || loading ?
                            <LoaderContainer>
                                <StyledLoader/>
                            </LoaderContainer>
                            :
                            <>
                                <TitleForComponent marginBottom='40px' text={singleNews.title} fontSize='40px'/>
                                <Date date={singleNews.date}/>
                                <PostBody content={singleNews.content} />
                                </>
                    }
                        </Container>
                <LastNews background='rgba(157, 157, 157, 0.08);'
                          title={otherNews[language]}
                          posts={lastNews.edges}
                          pageInfo={lastNews.pageInfo}
                          language={language}
                          buttonHide={true}
                />
            </>
        )
    }

    const renderNews=()=>{
        if (initialNews && initialLastNews) {
            return getNewsForRender(initialNews,initialLastNews)
        }
        else if (newsByID && newsReducer){
            return getNewsForRender(newsByID,newsReducer)
        }
    }

    return(
        <MainLayout>
            {renderNews()}
        </MainLayout>
    )
}


NewsByID.getInitialProps = async ({ query, req }) => {
    if (!req) {
        return {initialNews: null , initialLastNews:null}
    }

    const initialNews = await getNewsByIdAPI(query.databaseId)
    const newsVariables = {
        first: 3,
        last: null,
        after: null,
        before: null
    }
    const initialLastNews = await getNewsForHome(newsVariables)
    return {
        initialNews,
        initialLastNews
    }
}
