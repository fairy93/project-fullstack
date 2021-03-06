const initialState = {todos:[], todo:{}}
export const addTodoAction= todo=>({type:"ADD_TODO", payload:todo})
// return 외에 딴거없으면 return 생략가능
export const toggleTodoAction = todoId =>({type:"TOGGLE_TODO", payload:todoId})
// payload 사용자가 전달하는 입력값 ...
export const deleteTodoAction = todoId=>({type:"DELETE_TODO", payload:todoId})
// 3개다 순수함수
const todoReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_TODO": return {...state, todos:[...state.todos, action.payload]}
        case "TOGGLE_TODO": return {...state, todos: state.todos.map(todo=>(todo.id=== action.payload)?{...todo, complete: !todo.complete}:todo)}
        case "DELETE_TODO": return {...state, todos: state.todos.filter(todo=>todo.id !== action.payload)}
        default:return state
    }
}
export default todoReducer