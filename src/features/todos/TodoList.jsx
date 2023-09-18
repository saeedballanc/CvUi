
import { useQuery , useMutation , useQueryClient } from 'react-query';
import {getTodos , addTodo , updateTodo , deleteTodo} from '../../api/todosApi';
import { useState } from 'react';




const TodoList = () => {


    const [newTodo , setNewTodo] = useState('');

    const queryClient = useQueryClient();

    const {

        isLoading,
        isError,
        error,
        data: todos
    } = useQuery('todos' , getTodos , {

        select: data => data.sort((a,b)=> b.id - a.id)

    });




    const addTodoMutation = useMutation(addTodo ,{

        onSuccess: () => {

            queryClient.invalidateQueries("todos")
        }
    })



    const updateTodoMutation = useMutation(updateTodo ,{

        onSuccess: () => {

            queryClient.invalidateQueries("todos")
        }
    })



    const deleteTodoMutation = useMutation(deleteTodo ,{

        onSuccess: () => {

            queryClient.invalidateQueries("todos")
        }
    })




    const handleSubmit = (e)=>{

         e.preventDefault();
         addTodoMutation.mutate({userId:1 , title:newTodo , completed:false});
         setNewTodo('');
    }








    const newItemSection = (

        <form onSubmit={handleSubmit}>
            <label for="new-todo">Enter a new todo item</label>
            <div className='new-todo'>

                <input type="text" id='new-todo' value={newTodo} 
                 onChange={(e)=>setNewTodo(e.target.value)} />

            </div>

            <button className='submit'>
             <svg className="icon-upload" style={{width:"15px" , height:"15px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
             </svg>

            </button>

        </form>
    )





    let content
     if (isLoading) {
        
        content = <p>Loading...</p>
     }else if(isError){

        content = <p>{error.message}</p>
     }else{

        content = todos.map((todo)=> {

             return<>
             
              <article key={todo.id}>
                
                <div className='todo'>

                    <input type="checkbox" checked={todo.completed} id={todo.id}
                      onChange={()=>updateTodoMutation.mutate({...todo , completed:!todo.completed})}/>


                     <label htmlFor={todo.id}>{todo.title}</label>

                </div>

                <button className='trash' onClick={()=>deleteTodoMutation.mutate({id:todo.id})}>
 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:"15px" , height:"15px"}}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>

                </button>

              </article>

             </>
        })
     }





    return <>
    
      <main>
        
        <h1>Todo List</h1>
        {newItemSection}
        {content}

      </main>

    </>
}
 
export default TodoList;