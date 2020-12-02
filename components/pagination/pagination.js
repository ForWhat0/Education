import React from 'react'
import { pagination} from "../../Lsi/lsi"
import styled from 'styled-components'
import Icon from "../icon/icon";
import {useDispatch, useSelector} from "react-redux";
import {actionGetNews} from "../../redux/actions/actions";

const {prevPage,nextPage} = pagination

export const Container = styled.div`
margin-top:30px;
position:relative;
width:100%;
display:flex;
flex-direction:row;
align-items:center;   
`
 const Text = styled.span`
 margin: 0 20px 0 20px;
`
const Arrows = styled.div`
position:absolute;
display:flex;
flex-direction:row;
cursor:pointer;
opacity:${props => props.opacity};
right:${props => props.right};   
left: ${props => props.left};
`

export default function Pagination({language,loading,pageInfo,action}){
    console.log(pageInfo,loading)
    const dispatch = useDispatch()
    const next=()=>{
        const variables = {
            first: 9,
            last: null,
            after: pageInfo.endCursor || null,
            before: null
        }
        dispatch(action(variables))
    }
    const prev=()=>{
        const variables = {
            first: null,
            after: null,
            last: 9,
            before: pageInfo ? pageInfo.startCursor : null
        }
        dispatch(action(variables))
    }
    return(
            <Container>
                    <Arrows
                        opacity={loading || !pageInfo.hasPreviousPage ? '0.5' : 'unset'}
                        disabled={loading && !pageInfo.hasPreviousPage}
                        onClick={()=>prev()}
                        right='unset'
                        left='0'
                    >
                            <Icon width='40px' height='30px' alt='prev' src='/left.png'/>
                            <Text>
                                {prevPage[language]}
                            </Text>
                    </Arrows>
                <Arrows
                    opacity={loading  || !pageInfo.hasNextPage ? '0.5' : 'unset'}
                    disabled={loading && !pageInfo.hasNextPage}
                    onClick={()=>next()}
                    right='0'
                    left='unset'
                >
                    <Text>
                        {nextPage[language]}
                    </Text>
                    <Icon width='40px' height='30px' alt='prev' src='/right.png'/>
                </Arrows>
            </Container>
    )
}