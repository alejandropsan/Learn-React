import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log("TODO: Cambiar el estado de una tarea");
    }


    return (
        <div>
            
            <h1>
            You Tasks:    
            </h1>
            
            {/* TODO Aplicar un for/Map para renderizar una lista */}
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
