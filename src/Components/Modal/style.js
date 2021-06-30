import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${props => props.isModal ? 'visible' : 'hidden'};
  background: rgba(0, 0, 0, 0.4);
`;

export const Form = styled.form`
  width: 400px;
  background: #F7F8FA;
  border: 1px solid rgb(238,239,241);
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.textarea`
  background: #FFF;
  border: none;
  width: 100%;
`;

export const Btn = styled.button`
  width: 100px;
  background: #FFF;
  border: 1px solid rgb(238,239,241);
  border-radius: 5px;
  padding: 5px 10px;
`;

export const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`;