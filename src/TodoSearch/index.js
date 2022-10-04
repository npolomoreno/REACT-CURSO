import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch(){

    const {searchValue,setSearchValue} = React.useContext(TodoContext);
 
    const OnSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);

    }

    return(
        <div className="SearchContainer">
        <input className="TodoSearch" placeholder="cebolla"
        value={searchValue}
        onChange={OnSearchValueChange}
        />
        </div>
        

    )
}

export {TodoSearch};