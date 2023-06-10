import { useReducer } from 'react';
import AddTask from './components/AddTask.js';
import TaskList from './components/TaskList.js';

import { TasksProvider } from './contexts/TasksContext.js';

export default function TaskApp() {

    return (
        <>
            <TasksProvider>
                <h1>Day off in Jamaica</h1>
                <AddTask />
                <TaskList />
            </TasksProvider>
        </>
    );
}

