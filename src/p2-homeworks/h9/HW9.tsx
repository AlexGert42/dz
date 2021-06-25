import React from 'react'
import Clock from './Clock'
import AlternativeClock from "./AlternativeClock";

function HW9() {
    return (

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                homeworks 8
                {/*should work (должно работать)*/}
                <Clock/>

                {/*для личного творчества, могу проверить*/}
                <div style={{ background: '#000', padding: '100px'}}>
                    <AlternativeClock/>
                </div>
            </div>


    )
}

export default HW9
