import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [
        {
        id:1,
        status: 'pending',
        title: 'Remove Button',
        description: "we need a remove button in our task card",
        date: '2023-08-25',
        assignedTo: 'Tufael Khan',
        priority: 'high'
    }
 ],
    userSpecificTasks: []
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
            const target = state.tasks.find(item => item.id === payload.id)
            target.status = payload.status
        },
        userTasks: (state, {payload}) =>{
            state.userSpecificTasks = state.tasks.filter(item => item.assignedTo  === payload)
        }
    },
})

export const {addTask, removeTask, updateStatus, userTasks } = tasksSlice.actions;

export default tasksSlice.reducer;