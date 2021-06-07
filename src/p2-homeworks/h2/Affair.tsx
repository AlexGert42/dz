import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.scss'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (value: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)
    return (
        <div>
            {props.affair.name}
            <button className={style.affair__btn_close} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
