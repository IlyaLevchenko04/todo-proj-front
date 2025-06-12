import { Container } from '@/shared/components/Container';
import { Section } from '@/shared/components/Section';
import { MOCK_DATA } from '@/shared/constants/mockData';
import { Link, Navigate, useNavigate, useParams } from '@tanstack/react-router';
import { useState } from 'react';

const getStatus = (status: boolean): 'Completed' | 'Not completed' =>
  status ? 'Completed' : 'Not completed';

export const TodoPage = () => {
  const [todoList, setTodoList] = useState(MOCK_DATA);
  const navigate = useNavigate({ from: '/todo/$todoId' });
  const { todoId } = useParams({ from: '/todo/$todoId/' });
  const todo = MOCK_DATA.find(item => item.id === todoId);

  const onDeleteClick = () => {
    setTodoList(p => p.filter(item => item.id !== todoId));
    navigate({ to: '/todo' });
  };

  if (!todo) return <Navigate to="/todo" />;

  return (
    <Section>
      <Container>
        <div className="flex justify-between items-center mb-[32px]">
          <div className="flex flex-col gap-[8px]">
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
          </div>

          <ul className="flex flex-col gap-[12px]">
            <li className="text-red-400 cursor-pointer" onClick={onDeleteClick}>
              Delete
            </li>
            <li className="cursor-pointer">
              <Link to={'/todo/$todoId/edit'} params={{ todoId: todoId }}>
                Update
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[8px]">
          <h2 className="font-bold">Status:</h2>
          <p>{getStatus(todo.completed)}</p>
        </div>
      </Container>
    </Section>
  );
};
