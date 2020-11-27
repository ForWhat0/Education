import Head from 'next/head'
import React from "react"
import Header from './header/header'
import {useDispatch, useSelector} from "react-redux";

export function MainLayout({ preview, children }) {
    const dispatch = useDispatch()
    const {language} = useSelector(state=>state.app)
    return (
        <>
            <Head>
                <title>Posts Page | Test Blog</title>
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <main>
                <Header language={language}/>
                {children}
            </main>
        </>
    )
}