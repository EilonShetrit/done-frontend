import React from 'react'
import moment from 'moment'
import './TodoPreview.scss'
import { Link } from 'react-router-dom'

export function TodoPreview({todo}) {
    return (
        <div className="todo-preview">
            <button>X</button>
            <p className="todo-status">Status: <span></span></p>
            <h4>{todo.txt}</h4>
            <p>Created at: <span>{moment(todo.createdAt).format("MMM Do YYYY")}</span></p>
            <p>Created by: <span>{todo.createdBy}</span></p>
            <button><Link to="/edit">Edit</Link></button>
            {/* <button>Edit</button> */}
        </div>
    )
}
