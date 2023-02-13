import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task, complete, remove}) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${ task.name } is going to unmount`)
        };
    }, [task]);  

    /**
     * Función que retorna un Badge dependiendo del nivel de la tarea
     */
    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                    { task.level }
                    </span>
                </h6>)

            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                    { task.level }
                    </span>
                </h6>)
                
            case LEVELS.BLOCKING:
            return(
            <h6 className='mb-0'>
                <span className='badge bg-danger'>
                { task.level }
                </span>
            </h6>)

            default:
                break
        }
    }

    /**
     * Función que retorna un icono dependiendo del nivel de completado de la tarea
     */
    function taskCompletedIcon(){
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}> </i>)
        } else{
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'gray'}}> </i>)
        }
    }


    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }

    const taskPending = {
        color: 'tomato',
        fontWeight: 'bold',
    }


    return (

        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                { task.name }
            </th>
            <td className='align-middle'>
                { task.description }
            </td>
            <td className='align-middle'>
                {/* Ejecución de la función que retorna el nivel de la tarea */}
                { taskLevelBadge() }
            </td>
            <td className='align-middle'>
            {/* Ejecución de la función de retorno de icono dependiendo del nivel de completado de la tarea */}
            { taskCompletedIcon() }
            <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(task)}> </i>
            </td>
            
            
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
