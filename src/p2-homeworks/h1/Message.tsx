import React from 'react'
import style from './Message.module.css'

type PropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}


function Message({avatar, name, message, time}: PropsType) {
    return (
        <div className={style.message}>
            <div className={style.message__inner}>
                <img className={style.message__avatar} src={avatar} alt="avatar"/>
                <div className={style.message__content}>
                    <h2 className={style.message__title}>{name}</h2>
                    <div className={style.message__text}>{message} <span className={style.message__time}>{time}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Message
