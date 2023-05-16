import React, {useState} from "react";
import Button from "./Button";
import b from "./Button.module.css"
import s from "./Counter.module.css"
import {useDispatch} from "react-redux";
import {setIncrementAC, setResetAC} from "../Redux/CountReducer";

type CounterPropsType = {
    max: number
    min: number
    value: number
}

const Counter = (props: CounterPropsType) => {
    const dispatch = useDispatch()

    const increase = () => {
        dispatch(setIncrementAC())
    }

    const reset = () => {
        dispatch(setResetAC())
    }

    const isMaxValue = props.value === props.max
    const isMinValue = props.value === props.min

    return (
        <div className={s.wrapper}>

            <div className={s.value}>
                <span className={isMaxValue ? s.text_value_max : ""}>{props.value}</span>
            </div>

            <div className={b.button_wrapper}>
                <Button title="inc" handleClick={increase} disabled={isMaxValue}/>
                <Button title="reset" handleClick={reset} disabled={isMinValue}/>
            </div>

        </div>
    )
}

export default Counter