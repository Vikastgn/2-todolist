import './App.css';
import {Todolist} from "./Todolist";
import {useState} from "react";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export type FilterValuesType = 'all' | 'active' | 'completed' | 'first three tasks' | 'DELETE ALL TASKS'
function App() {
    const [tasks, setTasks] = useState<TaskType[]>(
        [
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 2, title: 'JS', isDone: true},
            {id: 3, title: 'ReactJS', isDone: false},
            {id: 4, title: 'Redux', isDone: false},
            {id: 5, title: 'Typescript', isDone: false},
            {id: 6, title: 'RTK query', isDone: false},
        ]

    )
    const removeTask = (taskId: number) => {
        const filteredTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
    }

    const  [filter, setFilter] = useState<FilterValuesType>("all")

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    let taskForTodolist = tasks
    if (filter === "active") {
        taskForTodolist = tasks.filter(task => !task.isDone)
    }

    if (filter === 'completed') {
        taskForTodolist = tasks.filter(task => task.isDone)
    }

    if (filter === 'first three tasks') {
        taskForTodolist = tasks.filter(task => task.id < 4)
    }

    if (filter === 'DELETE ALL TASKS') {
        taskForTodolist = tasks.filter(task => task.id === 0)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={taskForTodolist }
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
