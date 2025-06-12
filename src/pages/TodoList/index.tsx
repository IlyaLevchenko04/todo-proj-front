import { Container } from '@/shared/components/Container';
import { Section } from '@/shared/components/Section';
import { TodoCard } from '@/shared/components/TodoCard';
import { MOCK_DATA } from '@/shared/constants/mockData';
import { Link } from '@tanstack/react-router';

export const TodoList = () => {
  return (
    <Section>
      <Container className="relative">
        <Link
          to="/todo/create"
          className="rounded-full font-extrabold py-[8px] px-[16px] bg-cyan-100 border-[1px] border-solid border-cyan-700 absolute top-[0] right-[10%]"
        >
          +
        </Link>
        <h1 className="mb-[24px]">Todo List:</h1>
        <div className="grid tablet:grid-cols-2 tablet-vertical:grid-cols-3 gap-[16px]">
          {MOCK_DATA.map(todo => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              completed={todo.completed}
              onToggleCompleted={() =>
                console.log(`Toggle todo with id: ${todo.id}`)
              }
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
