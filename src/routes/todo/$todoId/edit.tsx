export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/todo/$todoId/edit"!</div>
}
