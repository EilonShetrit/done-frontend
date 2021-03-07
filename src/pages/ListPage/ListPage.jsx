import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { TodoList } from '../../cmps/TodoList/TodoList'
import { loadTodos } from '../../store/actions/todoActions'
// import { Button } from 'elemental'
export function ListPage() {
    // const todos = useSelector(state => state.todoReducer.todos)
    // const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(loadTodos(''))
        console.log('We are gonna do fucking Trello');
    }, [])
    return (
        <div className="list-container">
            <section className="header-list flex">
                <select name="" id="">
                    <option value="">Main board</option>
                    <option value="">Fun board</option>
                    <option value="">To do</option>
                </select>
                <h2>main board</h2>
            </section>

        </div>
    )
}
