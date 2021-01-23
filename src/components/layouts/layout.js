import Head from 'next/head'
import {StyledLeftComment} from "../leftComment/leftComment"
import { useDispatch, useSelector} from "react-redux"
import Menu from "../burgerMenu/menu";
import {useEffect, useRef} from 'react';

import {
    useOnClickOutside,
    WindowDimensionsOffVisuallyImpaired
} from '../hooks/hooks';
import {actionClickBurger, OnchangeInputSearchNews} from "../../redux/actions/actions";

import {PageFooter} from "../footer/footer";
import {StyledRegisterZNO} from "../leftComment/registerOnZNO";
import {Element} from "react-scroll";


import NewsWrapper from "../news/newsWrapper";
import StyledLoader from "../loader/loader";
import {LoaderContainer} from "../../../pages/calendar";
import { NewsLsi} from "../../Lsi/lsi";
import {useRouter} from "next/router";
import {Container} from "../../../pages/news";
import {RouterLink} from "../routerLink/routerLink";
import { Modal } from "../modal/modal";
import {BubbleBg} from "../bubbleBg/bubbleBg";



export  const Layout = ({showLinks,databaseId,contacts,menu,hideLeftComponent,children , header,showZNORegister}) => {
    const {visuallyImpairedMode} = useSelector(state=>state.app)
    const router = useRouter()
    const locale = router.locale
    const pathname = router.pathname
    const dispatch = useDispatch()
    const {visuallyImpairedModeWhiteTheme} = useSelector(state=>state.app)
    const {loading} = useSelector(state=>state.app)
    const {inputNewsByTitle} = useSelector(state=>state.news)
    const {newsByTitle} = useSelector(state=>state.news)
    const {fontSize} = useSelector(state=>state.app)

    const node = useRef();
    const {menuBurgerIsOpen} = useSelector(state=>state.app)
    useOnClickOutside(node,  () => menuBurgerIsOpen === true  &&  dispatch(actionClickBurger()));

    WindowDimensionsOffVisuallyImpaired()
    useEffect(()=>{
        dispatch(OnchangeInputSearchNews(''))
    },[pathname])

    return (
        <>
            {showLinks && <RouterLink/>}
            {!visuallyImpairedMode && <BubbleBg/>}
            {children}
</>)
};

export default Layout;
