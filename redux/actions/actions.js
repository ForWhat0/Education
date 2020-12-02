import {hideLoader, showLoader, showAlert, hideAlert, changeLanguage, getProjects, getNews} from '../types/types'
import {getProjectsAPI, getNewsForHome} from "../../lib/api";

export function actionGetProjects(
    projectVariables
){
    return async dispatch=>{
        try{
            dispatch(ShowLoader())
           const projects = await getProjectsAPI(projectVariables)
            dispatch({type:getProjects,payload:projects})
            dispatch(HideLoader())
        }
        catch (e){
            console.log(e.message)
        }
    }
}

export function actionGetNews(
    newsVariables
){
    return async dispatch=>{
        try{
            dispatch(ShowLoader())
            const news = await getNewsForHome(newsVariables)
            dispatch({type:getNews,payload:news})
            dispatch(HideLoader())
        }
        catch (e){
console.log(e.message)
        }
    }
}

export function ChangeLanguage(language){
    return dispatch=>{
        dispatch({
            type:changeLanguage,
            payload:{ language }
        })
    }
}

export function ShowAlert(text,type){
    return dispatch=>{
        dispatch({
            type:showAlert,
            payload:{
                text,
                type
            }
        })
        setTimeout(()=>{
            dispatch(HideAlert())
        },3000)
    }
}

function HideAlert(){
    return{
        type:hideAlert
    }
}

export function ShowLoader(){
    return{
        type:showLoader
    }
}

export function HideLoader(){
    return{
        type:hideLoader
    }
}

