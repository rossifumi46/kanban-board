import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #F7F8FA;
  border: 1px solid rgb(238,239,241);
  border-radius: 10px;
  min-height: 600px;
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  margin-left: 10px;
`;

export const Header = styled.div`
  display: flex;
`;

export const Number = styled.div`
  border-radius: 50%;
  background: rgb(221,224,229);
  color: #787B82;
  width: 25px;
  height: 25px;
  text-align: center;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  margin: 10px auto;
  background: #FFF;
  border: 1px solid rgb(238,239,241);
  border-radius: 5px;
  padding: 5px 10px;
`;