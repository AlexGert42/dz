import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {Radio} from "@material-ui/core";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: any) => {
        if (onChangeOption) {
            onChangeOption(e.target.value)
        }
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>
            <Radio
                checked={o === value ? true : false}
                value={o}
                onChange={onChangeCallback}
                name={o}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
