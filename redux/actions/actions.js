import {hideLoader, showLoader, showAlert, hideAlert, changeLanguage, getProjects} from '../types/types'
import {getAllProjects} from "../../lib/api";

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

