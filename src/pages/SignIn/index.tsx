import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { Container, Title, Content, FormContainer, Button } from './styles';

interface ISignInForm {
  password: string;
  email: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (data: ISignInForm): Promise<void> => {
      try {
        await signIn({ email: data.email, password: data.password });
      } catch (err) {
        alert('Internal server error!');
      }
    },
    [signIn],
  );

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
        <Link to="/signup">Sign Up</Link>
      </Content>
    </Container>
  );
};

export default SignIn;
