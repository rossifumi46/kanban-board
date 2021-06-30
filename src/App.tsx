import React, { useState } from 'react';
import './App.css';
import Board from './Components/Board';
import Modal from './Components/Modal';
import { Boards, Title, SubTitle } from './style';
import { add, resolve, start } from './api';

export interface Task {
  id: string;
  text: string;
  state: string;
  time: null | number;
  price: null | number;
}



function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModal, setModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  function handleStart(id: string) {
    const newTasks = [...(tasks)];
    const index = newTasks.findIndex(item => item.id === id);
    setLoading(true);
    start(newTasks[index])
      .then(res => {
        newTasks[index] = res;
        setLoading(false);
        setTasks(newTasks);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }

  function handleResolve(id: string) {
    const newTasks = [...tasks];
    const index = newTasks.findIndex(item => item.id === id);
    setLoading(true);
    resolve(newTasks[index])
      .then(res => {
        newTasks[index] = res;
        setTasks(newTasks);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });

  }

  function handleAdd() {
    setModal(true);
  }

  function handleSubmit(text: string) {
    setModal(false);
    setLoading(true);
    add(text)
      .then(res => {
        setTasks([...tasks, res]);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <Title>Anyway Labs Test Project</Title>
      <SubTitle>Just some good deeds</SubTitle>
      {!isLoading ? (
        <Boards>
          <Board
            title={'To do'}
            tasks={tasks}
            onAction={handleStart}
            onAdd={handleAdd}
          />
          <Board
            title={'In progress'}
            tasks={tasks}
            onAction={handleResolve}
          />
          <Board
            title={'Done'}
            tasks={tasks}
          />
        </Boards>
      ) : <h1>Loading...</h1>}
      <Modal isModal={isModal} onSubmit={handleSubmit} onClose={() => setModal(false)} />
    </div>
  );
}

export default App;
