import { createSlice } from '@reduxjs/toolkit'


const initialState={
    allTodos:[]
}

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.allTodos=[...state.allTodos,action.payload]
        },
        deleteTodo:(state,action)=>{
            state.allTodos=state.allTodos.filter((todo)=>todo.id!==action.payload)
        }
    }
})

export const {addTodo,deleteTodo}=todoSlice.actions;
export default todoSlice.reducer;