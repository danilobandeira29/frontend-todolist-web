import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import api from '../../services/api';
import { Container, Title, Content, FormContainer, Button } from './styles';

interface SignUpForm {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const handleSignUp = useCallback(async (data: SignUpForm) => {
    const response = await api.post('/users', data);
  }, []);

  return (
    <Container>
      <Content>
        <Title>Sign Up</Title>
        <FormContainer>
          <Form onSubmit={handleSignUp}>
            <Input name="name" type="text" placeholder="Name" />
            <Input name="email" type="text" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />
            <Button type="submit">Sign Up</Button>
          </Form>
        </FormContainer>
        <Link to="/">Sign In</Link>
      </Content>
    </Container>
  );
};

export default SignUp;
