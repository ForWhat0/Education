
import { useSelector} from "react-redux"
import {BubbleBg} from "../bubbleBg/bubbleBg";
export  const Layout = () => {
    const {visuallyImpairedMode} = useSelector(state=>state.app)



    return (

                !visuallyImpairedMode && <BubbleBg/>

    );
};

export default Layout;
