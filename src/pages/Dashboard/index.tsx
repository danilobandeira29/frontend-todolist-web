import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { HeaderContainer, Header, Container, HeaderContent } from './styles';

interface ITodos {
  id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  const [todos, setTodos] = useState<ITodos[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleCreateTodo = useCallback(async () => {
    const response = await api.post('/todos', inputValue);

    setTodos([...todos, response.data]);
  }, [todos, inputValue]);

  useEffect(() => {
    async function loadTodos() {
      const response = await api.get('/todos');

      setTodos(response.data);
    }

    loadTodos();
  }, []);

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
          <input
            placeholder="New todo"
            type="text"
            onChange={e => setInputValue(e.target.value)}
          />
          <button type="button" onClick={handleCreateTodo}>
            Create
          </button>
        </HeaderContent>

        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.name}
              <button type="button">Remover</button>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Dashboard;
