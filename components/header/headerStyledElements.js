import styled from 'styled-components'
import React from "react";
import Link from "next/link";
import {StyledButton} from "../button/button";
import {ChangeLanguageSelector} from './changeLanguageSelector'

export const HeaderWrapper = styled.header`
    justify-content: flex-start;
    display: flex;
    position: relative;
    width: 100%;
    justify-content: center;
    flex: 1;
  height:468px;
  min-height: 105px;
  background-image: url(https://epo.org.ua/wp-content/uploads/2020/11/diia_gradient_03.png);
  background-size: cover;
  background-position: center;
  overflow: hidden;
`
 const Nav = styled.nav`
  width:100%;
  display:flex;
     justify-content: space-between;
    margin: 0px;
    padding: 24px 0px 5px 30px;
}
  align-items: center;
`
export const WrapperInner = styled.div`
  width:80%;
  position: absolute;
`
 const ALink = styled.a`
  color: #1D1D1B;
  font-size: 16px;
  line-height: 15px;
      margin-right: 40px;
    list-style: none;
    text-decoration: none;
    display: inline;
`
 const Links = styled.a`
  width: 60%;
`
 const SignIn = styled.a`

`

 const Logo =({src,height,width,right,color,radius,padding,left})=>{
    return <LogoImg height={height} width={width} left={left} right={right} color={color} radius={radius} padding={padding} src={src}/>
}
const MainContent = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
`
const Logos = styled.div`
  display:flex;
`
const LogoImg = styled.img`
  max-height:${props => props.height};
  margin-right:${props => props.right};
  margin-left:${props => props.left};
  max-width:${props => props.width};
  width:auto;
  background-color:${props => props.color};
  border-radius: ${props => props.radius};
  padding: ${props => props.padding};
`
const Title = styled.h1`
height: 42px;
margin-top:45px;
margin-bottom:20px;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 15px;
color: #1D1D1B;
display:flex;
align-items:center;
`
const Subtitle = styled.span`
    font-size: 16px;
    font-weight: 500;
`

export const NavBar =({language,navButtons,register,logIn})=>{
    return (
        <Nav>
            <Links>
                {navButtons.map(button=>
                    <Link href={button.href}>
                        <ALink>
                            {button[language]}
                        </ALink>
                    </Link>
                )}
            </Links>
            <SignIn>
                <Link href='/register'>
                    <ALink>
                        {register[language]}
                    </ALink>
                </Link>
                <StyledButton func={null} text={logIn[language]} />
            </SignIn>
        </Nav>
    )
}

export const Main =({logo1,logo2,title,subtitle})=>{
    return (
        <MainContent>
            <Logos>
                <Logo width='136px' color='unset' padding='unset' right='10px' radius='unset' height='50px' src={logo1}/>
                <Logo width='136px' color='unset' padding='unset' right='10px' radius='unset' height='50px' src={logo2}/>
            </Logos>
            <Title>
                {title}
            </Title>
            <Subtitle>
                {subtitle}
            </Subtitle>
        </MainContent>
    )
}
const SearchBar = styled.span`
 position: relative;
 width:80%;
`
const Icon = styled.i`
   position: absolute; 
  top:15px;!important;
  right: 20px; 
  z-index: 1; 
  font-size:20px;
`
const Input = styled.input.attrs(props => ({
    type: "text",
    name:props.name,
    onChange:props.func,
    placeholderTextColor: "red",
    placeholder :props.inputPlaceholder,
}))`
&.hasFocus:focus
font-family: 'Roboto', sans-serif;
  color: #333;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  border: 1 px solid green;
  width: 100%;
  background: #FFFFFF;
border-radius: 28px;

`;
const FooterContainer = styled.div`
display:flex;
align-items: center;
margin-top:40px;
`

const ChangeLanguageContainer = styled.div`
display:flex;
align-items: center;
`

export const Footer =({inputName,inputFunc,inputPlaceholder})=>{
    return (
        <FooterContainer>
            <Logos>
                <Logo
                    width='30px'
                    height='30px'
                    right='20px'
                    color='#ffffffff'
                    padding='3px'
                    radius='30px'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png'/>
                <Logo
                    width='30px'
                    height='30px'
                    right='20px'
                    color='#ffffffff'
                    padding='3px'
                    radius='30px'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png'/>
                <Logo
                    width='30px'
                    height='30px'
                    right='20px'
                    color='#ffffffff'
                    radius='30px'
                    padding='3px'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png'/>
            </Logos>

            <SearchBar>
            <Icon className="fa fa-search" aria-hidden="true"/>
            <Input name={inputName} func={inputFunc}  inputPlaceholder={inputPlaceholder}/>
            </SearchBar>

            <ChangeLanguageContainer>
                <Logo
                    width='30px'
                    left='30px'
                    height='30px'
                    padding='3px'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png'/>
                <ChangeLanguageSelector/>
                <Logo
                    width='30px'
                    left='20px'
                    height='30px'
                    padding='3px'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png'/>
            </ChangeLanguageContainer>
        </FooterContainer>
    )
}
