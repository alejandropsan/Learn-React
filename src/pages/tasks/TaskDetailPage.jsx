import React from 'react';
import { useParams } from 'react-router-dom'
import { taskList } from '../../AppRoutingOne.js'

const TaskDetailPage = () => {

    const {id} = useParams()
    const oneTask = taskList.find((e) => e.id === Number(id))

    return (
        <div>
            <h1>Detalle de la tarea - {oneTask.id}</h1>
            <h2>{ oneTask.name }</h2>
            <h3>{ oneTask.description }</h3>
            <h3>Que pasa aqui</h3>
        </div>
    );
}

export default TaskDetailPage
