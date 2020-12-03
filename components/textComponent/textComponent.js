import {TitleForComponent} from "../titleForComponent/title";
import Icon from "../icon/icon";
import React from "react";
import styled from "styled-components";
import Date from "../date/date";


const TextContent = styled.div`
    margin-top:20px;
    border-top:2px solid #1D1D1B;
    padding-top: 20px;
`
const Review = styled.div`
  border-top:${props => props.border};
    display:flex;
   align-items: center;
   position:relative;
   padding-top: 20px;
}
`
const IconText = styled.div`
   margin-left:10px;
   font-weight:400;
   line-height:15px;  
`
const StyledDate = styled.div`
   position:absolute;
   right:0;
`

const StyledTextComponent =({title,excerpt,textForIcon ,date})=>{
    const border = excerpt ? 'unset' : '2px solid #1D1D1B;'
    return (
        <>
            <TitleForComponent text={title} fontSize='30px' />
            {
                excerpt &&
            <TextContent
                dangerouslySetInnerHTML={{ __html:excerpt }}
            />
            }
            <Review border={border}>
                <Icon src='/arrow.png' alt='arrow' width='30px' height='30px'/>
                <IconText>
                    {textForIcon}
                </IconText>
                {
                    date &&
                <StyledDate>
                    <Date date={date}/>
                </StyledDate>
                }
            </Review>
            </>
    )
}

export default StyledTextComponent
