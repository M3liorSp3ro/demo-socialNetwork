import React from 'react'
import s from './Post.module.css'

const Post = props => {
    return (
        <div className={s.item}>
            <img src="https://w-dog.ru/wallpapers/1/92/429412775478086/nejtiri-na-39-vi-avatar.jpg" />
            {props.message}
            <div>
                <span>Like </span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post