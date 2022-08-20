import TaskCard from './TaskCard'
import {useContext} from 'react'
import moduleName, { TaskContext } from '../context/TaskContext'


function Task() {
  const {task} = useContext(TaskContext)

  if (task.length === 0) {
    return <h1 className='text-4xl text-white font-bold text-center'>No hay tareas aun</h1>;
  }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {task.map((task) => {
        return (
          <TaskCard key={task.id} task={task}/>
        );
      })}
    </div>
  );
}

export default Task;
