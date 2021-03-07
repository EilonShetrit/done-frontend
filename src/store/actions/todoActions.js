import { todoService } from "../../services/todoService";

export function loadTodos(filterBy) {
    return async dispatch => {
        const todos = await todoService.getTodos(filterBy)
        dispatch({ type: 'SET_TODOS', todos })
    }
}

export function getById(todoId) {
    return async dispatch => {
        const todo = await todoService.getTodoById(todoId)
        dispatch({ type: 'SET_TODO', todo })
    }
}

export function removeTodo(todoId) {
    return async dispatch => {
        try {
            await todoService.removeTodo(todoId)
            dispatch({ type: 'REMOVE_TODO', todoId })
        } catch (err) {
            console.log('ERROR in REMOVE_TODO!');
        }
    }
}

export function addTodo(todo) {
    return async dispatch => {
        try {
            const savedTodo = todoService.addTodo(todo)
            dispatch({ type: 'ADD_TODO', todo: savedTodo })
        } catch (err) {
            console.log('Error in ADD_TODO!');
        }
    }
}

export function updateTodo(todo) {
    return async dispatch => {
        try {
            const savedTodo = await todoService.updateTodo(todo)
            dispatch({ type: 'UPDATE_TODO', todo: savedTodo })
        } catch (err) {
            console.log('Error in UPDATE_TODO!');
        }
    }
}