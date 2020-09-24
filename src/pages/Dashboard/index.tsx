import React from 'react';
import { useAuth } from '../../hooks/auth';
import { HeaderContainer, Header, Container, HeaderContent } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <>
      <HeaderContainer>
        <Header>
          <div>
            <p>Bem vindo(a),</p>
            <strong>Danilo Bandeira</strong>
          </div>

          <button type="button" onClick={() => signOut()}>
            Sign out
          </button>
        </Header>
      </HeaderContainer>

      <Container>
        <h1>Create a new todo</h1>
        <HeaderContent>
          <input placeholder="New todo" type="text" />
          <button type="button">Create</button>
        </HeaderContent>

        <ul>
          <li>
            Todo1
            <button type="button">Remover</button>
          </li>
          <li>
            Todo2
            <button type="button">Remover</button>
          </li>
          <li>
            Todo3
            <button type="button">Remover</button>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Dashboard;
