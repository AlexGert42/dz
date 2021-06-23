import React from 'react'
import Clock from './Clock'
import AlternativeClock from "./AlternativeClock";

function HW9() {
    return (

            <div style={{padding: '100px', background: '#000', display: 'flex', justifyContent: 'space-between'}}>

                {/*should work (должно работать)*/}
                <Clock/>

                {/*для личного творчества, могу проверить*/}
                <div>
                    <AlternativeClock/>
                </div>
            </div>


    )
}

export default HW9
