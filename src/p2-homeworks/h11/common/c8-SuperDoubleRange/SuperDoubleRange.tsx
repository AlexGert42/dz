import React, {ChangeEvent} from 'react'
import {DefaultInputPropsType} from "../c7-SuperRange/SuperRange";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number],
    // min, max, step, disable, ...


}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {

        onChangeRange, value,
        // min, max, step, disable, ...
        ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки


    const onChangeCallback_1 = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange && onChangeRange([+e.currentTarget.value, value[1]])
    }

    const onChangeCallback_2 = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange && onChangeRange([value[0], +e.currentTarget.value])
    }


    console.log('rgff', value)
    return (
        <>
            DoubleRange

            <input
                type={'range'}
                onChange={onChangeCallback_1}
                // className={finalRangeClassName}
                value={value[0]}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <input
                type={'range'}
                onChange={onChangeCallback_2}
                // className={finalRangeClassName}
                value={value[1]}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </>
    )
}

export default SuperDoubleRange
