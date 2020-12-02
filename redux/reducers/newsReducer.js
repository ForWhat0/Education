import {  getNews } from "../types/types"


const initialState={
    newsReducer:null
}

export const newsReducer = ( state = initialState , action )=>{
    switch (action.type){
        case getNews:{
            return {
                ...state,
                newsReducer:action.payload
            }
        }

        default: return state
    }
}