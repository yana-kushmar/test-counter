import React, {useState} from 'react';

import './App.css';
import Counter from "./Counter/Counter";
import SettingCounter from "./SettingsCounter/SettingCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/Store";
import {setMaxValueAC, setMinValueAC} from "./Redux/CountReducer";


function App() {
    const dispatch = useDispatch()
    const {max, min, value} = useSelector<AppRootStateType, any>(store => store.count)

    const [maxValue, setMaxValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)


    const onClick = () => {
        dispatch(setMaxValueAC(maxValue))
        dispatch(setMinValueAC(minValue))


    }


    return (
        <div className="App">
            <SettingCounter
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                minValue={minValue}
                setMinValue={setMinValue}
                onClick={onClick}
            />
            <Counter
                max={max}
                min={min}
            value={value}
            />


        </div>
    );
}

export default App;
