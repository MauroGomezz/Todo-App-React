import React, {useState} from 'react'

function Todo({todo, onUpdate, onDelete}) {
const [isEdit, setIsEdit] = useState(false);

function FormEdit() {
    const [newValue, setNewValue] = useState(todo.title)

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        const value = e.target.value;
        setNewValue(value)
    }

    function handleClick() {
        onUpdate(todo.id, newValue);
        setIsEdit(false)
    }

    return (
    <form onSubmit={handleSubmit} className="form">
        <input type="text" value={newValue} onChange={handleChange} />
        <button onClick={handleClick} className="button-edit">Listo</button>
    </form>
    );
}

function TodoElement() {
    if (todo.title !== "") {
        return (
        <div className='todos'>
            {todo.title}
            <div className="button-container">
                <button onClick={(e) => setIsEdit(true)} className="button-edit">Editar</button>
                <button onClick={(e) => onDelete(todo.id)} className="button-delete">Borrar</button>
            </div>
        </div>
        );
    } 
}

  return (
    <div> {isEdit ? <FormEdit></FormEdit> : <TodoElement></TodoElement>} </div>
  )
}

export default Todo