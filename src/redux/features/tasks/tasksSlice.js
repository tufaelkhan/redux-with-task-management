import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [ ],
}

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask: (state, {payload}) =>{

            if(state.tasks.length === 0){
                state.tasks.push({id: 1, status: 'pending', ...payload});
            }else{
                const lastElement = state.tasks.at(-1)
                state.tasks.push({id: lastElement.id + 1, ...payload});
            }
        },
        removeTask: (state, {payload}) =>{
            state.tasks.filter(item => item.id != payload)
        },
        updateStatus: (state, {payload}) => {
            const target = state.tasks.find(item => item.id === payload)
            target.status = 'running'
        }
    },
})

export const {addTask} = tasksSlice.actions;

export default tasksSlice.reducer;