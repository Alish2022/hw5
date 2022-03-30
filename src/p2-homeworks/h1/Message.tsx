import React from 'react'
import style from './Message.module.css'


type MessagePropsType={
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:MessagePropsType) {
    return (
        <div className={style.message}>
            <div>
                <img className={style.avatar} src={props.avatar} alt="avatar"/>
            </div>
            <div className={style.text}>
                <h2>{props.name}</h2>
                <p>{props.message}</p>
                <div className={style.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
