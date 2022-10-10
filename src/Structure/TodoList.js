import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = todo => {
    // if (!todo.text || /^\s*$/.test(todo.text)) {
    //   return;
    // }
    const newTodoList = [todo, ...todoList];

    setTodoList(newTodoList);
    console.log(...todoList);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodoList(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todoList].filter(todo => todo.id !== id);
    setTodoList(removedArr);
  };

  const completeTodo = id => {
    let updatedTodoList = todoList.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todoList={todoList}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
    />
    </>
  );
}

export default TodoList;