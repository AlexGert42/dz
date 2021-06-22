import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {ButtonGroup, Paper, Typography} from "@material-ui/core";

const style: any = {
    clockContainer: {
        width: '300px',
        minHeight: '220px',
        margin: '20px 0',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    time: {
        cursor: 'pointer'
    },
    date: {
        textAlign: 'center'
    }
}

function Clock() {

    const [timerId, setTimerId] = useState<any>(0)
    const [date, setDate] = useState<string>(
        `Текущее время:
        ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
        `
    )
    const [show, setShow] = useState<boolean>(false)

    const stop = () => clearInterval(timerId)

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(
                `Текущее время:
        ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
        `
            )
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date // fix with date
    const stringDate = new Date().toString() // fix with date

    return (
        <Paper elevation={5} style={style.clockContainer}>
            <Typography
                style={style.time}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </Typography>

            {show && (
                <Typography style={style.date}>
                    {stringDate}
                </Typography>
            )}
            <ButtonGroup>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </ButtonGroup>
        </Paper>
    )
}

export default Clock
