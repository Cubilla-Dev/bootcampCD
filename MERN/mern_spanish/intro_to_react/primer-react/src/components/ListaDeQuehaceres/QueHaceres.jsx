import React, { useState, useEffect } from 'react';

const QueHaceres = () => {
    const [tasks, setTasks] = useState([]);
    const [over, setOver] = useState([]);

    useEffect(()=>{
        setOver(Array(tasks.length).fill(false))
    }, [tasks])

    const grateWord = (index) => {
        const newOver = [...over];
        newOver[index] = !over[index];
        setOver(newOver);
    };
    const deleteItem = (index) => {
        const newTasks = tasks.filter((number) => number !== index)
        console.log(newTasks )
        setTasks(newTasks)
    }
    const ADD = (e) => {
        setTasks(['tarea', 'caminar'])
    }

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
