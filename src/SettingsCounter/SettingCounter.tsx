import React, {useState} from 'react';
import Input from "./Input";
import Button from "../Counter/Button";
import s from "../Counter/Counter.module.css"

type SettingCounterPropsType ={
    minValue: number
    maxValue: number
    setMaxValue: (n: number) => void
    setMinValue: (n: number) => void
    onClick: () => void

}

const SettingCounter = (props: SettingCounterPropsType) => {


    const disabled = props.minValue > props.maxValue
        || props.minValue === props.maxValue
        || props.minValue < 0
        || props.maxValue < 0;



    return (
        <div className={s.wrapper}>
            <Input title="max value"
                   value={props.maxValue}
                   setValue={props.setMaxValue}/>
            <Input
                title="start value"
                value={props.minValue}
                setValue={props.setMinValue}
            />
            <Button title="set" disabled={disabled} handleClick={props.onClick}/>

        </div>
    );
};

export default SettingCounter;