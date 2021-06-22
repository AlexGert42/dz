import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {ButtonGroup, Grid, List, ListItem, ListItemText, Paper} from '@material-ui/core'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <ListItem key={p._id}>
            <ListItemText>{p.name}</ListItemText><span>{p.age}</span>
        </ListItem>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <Grid item>
            <hr/>
            homeworks 8

            <Paper elevation={5} style={{maxWidth: '300px', padding: '20px', margin: '20px 0'}}>
                <List>
                    <ListItem style={{borderBottom: '1px solid #68686e50'}}>
                        <ListItemText>Name</ListItemText><span>Age</span>
                    </ListItem>
                    {finalPeople}
                </List>

                <ButtonGroup>
                    <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                    <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                    <div><SuperButton onClick={sortAge}>check 18</SuperButton></div>
                </ButtonGroup>

            </Paper>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </Grid>
    )
}

export default HW8
