import Link from 'next/link'
import React from "react";
import {HeaderWrapper,WrapperInner,Main,NavBar,Footer} from './headerStyledElements'
import {StyledButton} from '../button'
import {headerLsi} from '../../Lsi/lsi'


const {navButtons,register,logIn,title,subtitle,inputPlaceholder} = headerLsi

export default function Header({language}) {
    return (
        <HeaderWrapper>
            <WrapperInner>
                <NavBar
                    language={language}
                    navButtons={navButtons}
                    register={register}
                    logIn={logIn}
                />
                <Main
                    logo1='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png'
                    logo2='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png'
                    title={title[language]}
                    subtitle={subtitle[language]}
                />
                <Footer
                    inputName='serch'
                    inputFunc={()=>console.log('23')}
                    inputPlaceholder={inputPlaceholder[language]}
                />
            </WrapperInner>
        </HeaderWrapper>
    )
}
