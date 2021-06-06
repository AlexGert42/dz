import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (obj: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    let inputClass = error ? s.error : s.success
    return (
        <div className={s.task3}>
            <input value={name} onChange={setNameCallback} className={`${s.task3__input} ${inputClass}`}/>
            <button className={s.task3__btn} onClick={addUser}>add</button>
            <span className={s.task3__count}>count users: {totalUsers}</span>
            <span className={s.task3__error}>{error}</span>
        </div>
    )
}

export default Greeting
