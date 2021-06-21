import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {MenuItem, Select, InputLabel} from "@material-ui/core";
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>






type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}


const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        style,
        value,
        options,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: any) => {

        if (onChangeOption) {
            onChangeOption(e.target.value)
        }
    }

    return (
        <>
            <InputLabel id="demo-simple-select-outlined-label">Select</InputLabel>
            <Select
                style={style}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Select"
                onChange={onChangeCallback}
                value={value}
            >
                {!options ? null : options.map((el, i)=> {
                    return (
                        <MenuItem key={i} value={el}>{el}</MenuItem>
                    )
                })}
            </Select>
        </>
    )
}

export default SuperSelect
