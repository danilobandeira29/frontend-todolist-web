import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
  const history = useHistory();

  const handleSignUp = useCallback(
    async (data: SignUpForm) => {
      try {
        await api.post('/users', data);
        history.push('/');
      } catch {
        alert('Internal server error!');
      }
    },
    [history],
  );

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
