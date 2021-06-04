import React, {useState} from 'react'
import Greeting from './Greeting'
import {v4 as uuidv4} from "uuid";
import {UserType} from "./HW3";



type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (obj: UserType) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const addUser = () => {
        if (name.trim()) {
            addUserCallback({
                name,
                _id: uuidv4()
            })
            setError('')
            alert(`Hello  ${name} ${totalUsers + 1}!`)
        } else {
            setError('Data Error')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
