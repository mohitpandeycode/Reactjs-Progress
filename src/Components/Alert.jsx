import React from 'react'

function Alert(props) {
    return (
        props.alert &&<div className={`alert alert-${props.alert.type} text-center`} role="alert">
           <b>{props.alert.message}</b>
        </div>
    )
}

export default Alert