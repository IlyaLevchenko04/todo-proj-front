import { TodoList } from '@/pages/TodoList';

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <TodoList />;
}
