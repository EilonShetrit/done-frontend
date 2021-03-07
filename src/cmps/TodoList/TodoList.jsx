import React from 'react'
import { TodoPreview } from '../TodoPreview/TodoPreview'

export function TodoList({ todos }) {
    return (
        <div className="todo-list">
            <ul>
                { todos.map(todo => <TodoPreview todo={todo} key={todo._id} />)}
            </ul>
        </div>
    )
}
