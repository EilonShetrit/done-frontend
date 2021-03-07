const INITIAL_STATE = {
    todos: [],
    currTodo: null
}

export function todoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                ...state,
                todos: action.todos
            }
        case 'SET_TODO':
            return {
                ...state,
                currTodo: action.todo
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(currTodo => currTodo._id !== action.todoId)
            }
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => todo._id === action.todo._id ? action.todo : todo)
            }
        default:
            return state;
    }
}