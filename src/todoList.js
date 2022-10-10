
import React, { useState, useEffect, useRef } from 'react';
import "./index.css";
import TodoForm from './Structure/TodoForm';

const TodoList = ({ updateTodo  }) => {
    const inputRef = useRef(null);
    const [ Content , setContent  ] = useState("");
    const [showData , setShowData] = useState([]);
    const [disabled , setDisabled ] = useState(true);
    const [ todoEdit , setTodoEdit ] = useState("");
    const [ index , setIndex] = useState();
    const [ edit , setEdit ] = useState({
        value : '',
        id : null
    });
    // console.log(edit.value.item);
    const [ Update , setUpdated  ] = useState("");

    const handleChange = (e) => {
        let key = e.target.value
        setContent(key)
        
    } 
    const handleClick = (e) =>{
        e.preventDefault()
        
        setShowData([...showData ,  Content])
        setContent('')
    }
    const Edit = (item , id  ) => {
        setEdit({value :  item , id :  id  })
        setIndex(!index)

    }

    const deleted = (id) => {
        showData.splice([id] , 1 )
        setShowData([...showData])
    }

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
      };
      
      const addTodo = todo => {
        // if (!showData.text || /^\s*$/.test(showData.text)) {
        //   return;
        // }
        console.log(todo);
        const newTodos = [todo, ...showData];
    
        setShowData(newTodos);
      };
    
    // if (edit.id) {
    //     return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    //   }
      // const completeTodo = id => {
      //   let updatedTodos = showData.map(todo => {
      //     if (todo.id === id) {
      //       todo.isComplete = !todo.isComplete;
      //     }
      //     return todo;
      //   });
      //   setShowData(updatedTodos);
      // };

      const Updated =  () => {
        setIndex(!index)
      }
  return (
    <>

    <div>todoList</div>
    {/* <TodoForm onSubmit={addTodo} /> */}
    <form onSubmit={handleClick} >
    <div>
         <input type="text" value={Content} ref={inputRef}   onChange={handleChange}  placeholder='Search' />
         <button onClick={handleClick} >Enter</button>
    </div>
    </form>
    {!index ? <>
    {showData.map((item , id) => (
      <>
     
        <div className='wrap' key={id}  >
            <div>{item}</div>
            <div className='wrapDeleted'><p onClick={() => Edit({item , id})}>edit</p><p onClick={() => deleted(item.id)}>deleted</p></div>
            </div>
            </>
        ) )}
        </> : 
             <div>
             <input type="text" value={edit.value.item} ref={inputRef}   onChange={handleChange}  placeholder='Search' />
             <p onClick={Updated} >Update</p>
             </div> 
            }
    </>
  )
}
 

export default TodoList