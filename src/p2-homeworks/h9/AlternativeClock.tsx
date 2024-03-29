import React, {useMemo, useState} from 'react'
import style from './CastomWatchStyles.module.scss'
import styleNumber from './CastomNumberStyles.module.scss'

const getTime = () => {
    let newHours = new Date().getHours().toString()
    let newMinutes = new Date().getMinutes().toString()
    let newSeconds = new Date().getSeconds().toString()
    let hours = newHours.length === 1 ? ['0', newHours] : newHours.split('')
    let minutes = newMinutes.length === 1 ? ['0', newMinutes] : newMinutes.split('')
    let seconds = newSeconds.length === 1 ? ['0', newSeconds] : newSeconds.split('')
    return [...hours, ...minutes, ...seconds]
}

const getMonth = () => {
    let newMonth = ((new Date().getMonth()) + 1).toString()
    let newDay = new Date().getDay().toString()
    let month = newMonth.length === 1 ? ['0', newMonth] : newMonth.split('')
    let day = newDay.length === 1 ? ['0', newDay] : newDay.split('')
    return [...month, ...day]
}
const getYrear = () => {
    let newYrear = new Date().getFullYear().toString().split('')
    return [...newYrear]
}

type propsType = string[]
type functionType = () => propsType
type numberBlockPropsType = {
    num: string
}
type timeBlockProps = {
    arrNum: string[]
}

function AlternativeClock() {

    const [time, setTime] = useState(getTime)
    const [month, setMonth] = useState(getMonth)
    const [year, setYear] = useState(getYrear)

    const [showTime, setShowTime] = useState<boolean>(false)
    const [showMonth, setShowMonth] = useState<boolean>(false)
    const [showYear, setShowYear] = useState<boolean>(false)

    const show = (setShow: any, flag: boolean) => {
        setTimeout(() => {
            setShow(flag)
        }, 500)
    }

    useMemo(() => {
        setInterval(() => {
            setTime(getTime)
            setMonth(getMonth)
            setYear(getYrear)
        }, 1000)
    }, [])

    return (
        <div className={style.watch}>
            <div className={style.watch__inner}>
                <div
                    className={style.watch__year}
                    onMouseEnter={() => show(setShowYear, true)}
                    onMouseLeave={() => show(setShowYear, false)}>
                    {showYear && <YearBlock arrNum={year}/>}
                </div>
                <div
                    className={style.watch__month}
                    onMouseEnter={() => show(setShowMonth, true)}
                    onMouseLeave={() => show(setShowMonth, false)}>
                    {showMonth && <MonthBlock arrNum={month}/>}
                </div>
                <div
                    className={style.watch__time}
                    onMouseEnter={() => show(setShowTime, true)}
                    onMouseLeave={() => show(setShowTime, false)}>
                    {showTime && <TimeBlock arrNum={time}/>}
                </div>
            </div>
        </div>
    )
}

export default AlternativeClock




