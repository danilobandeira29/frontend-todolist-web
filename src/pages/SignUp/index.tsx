import React from 'react';
import { Container, Title, Content, Form, Input, Button } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Sign Up</Title>
        <Form onSubmit={() => {}}>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Sign Up</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
