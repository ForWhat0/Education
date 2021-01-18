import {useSelector} from "react-redux";
import {events} from "../../Lsi/lsi"
import styled from 'styled-components'
import {StyledButton} from '../button/button'
import {TitleForComponent} from "../titleForComponent/title";
import {device} from "../deviceSizes/deviceSizes";
import Event from "./event";
import Link from "next/link";


const ServicesContainer = styled.div`
 @media screen and (max-width:1250px) {
      grid-template-columns: 1fr;
  }
 display: grid;
 margin:${props=>props.margin};
    grid-template-columns: ${props=>props.grid};
   grid-gap: 30px;
`
const ButtonContainer = styled.div`
display:flex;
justify-content:center;
margin-top:40px;
`
const GlobalContainer = styled.div`

 @media screen and ${device.mobileL} {
 display:none;
     width: 96%;
    margin-left: 2%;
  }
   display:block;
 width: 80%;
 margin: 40px 0 40px 10%;
`
export default function Events({locale,posts,titleEvent}){
    const {visuallyImpairedMode} = useSelector(state=>state.app)
    return(
        <GlobalContainer  >
            <TitleForComponent text={titleEvent}/>
            <ServicesContainer margin={visuallyImpairedMode ? '100px 0 80px 0' : '50px 0 0 0'} grid={visuallyImpairedMode ? '1fr' : '1fr 1fr 1fr'}>
                {posts.map((node,i) =>
                    <Link key={i} href={`/calendar/date/[currentDate]`} as={`/calendar/date/${node.dateGmt.substring(0,10)}`}>
                        <a>
                           <div></div>
                        </a>
                    </Link>
                )}
            </ServicesContainer>
            <ButtonContainer>
                <Link href={`/calendar`}>
                    <a>
                        <StyledButton  text={events.calendarEvents[locale]}/>
                    </a>
                </Link>
            </ButtonContainer>
        </GlobalContainer>
    )
}