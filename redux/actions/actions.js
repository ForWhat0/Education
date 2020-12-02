import {hideLoader, showLoader, showAlert, hideAlert, changeLanguage, getProjects, getNews} from '../types/types'
import {getAllProjects, getNewsForHome} from "../../lib/api";

export function actionGetProjects(
    variables,
    preview
){
    return async dispatch=>{
        try{
           const data = getAllProjects(variables,preview)
            dispatch({type:getProjects,payload:data.data})
        }
        catch (e){
            dispatch(ShowAlert(e.message,'error'))
            dispatch(HideLoader)
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

