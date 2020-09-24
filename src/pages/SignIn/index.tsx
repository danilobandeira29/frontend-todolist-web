import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import api from '../../services/api';
import { Container, Title, Content, FormContainer, Button } from './styles';

interface ISignInForm {
  password: string;
  email: string;
}

const SignIn: React.FC = () => {
  const handleSignIn = useCallback(async (data: ISignInForm): Promise<void> => {
    const response = await api.post('/users/sessions', data);

    console.log(response.data);
  }, []);

  return (
    <Container>
      <Content>
        <Title>Sign In</Title>

        <FormContainer>
          <Form onSubmit={handleSignIn}>
            <Input name="email" type="text" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />
            <Button type="submit">Sign In</Button>
          </Form>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
