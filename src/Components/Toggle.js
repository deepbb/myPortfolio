import Sun from "../../src/img/sun.png"
import Moon from "../../src/img/moon.png"
import "./Toggle.css"
import { useContext } from "react"
import { ThemeContext } from "../Context"


function Toggle() {
    const theme = useContext(ThemeContext)

    const handleClick = ()=>{
        theme.dispatch({type:"TOGGLE"})
    }
    return (
            <div className="toggle">
            <img src={Sun} alt="" className="t-img" />
            <img src={Moon} alt="" className="t-img" />
             <div className="t-button" onClick={handleClick} style={{left:theme.state.darkMode ? 25 : 0}}></div>
        </div>
        
    )
}

export default Toggle
