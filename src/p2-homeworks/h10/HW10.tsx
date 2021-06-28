import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {storeType} from "./bll/store";
import PacmanLoader from "react-spinners/PacmanLoader";

const styles: any = {
    overlay: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        background: 'rgba(0,0,0,0.7)',
        zIndex: '1000'
    },
    packman: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-100%, -100%)',
    },
}


function HW10() {
    const loading = useSelector<storeType>(state => state.loading.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
            console.log('loading...')
        }, 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div style={styles.overlay}>
                        <PacmanLoader
                            color={'#ffaa00'}
                            loading={true}
                            size={150}
                            css={styles.packman}
                        />
                    </div>

                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10


