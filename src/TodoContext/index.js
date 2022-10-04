import React from 'react';
import {useLocalStorage} from "./useLocalStorage"

const TodoContext = React.createContext();

function TodoProvider(props){

    const {item:todos,
        saveItem:saveTodos, 
        loading,
      error,} = useLocalStorage('TODOS_V1',[]);
      // Todos buscados 
      const [searchValue, setSearchValue] = React.useState('');
      // Estado del modal
      const [openModal,setOpenModal] = React.useState(false);


      //Cantidad de todos completados
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      //cantidad total de todos
      const totalTodos = todos.length;
      
    
      //para filtrar los todos que mostramos de acuerdo a la busqueda del usuario
    
      let searchedTodos =[];
    
      if(!searchValue.length >= 1){
        searchedTodos = todos;
      } else{
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase()
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
    
        })
      }
    
    
    
      const completeTodo = (text) =>{
        const  todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    
      }
    
    
    
      const deleteTodo = (text) =>{
        const  todoIndex = todos.findIndex(todo => todo.text === text); //encontrar la posicion del todo que tenga ese texto
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1)
        saveTodos(newTodos);
      } 

      const addTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text, 
        })
        saveTodos(newTodos);
      } 

    return(
        <TodoContext.Provider value={{
            loading,
            error, 
            totalTodos, 
            completedTodos, 
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo


        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};

