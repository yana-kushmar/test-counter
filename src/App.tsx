import React, {useState} from 'react';

import './App.css';
import Counter from "./Counter/Counter";
import SettingCounter from "./SettingsCounter/SettingCounter";

function App() {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [maxNewValue, setMaxNewValue] = useState<number>(0)
    const [minNewValue, setMinNewValue] = useState<number>(0)

const onClick = () => {
    setMaxNewValue(maxValue)
    setMinNewValue(minValue)
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
            <Counter max={maxNewValue} min={minNewValue}/>


        </div>
    );
}

export default App;
