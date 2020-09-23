import React from 'react';
import { Container, Title, Content, Form, Input, Button } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Sign In</Title>
        <Form onSubmit={() => {}}>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Sign In</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
