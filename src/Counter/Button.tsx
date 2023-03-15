import React from "react";
import s from "./Button.module.css"


type ButtonPropsType = {
    title: string
    disabled: boolean
    handleClick: () => void
}



const Button = (props: ButtonPropsType) => {


    return (
        <div>
            <button className={s.button} onClick={props.handleClick} disabled={props.disabled}>{props.title}</button>
        </div>
    )
}

export default Button