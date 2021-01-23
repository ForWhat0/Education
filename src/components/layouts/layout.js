
import { useDispatch, useSelector} from "react-redux"
import Menu from "../burgerMenu/menu";
import { useRef} from 'react';

import {
    useOnClickOutside
} from '../hooks/hooks';
import {actionClickBurger} from "../../redux/actions/actions";





import {useRouter} from "next/router";

import {RouterLink} from "../routerLink/routerLink";
import { Modal } from "../modal/modal";
import {BubbleBg} from "../bubbleBg/bubbleBg";



export  const Layout = ({showLinks,menu, header}) => {
    const {visuallyImpairedMode} = useSelector(state=>state.app)
   

    const dispatch = useDispatch()
    const {visuallyImpairedModeWhiteTheme} = useSelector(state=>state.app)

    const {fontSize} = useSelector(state=>state.app)

    const node = useRef();
    const {menuBurgerIsOpen} = useSelector(state=>state.app)
    useOnClickOutside(node,  () => menuBurgerIsOpen === true  &&  dispatch(actionClickBurger()));



    return (
        <>


            <Modal/>

                <div  ref={node}>
                    {header}
                    <Menu menu={menu}/>
                </div>
            {
                !visuallyImpairedMode && <BubbleBg/>
            }
            {
                showLinks && <RouterLink/>
            }






            <style jsx global>{`
        body {
             color:${!visuallyImpairedModeWhiteTheme && 'white'};
             background:${!visuallyImpairedModeWhiteTheme && '#1D1D1B'};
        }
        h1 {
          font-size: ${fontSize === 'medium' ? '42px' : fontSize === 'large' ? '44px' : 'off'};
        }
         div,span,ul,li,a,label,p {
          font-size: ${fontSize === 'medium' ? '17px' : fontSize === 'large' ? '18px' : 'off'};
        }
      `}</style>
        </>
    );
};

export default Layout;
