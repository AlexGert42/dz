import React, {useEffect, useState} from 'react'
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import axios from "axios";
import {Paper} from '@material-ui/core';


const HW13: React.FC = () => {
    const radioArr = ['Success', 'Error']
    const [value, setValue] = useState<string>(radioArr[0])

    type responseType = {
        errorText?: string
        info?: string
        message?: string
    }

    const [response, setResponse] = useState<responseType>({})

    useEffect(() => {
        axios.post(
            'https://neko-cafe-back.herokuapp.com/auth/test',
            {success: value === 'Success' ? true : false}
        )
            .then(res => {
                console.log('Response', res)
                setResponse(res.data)
            })
            .catch(error => {
                console.log('Error', {...error})
                console.log(error.response ? error.response.data.errorText : error.message);
                setResponse(error.response.data)
            })
    }, [value])

    return (
        <div style={{padding: '30px 0'}}>
            <hr/>
            <SuperRadio
                name={'radio'}
                options={radioArr}
                value={value}
                onChangeOption={setValue}
            />
            <Paper elevation={3} style={{width: '500px', margin: '30px 0', padding: '30px'}}>
                <div>{response.errorText || response.message}</div>
                <br/>
                <hr/>
                <br/>
                <div>{response.info}</div>
            </Paper>
            <hr/>
        </div>
    )
}

export default HW13

