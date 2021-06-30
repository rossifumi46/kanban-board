import React, { useRef } from 'react';
import { Container, Form, Input, Btn, Btns } from './style';

interface Props {
  isModal: boolean;
  onSubmit: (text: string) => void;
  onClose: () => void;
}

export default function Modal({ isModal, onSubmit, onClose }: Props) {
  const ref = useRef();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      text: { value: string };
    };
    onSubmit(target.text.value);
    target.text.value = '';
  }

  function handleClose() {
    onClose();
  }

  return (
    <Container isModal={isModal}>
      <Form ref={ref} onSubmit={handleSubmit}>
        <Input name="text" />
        <Btns>
          <Btn type="submit">Add</Btn>
          <Btn type="button" onClick={handleClose}>Cancel</Btn>
        </Btns>
      </Form>
    </Container>
  )
}
