import { TodoPage } from '@/pages';

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <TodoPage />;
}
