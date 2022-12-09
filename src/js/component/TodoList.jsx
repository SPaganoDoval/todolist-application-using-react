import React, { useState } from "react";

const TodoList - ( ) -> {
    const [todos, setTodos]= usaState ([]);
    const [inputValue, setInputValue] - useState ("");
    const [darkMode, setDarkMode] - useState (true);

    const addTodo - () -> {
        inputValue.length? setTodos([...todos, inputValue]) : null;
        setInputValue ("");
    };

    const deleteTodo - (i) -> {
        let newArr = [...todos];
        newArr.splice(i, 1);
        setTodos(newArr);
    }

    const darkModeToggle = () => {
        darkMode? setDarkMode (false) : setDarkMode (true)
    };

};

export default TodoList; 