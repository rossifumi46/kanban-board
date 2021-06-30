import { v4 as uuidv4 } from 'uuid';

import { Task } from './App';

const pricePerHour = 100;

const msInHour = 3600000;

export function add(text: string): Promise<Task> {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({
        id: uuidv4(),
        text,
        state: 'To do',
        time: null,
        price: null
      });
    }, 2000)
  });
}

export function start(task: Task): Promise<Task> {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({
        ...task,
        time: new Date().getTime(),
        state: 'In progress'
      });
    }, 2000)
  });
}

export function resolve(task: Task): Promise<Task> {
  return new Promise(function(resolve) {
    setTimeout(function() {
      const time = task.time as number;
      resolve({
        ...task,
        state: 'Done',
        price: pricePerHour*( new Date().getTime() - time) / msInHour,
      });
    }, 2000)
  });
}