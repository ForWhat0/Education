import animationButton from "./animation";
import {useEffect} from "react";

export const BubbleBg = ()=>{
    useEffect(()=>{
        animationButton()
    },[])
    return(
        <div id="wrapper">
            <div id="parallax-lvl-0">
                <div id="b0-1" className="bubble size4 white">&nbsp;</div>
                <div id="b0-2" className="bubble size3 white">&nbsp;</div>
                <div id="b0-3" className="bubble size2 white">&nbsp;</div>
                <div id="b0-4" className="bubble size2 white">&nbsp;</div>
                <div id="b0-5" className="bubble size3 white">&nbsp;</div>
                <div id="b0-6" className="bubble size2 white">&nbsp;</div>

                <div id="b0-7" className="bubble size4 white">&nbsp;</div>
                <div id="b0-8" className="bubble size3 white">&nbsp;</div>
                <div id="b0-9" className="bubble size2 white">&nbsp;</div>
                <div id="b0-10" className="bubble size2 white">&nbsp;</div>
                <div id="b0-11" className="bubble size3 white">&nbsp;</div>
                <div id="b0-12" className="bubble size2 white">&nbsp;</div>
            </div>

            <div id="parallax-lvl-1">
                <div id="b1-1" className="bubble size1 blue">&nbsp;</div>
                <div id="b1-2" className="bubble size4 blue">&nbsp;</div>
                <div id="b1-3" className="bubble size4 orange">&nbsp;</div>
                <div id="b1-4" className="bubble size2 pink">&nbsp;</div>
                <div id="b1-5" className="bubble size1 green">&nbsp;</div>
                <div id="b1-6" className="bubble size2 purple">&nbsp;</div>
            </div>

            <div id="parallax-lvl-2">
                <div id="b2-1" className="bubble size2 blue">&nbsp;</div>
                <div id="b2-2" className="bubble size1 pink">&nbsp;</div>
                <div id="b2-3" className="bubble size2 green">&nbsp;</div>
                <div id="b2-4" className="bubble size2 purple">&nbsp;</div>
                <div id="b2-5" className="bubble size3 pink">&nbsp;</div>
                <div id="b2-6" className="bubble size1 orange">&nbsp;</div>
            </div>

            <div id="parallax-lvl-3">
                <div id="b3-1" className="bubble size2 green">&nbsp;</div>
                <div id="b3-2" className="bubble size2 pink">&nbsp;</div>
                <div id="b3-3" className="bubble size1 green">&nbsp;</div>
                <div id="b3-4" className="bubble size4 green">&nbsp;</div>
                <div id="b3-5" className="bubble size1 purple">&nbsp;</div>
                <div id="b3-6" className="bubble size2 blue">&nbsp;</div>
            </div>

        </div>
    )
}