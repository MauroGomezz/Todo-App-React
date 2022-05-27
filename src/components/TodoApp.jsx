import React, {useState} from 'react';
import Todo from './Todo';

function TodoApp() {
const [title, setTitle] = useState();
const [todos, setTodos] = useState([]);


function handleChange(e) {
    const value = e.target.value;
    
    setTitle(value) 
}

function handleSubmit(e) {
    e.preventDefault();

    const newTdodo = {
        id: Math.random()*100,
        title: title,
        completed: false
    }
    
    setTodos([...todos, newTdodo])
    setTitle("");
}

function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find(item => item.id === id);
    item.title = value;
    setTodos(temp);
}

function handleDelete(id) {
    const temp = todos.filter(item => item.id !== id);
    setTodos(temp)
}

return (
    <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
            <input onChange={handleChange} type="text" value={title} className="todo-input"/>
            <input 
                onClick={handleSubmit} 
                type="submit" 
                value="Crear tarea" 
                className='todo-create'
                />
        </form>
        <div className='todo-container'>
            {todos.map(todo =>( 
                <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete}></Todo>
            ))}
        </div>
    </div>
  )
}

export default TodoApp