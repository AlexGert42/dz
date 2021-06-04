import React from 'react'
import style from './Affairs.module.scss'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'


type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (value: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all')
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div className={style.affair}>

            <div>{mappedAffairs}</div>
            <div className={style.affair__filter_block}>
                <button className={style.affair__btn} onClick={setAll}>All</button>
                <button className={style.affair__btn} onClick={setHigh}>High</button>
                <button className={style.affair__btn} onClick={setMiddle}>Middle</button>
                <button className={style.affair__btn} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
