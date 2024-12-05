import { useRef } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

    const inputRef = useRef();

    // eslint-disable-next-line no-unused-vars

    const add = () => {
        const inputText = inputRef.current.value.trim();
        console.log(inputText);
    }

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
       
        {/* --- Title --- */}
        <div className="flex items-center mt-7 gap-2">
            <img className='w-8' src={todo_icon} alt="" />
            <h1 className="text-3xl font-semibold">To-Do List</h1>
        </div>

        {/* ---  Input Box  --- */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type='text' placeholder='Add your task'/>
            <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add +</button>
        </div>

        {/* ---  Todo List  --- */}
        <div>
            <TodoItems text="Learn Coding"/>
            <TodoItems text="Watch Movies"/>
        </div>

    </div>
  )
}

export default Todo