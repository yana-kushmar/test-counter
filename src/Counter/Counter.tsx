import React, {useState} from "react";
import Button from "./Button";
import b from "./Button.module.css"
import s from "./Counter.module.css"

type CounterPropsType = {
    max: number
    min: number
}

const Counter = (props: CounterPropsType) => {
    const [value, setValue] = useState(props.min)


      const increase = () => {

        const nextValue = value + 1

        if (nextValue <= props.max) {
            setValue(nextValue)
        }
    }

    const reset = () => {
        setValue(props.min)
    }

    const isMaxValue = value === props.max
    const isMinValue = value === props.min

    return (
        <div className={s.wrapper}>

            <div className={s.value}>
            <span className={isMaxValue ? s.text_value_max : ""}>{value}</span>
            </div>

            <div className={b.button_wrapper}>
            <Button title="inc" handleClick={increase} disabled={isMaxValue}/>
            <Button title="reset" handleClick={reset} disabled={isMinValue}/>
            </div>

        </div>
    )
}

export default Counter