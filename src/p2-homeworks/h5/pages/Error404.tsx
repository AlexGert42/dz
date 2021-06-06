import React from 'react'

const style = {
    pageError: {
        display: 'flex',
        alignItems: 'center',
        padding: '40px 50px',
        justifyContent: 'space-between'
    },
    pageError404: {
        fontSize: '250px',
        fontWeight: 900,
        fontFamily: "Comic Sans MS"
    },
    pageErrorText: {
        fontSize: '150px',
        fontWeight: 700,
        fontFamily: "Comic Sans MS"
    },
    pageErrorSmail: {
        fontSize: '120px',
        fontFamily: "Comic Sans MS",
        fontWeight: 900,
    }
}

function Error404() {
    return (
        <div style={style.pageError}>
            <div>
                <div style={style.pageError404}>404</div>
                <div style={style.pageErrorText}>Page not found!</div>
            </div>
            <div>
                <div style={style.pageErrorSmail}>¯\_(ツ)_/¯</div>
            </div>


        </div>
    )
}

export default Error404
