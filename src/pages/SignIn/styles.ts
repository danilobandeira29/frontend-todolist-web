import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
`;

export const Content = styled.div`
  flex: 1;
  max-width: 400px;
  background: #424242;
  padding: 40px;
  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
`;
