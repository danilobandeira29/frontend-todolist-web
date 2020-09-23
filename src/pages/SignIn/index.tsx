import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import { Container, Title, Content, FormContainer, Button } from './styles';

interface ISignInForm {
  password: string;
  email: string;
}

const SignIn: React.FC = () => {
  const handleSignIn = useCallback((data: ISignInForm): void => {
    console.log(data);
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
