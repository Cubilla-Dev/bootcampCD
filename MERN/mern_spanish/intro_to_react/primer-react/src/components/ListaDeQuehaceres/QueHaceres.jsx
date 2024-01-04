import React, { useState } from 'react';

const QueHaceres = () => {
    const [tasks, setTasks] = useState([]);
    const [over, setOver] = useState([]);

    const grateWord = (index) => {
        const newOver = [...over];
        newOver[index] = !over[index];
        setOver(newOver);
    };

    const deleteItem = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        const newOver = [...over];
        newOver.splice(index, 1);

        setTasks(newTasks);
        setOver(newOver);
    };

    const ADD = () => {
        const newTask = 'Nueva tarea';
        setTasks([...tasks, newTask]);
        setOver([...over, false]);
    };

    return (
        <div>
            <form>
                {tasks.map((item, index) => (
                    <div key={index}>
                        <p style={{ textDecoration: over[index] ? 'line-through' : 'none' }}>{item}</p>
                        <input onChange={() => grateWord(index)} type='checkbox' />
                        <button onClick={() => deleteItem(index)}>Delete</button>
                    </div>
                ))}
                <button onClick={ADD}>AGREGAR</button>
            </form>
        </div>
    );
};

export default QueHaceres;
