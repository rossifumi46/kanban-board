import React, { useMemo } from 'react';
import { Task } from '../../App';
import Card from '../Card';
import { Container, Header, Number, Title, Btn, BtnWrapper } from './style';

interface Props {
  title: string;
  tasks: Task[];
  onAction?: (id: string) => void;
  onAdd?: () => void;
}

export default function Board({ title, tasks, onAction, onAdd }: Props) {

  const filtered = useMemo(() => tasks.filter(task => task.state === title), [tasks]);

  return (
    <Container>
      <Header>
        <Number>{filtered.length}</Number>
        <Title>{title}</Title>
      </Header>
      {filtered.map(task => (
        <Card
          key={task.id}
          task={task}
          onAction={onAction}
        />
      ))}
      {title === 'To do' && <BtnWrapper><Btn onClick={onAdd}>New Task</Btn></BtnWrapper>}
    </Container>
  );
}
