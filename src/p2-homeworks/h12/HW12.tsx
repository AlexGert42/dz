import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../h10/bll/store";
import {themeAC} from "../h10/bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'some'];

const style: any = {
    container: {
        padding: '20px 0'
    },
    block: {
        margin: '20px 0'
    },
    select: {
        width: '150px'
    },
    radio: {}

}


function HW12() {
    const theme = useSelector<storeType>(state => state.theme.theme)
    const dispatch = useDispatch()

    const onChangeOption = (t: string) => {
        dispatch(themeAC(t))
    }

    return (
        <div className={s[`${theme}`]} style={{padding: '50px'}}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <br/>

            <SuperRadio
                style={style.radio}
                name={'radio'}
                options={themes}
                value={`${theme}`}
                onChangeOption={onChangeOption}
            />
            <br/>
            <br/>
            <SuperSelect
                style={style.select}
                options={themes}
                value={`${theme}`}
                onChangeOption={onChangeOption}
            />
            <hr/>
        </div>
    );
}

export default HW12;
