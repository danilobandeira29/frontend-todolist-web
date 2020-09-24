import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { HeaderContainer, Header, Container, HeaderContent } from './styles';

interface ITodos {
  id: string;
  todo: string;
}

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  const [todos, setTodos] = useState<ITodos[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleCreateTodo = useCallback(async () => {
    const response = await api.post('/todos', { todo: inputValue });

    setInputValue('');
    setTodos([...todos, response.data]);
  }, [todos, inputValue]);

  const handleRemoveTodo = useCallback(
    async (id: string) => {
      await api.delete(`/todos/${id}`);

      const filterTodos = todos.filter(todo => todo.id !== id);
      setTodos(filterTodos);
    },
    [todos],
  );

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
            <p>Welcome,</p>
            <strong>{user.name}</strong>
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
            value={inputValue}
            placeholder="New todo"
            type="text"
            onChange={e => setInputValue(e.target.value)}
          />
          <button type="button" onClick={handleCreateTodo}>
            Create
          </button>
        </HeaderContent>

        {todos.length === 0 ? (
          <p>No todos</p>
        ) : (
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                {todo.todo}
                <button type="button" onClick={() => handleRemoveTodo(todo.id)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
