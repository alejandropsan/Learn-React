import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

    const defaultTask1 = new Task("Example1", "Description 1", true, LEVELS.NORMAL)
    const defaultTask2 = new Task("Example2", "Description 2", false, LEVELS.URGENT)
    const defaultTask3 = new Task("Example3", "Description 3", false, LEVELS.BLOCKING)


    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified')
        setLoading(false)
        return () => {
            console.log('Task list component is going to unmount...')
        };
    }, [tasks]);


    function completeTask(task){
        console.log('Complete this Task: ', task);
        const index = tasks.indexOf(task);
        const temTasks = [...tasks];
        temTasks[index].completed = !temTasks[index].completed;
        // Queremos actualizar el estado del componente y esto 
        // actualizará la tarea en el orden de la lista actualizada
        setTasks(temTasks);
    }

    function deleteTask(task){
        console.log('Delete this Task: ', task);
        const index = tasks.indexOf(task);
        const temTasks = [...tasks];
        temTasks.splice(index, 1);
        setTasks(temTasks);
    }

    function addTask(task){
        console.log('Create this Task: ', task);
        const index = tasks.indexOf(task);
        const temTasks = [...tasks];
        temTasks.push(task);
        setTasks(temTasks);
    }


    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card header (title) */}
                    <div className='card-header p-3'>
                        <h5>
                        You Tasks:
                        </h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                { tasks.map((task, index) => {
                                    return (
                                        <TaskComponent
                                         key={index}
                                         task={ task }
                                         complete={completeTask}
                                         remove={deleteTask}>
                                         
                                         </TaskComponent>
                                        )
                                    }
                                 )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm add={addTask}></TaskForm>
        </div>
    );
};


export default TaskListComponent;
