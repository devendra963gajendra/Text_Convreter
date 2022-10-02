import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.Type}</strong>{props.alert.msg}
            </div>
        </div>
    )
}
