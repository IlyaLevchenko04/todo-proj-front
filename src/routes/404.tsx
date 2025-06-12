import { NotFoundPage } from '@/pages/NotFound';

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <NotFoundPage />;
}
