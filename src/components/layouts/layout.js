
import { useDispatch, useSelector} from "react-redux"
import Menu from "../burgerMenu/menu";
import { useRef} from 'react';

import {
    useOnClickOutside
} from '../hooks/hooks';
import {actionClickBurger} from "../../redux/actions/actions";



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






            
        </>
    );
};

export default Layout;
