import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)



    const onChangeRange = (num: number) => {
        setValue1(num)
    }
    const onChangeRangeDbl = ([num1, num2]: number[]) => {
        console.log([num1, num2])
        setValue2(num1)
        setValue2(num2)
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <div>{value1}</div><br/>
                <SuperRange
                    value={value1}
                    onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <div>{value1}</div><br/>
                <SuperDoubleRange
                    onChangeRange={onChangeRangeDbl}
                    value={[value1, value2]}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
