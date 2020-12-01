import {  getProjects } from "../types/types"


const initialState={
    projects:[],
    variables:{
        first: 10,
        last: null,
        after: null,
        before: null
    }
}

export const projectReducer = ( state = initialState , action )=>{
    switch (action.type){
        case getProjects:{
            return {
                ...state,
                projects:action.payload
            }
        }

        default: return state
    }
}