import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

const style: any = {
    container: {
        padding: '20px 0'
    },
    block: {
        margin: '20px'
    },
    select: {
        width: '150px'
    },
    radio: {

    }
}

const arr = ['x', 'y', 'z']



function HW7() {
    const [value, onChangeOption] = useState(arr[1])
    return (
        <div style={style.container}>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div style={style.block}>
                <SuperSelect
                    style={style.select}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <div style={style.block}>
                <SuperRadio
                    style={style.radio}
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
