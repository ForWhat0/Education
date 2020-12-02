import {  getProjects } from "../types/types"


const initialState={
    projectsReducer:null
}

export const projectReducer = ( state = initialState , action )=>{
    switch (action.type){
        case getProjects:{
            console.log('here',action.payload)
            return {
                ...state,
                projectsReducer:action.payload
            }
        }

        default: return state
    }
}