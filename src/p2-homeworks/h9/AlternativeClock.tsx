import React from 'react'
import style from './CastomWatchStyles.module.scss'
import styleNumber from './CastomNumberStyles.module.scss'

function AlternativeClock() {


    return (
        <div className={style.watch}>
            <div className={style.watch__inner}>
                <div className={style.watch__year}>
                    <div className={style.number_year}>
                        {new Date().getFullYear()}
                        <NumberBlock/>
                    </div>
                </div>
                <div className={style.watch__month}>
                    <div className={style.number_year}>
                        {new Date().getMonth() + 1}
                    </div>
                </div>
                <div className={style.watch__time}>
                    <div className={style.number_year}>
                        {
                            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlternativeClock


const NumberBlock = () => {

    return (
        <ul className={`${styleNumber.number}`}>
            <li className={`${styleNumber.number__item}`}>1</li>

        </ul>
    )
}
