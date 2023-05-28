import styles from './index.module.css';
import Plus from '../../assets/plus.svg';
import { NoContent } from '../NoContent/intex';
import { ChangeEvent, useEffect, useState } from 'react';
import { TodoList } from '../TodoList';
import { Task } from '../../models/Task';
import { v4 as uuidv4 } from 'uuid';
import { api } from '../../configs/api';

export const Content = () => {

    const [description, setDescription] = useState<string>("");
 //estudar variaveis de estado
    const [taskList, setTaskList] = useState<Task[]>([]);

    const tasksDone = taskList.filter((task) => {
        return task.isDone !== false
    })

    const disableButton = !description.length;

    const addTaskOnList = () => {
        const newTask = {
            id: uuidv4(),// UUID -- add id dinamico
            description,
            isDone: false
        }
        setTaskList((currentValue) => [...currentValue, newTask]);
        setDescription('');

    }

    const changeStatusCheckbox = (id: string) => {

        const change = taskList.map((task) => {
            if(task.id == id){
                return{
                    ...task,
                    isDone: !task.isDone
                }
            }
            return task;
        });
        setTaskList(change);
    }

    const removeTaskOnList = (id: string) => {
        setTaskList((currentValue) => currentValue.filter(task => task.id != id))
    }
    useEffect(() => {
        api.get("tasks").then((response) => {})
    }, []);

    return(
        <section className={styles.section_container}>
            <main>
                <article className={styles.input_container}>
                    <input 
                        className={styles.input} 
                        type="text" 
                        value={description}
                        placeholder="Adicione uma nova tarefa"
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
                        />
                    <button  
                        onClick={() => addTaskOnList()} 
                        className={styles.button}
                        disabled = {disableButton}
                        >Criar
                            <img
                                src={Plus} 
                                alt="Icone de mais"
                            />
                    </button>
                </article>

                <article className={styles.content_header}>
                    <article className={styles.tasks_container}>
                        <p className={styles.task_create}>Tarefas Criadas</p>
                        <span className={styles.span_value}>{taskList.length}</span>
                    </article>
                    <article className={styles.tasks_container}>
                        <p className={styles.task_done}>Concluídas</p>
                        <span className={styles.span_value}> {tasksDone.length} de {taskList.length}</span>
                    </article>
                </article>

                {taskList.length == 0 ? <NoContent/> : <TodoList onDelete={removeTaskOnList} onChangeCheckbox = {changeStatusCheckbox} list={taskList}/>}
            </main>
        </section>
    )
}