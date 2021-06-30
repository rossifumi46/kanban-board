import React, { useEffect, useState } from 'react';
import { Task } from '../../App';
import { Container, Btn, Text, BtnWrapper, Info, AddInfo } from './style';

interface Props {
  task: Task;
  onAction?: (id: string) => void;
}

function getText(state: string): string {
  switch(state) {
    case 'To do':
      return 'Start';
    case 'In progress':
      return 'Resolve';
    default:
      return '';
  }
}

function getTime(time: number) {
  return `${(time/3600).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    maximumFractionDigits: 0,
    useGrouping: false
  })}:${(time%3600/60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    maximumFractionDigits: 0,
    useGrouping: false
  })}:${(time%3600%60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    maximumFractionDigits: 0,
    useGrouping: false
  })}`
}

export default function Card({ task, onAction }: Props) {
  const [time, setTime] = useState(
    (new Date().getTime() - (task.time as number))/1000
  );

  useEffect(() => {
    // let intervalId: ReturnType<typeof setInterval>;
    if (task.state === 'In progress') {
      const intervalId = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <Container>
      <Info>
        <Text>{task.text}</Text>
        {task.state === 'In progress' && (
          <AddInfo>{getTime(time)}</AddInfo>
          )}
        {task.state === 'Done' && (<AddInfo>{`$${task.price?.toFixed(2)}`}</AddInfo>)}
      </Info>
      {onAction && (
        <BtnWrapper>
          <Btn type="button" onClick={() => onAction(task.id)}>
            {getText(task.state)}
          </Btn>
        </BtnWrapper>
      )}
    </Container>
  );
}
