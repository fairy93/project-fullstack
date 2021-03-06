import React,{useState} from 'react'
import {useDispatch} from 'react-redux' //리엑트에서 입력받아서 파이썬으로 전달하는 라이브러리 
import {v4 as uuidv4} from 'uuid'
import { addTodoAction } from 'store/todoReducer'
const TodoInput = () => {
    const [todo, setTodo ] = useState('') 
    const dispatch = useDispatch()

 
    const addTodo = todo => dispatch(addTodoAction(todo))
    const handleChange = e => {
        e.preventDefault()
        setTodo(e.target.value)
    }
    const submitForm = e => {
        e.preventDefault() 
        console.log(`uuidv4 : ${uuidv4()}`)
        let newTodo = {
            id: uuidv4(),
            name: todo,
            complete: false
        }
        addTodo(newTodo)
        setTodo('')
    }
    return (<>
    <h1>할일 목록</h1>
    <form onSubmit = {submitForm} method="POST">
        <div className="row mt-3">
            <div className="form-group col-sm-8">
                <input
                    type="text"
                    placeholder="할일 입력"
                    className="form-control"
                    value={todo}
                    onChange={ handleChange} 
                />
            </div>
        </div>

    </form>
   
    </>)
}

export default TodoInput