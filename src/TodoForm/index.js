import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'


function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onCancel = () =>{

        setOpenModal(false);

    } ;

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    } ;
    
    const onChange = (event) =>{
        setNewTodoValue(event.target.value)

        

    } ;

    return(

        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo Todo</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />

            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar 
                </button>

                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir Todo
                </button>

                 

            </div>

        </form>
    )
}

export {TodoForm};