const NumberBlock = ({num}: numberBlockPropsType) => {
    const [activItem, setActivAtem] = useState(new Array(7).fill(''))

    useMemo(() => {
        switch (num) {
            case '0':
                return setActivAtem([styleNumber.active, styleNumber.active, styleNumber.active, styleNumber.active, styleNumber.active, styleNumber.active, ''])
            case '1':
                return setActivAtem(['', styleNumber.active, styleNumber.active, '', '', '', ''])
            case '2':
                return setActivAtem([styleNumber.active, styleNumber.active, '', styleNumber.active, styleNumber.active, '', styleNumber.active])
            case '3':
                return setActivAtem([styleNumber.active, styleNumber.active, styleNumber.active, styleNumber.active, '', '', styleNumber.active])
            case '4':
                return setActivAtem(['', styleNumber.active, styleNumber.active, '', '', styleNumber.active, styleNumber.active])
            case '5':
                return setActivAtem([styleNumber.active, '', styleNumber.active, styleNumber.active, '', styleNumber.active, styleNumber.active])
            case '6':
                return setActivAtem([styleNumber.active, '', styleNumber.active, styleNumber.active, styleNumber.active, styleNumber.active, styleNumber.active])
            case '7':
                return setActivAtem([styleNumber.active, styleNumber.active, styleNumber.active, '', '', ''])
            case '8':
                return setActivAtem([styleNumber.active, styleNumber.active, styleNumber.active, styleNumber.active, styleNumber.active, styleNumber.active, styleNumber.active])
            case '9':
                return setActivAtem([styleNumber.active, styleNumber.active, styleNumber.active, styleNumber.active, '', styleNumber.active, styleNumber.active])
            default:
                return activItem
        }
    }, [num])


    return (
        <ul className={`${styleNumber.number}`}>
            <li className={`${styleNumber.number__item} ${styleNumber.item_w} ${styleNumber.item_1} ${activItem[0]}`}/>
            <li className={`${styleNumber.number__item} ${styleNumber.item_h} ${styleNumber.item_2} ${activItem[1]}`}/>
            <li className={`${styleNumber.number__item} ${styleNumber.item_h} ${styleNumber.item_3} ${activItem[2]}`}/>
            <li className={`${styleNumber.number__item} ${styleNumber.item_w} ${styleNumber.item_4} ${activItem[3]}`}/>
            <li className={`${styleNumber.number__item} ${styleNumber.item_h} ${styleNumber.item_5} ${activItem[4]}`}/>
            <li className={`${styleNumber.number__item} ${styleNumber.item_h} ${styleNumber.item_6} ${activItem[5]}`}/>
            <li className={`${styleNumber.number__item} ${styleNumber.item_w} ${styleNumber.item_7} ${activItem[6]}`}/>
        </ul>
    )
}


const YearBlock = ({arrNum}: timeBlockProps) => {
    return (
        <div className={`${style.number} ${style.year}`}>
            <div className={style.number_item}>
                <NumberBlock num={arrNum[0]}/>
            </div>
            <div className={style.number_item}>
                <NumberBlock num={arrNum[1]}/>
            </div>
            <div className={style.number_item}>
                <NumberBlock num={arrNum[2]}/>
            </div>
            <div className={style.number_item}>
                <NumberBlock num={arrNum[3]}/>
            </div>
        </div>
    )
}

const MonthBlock = ({arrNum}: timeBlockProps) => {
    return (
        <div className={`${style.number} ${style.month}`}>
            <div className={style.number_item}>
                <NumberBlock num={arrNum[0]}/>
            </div>
            <div className={style.number_item}>
                <NumberBlock num={arrNum[1]}/>
            </div>
            <div className={style.number__dot}>
                <span className={style.number__dot_item}/>
                <span className={style.number__dot_item}/>
            </div>
            <div className={style.number_item}>
                <NumberBlock num={arrNum[2]}/>
            </div>
            <div className={style.number_item}>
                <NumberBlock num={arrNum[3]}/>
            </div>
        </div>
    )
}


    const TimeBlock = ({arrNum}: timeBlockProps) => {
    return (
        <div className={`${style.number} ${style.time}`}>

            <div className={style.number_item}>
                <NumberBlock num={arrNum[0]}/>
            </div>
            <div className={style.number_item}>
                <NumberBlock num={arrNum[1]}/>
            </div>
            <div className={style.number__dot}>
                <span className={style.number__dot_item}/>
                <span className={style.number__dot_item}/>
            </div>
            <div className={style.number_item}>
                <NumberBlock num={arrNum[2]}/>
            </div>
            <div className={style.number_item}>
                <NumberBlock num={arrNum[3]}/>
            </div>
            <div className={style.number__dot}>
                <span className={style.number__dot_item}/>
                <span className={style.number__dot_item}/>
            </div>
            <div className={style.number_item}>
                <NumberBlock num={arrNum[4]}/>
            </div>
            <div className={style.number_item}>
                <NumberBlock num={arrNum[5]}/>
            </div>

        </div>
    )
}

