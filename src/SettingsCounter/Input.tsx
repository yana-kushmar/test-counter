import React from 'react';


type InputPropsType = {
    title: string
    value: number
    setValue: (num: number) => void


}

const Input = (props: InputPropsType) => {

    return (
        <div>
                <span>
                    {props.title}
                </span>

                <input type="number"
                       onChange={event => props.setValue(+event.currentTarget.value)}
                        value={props.value}
                />


        </div>
    );
};

export default Input;