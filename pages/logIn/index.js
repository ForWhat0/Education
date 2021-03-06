import styled from 'styled-components'
import client from "../../src/apollo/client"
import GET_PAGE_TITLE_AND_FAVICON from "../../src/queries/get_page_title_and_favicon"
import {LogInLsi} from "../../src/Lsi/lsi"
import {InputStyled} from "../../src/components/input/input"
import {StyledButton} from "../../src/components/button/button"
import Link from "next/link"
import LogInRegisterLayout from "../../src/components/layouts/lognIn_register_layout"

export const LogInRegisterFooter = styled.div`
align-items:center;
margin-top:30px;
display:flex;
flex-wrap: wrap;
justify-content: center;
position:relative;
`

export default function LogIn ({locale,siteInfo,title}){
    return(
        <LogInRegisterLayout locale={locale} siteInfo={siteInfo} title={title}>
                    <InputStyled background='transparent' text={LogInLsi.login[locale]}/>
                    <InputStyled background='transparent' text={LogInLsi.password[locale]} />
                    <LogInRegisterFooter>

                        <Link href='/register'>
                            <a style={{margin: '10px'}}>
                                <span>{LogInLsi.register[locale]}</span>
                            </a>
                        </Link>

                        <div style={{margin:'10px'}}>
                            <StyledButton  text={LogInLsi.logIn[locale]} />
                        </div>

                    </LogInRegisterFooter>
            </LogInRegisterLayout>
    )
}
export async function getStaticProps({locale} ){

    const uri = locale === "EN" ? "/en/glavnaya-english/" : locale === "RU" ? "/ru/glavnaya-2/"  : "/"
    const contactsUri = locale === "EN" ? "/en/contacts/" : locale === "RU" ? "/ru/kontakty/"  : "/kontakti/"

    const { data } = await client.query( {
        query: GET_PAGE_TITLE_AND_FAVICON,
        variables: {
            uri,
            contactsUri
        }
    } )


    return {
        props: {
            locale,
            siteInfo:data?.contacts?.contactsFields ? data.contacts.contactsFields : [],
            title: data?.page?.mainPageFields?.titleBanner ? data.page.mainPageFields.titleBanner  : []
        },
        revalidate: 1
    }
}