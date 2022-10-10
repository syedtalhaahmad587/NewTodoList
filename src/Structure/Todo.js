import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todoList, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });  
 
  const submitUpdate = value => {
    updateTodo(edit.id, value);
    console.log(updateTodo(edit.id, value));
    setEdit({
      id: null,
      value: ''
    });
  };

  return todoList.map((todo, index) => (
    <>

    {!edit.id ?
    <div
       className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}>
      {!todo.edit &&
        <>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text, edit: true })}
          className='edit-icon'
        />
      </div>
      </>
      }
    </div>
   : <TodoForm edit={edit} onSubmit={submitUpdate} /> }
    </>
  ));
};

export default Todo;