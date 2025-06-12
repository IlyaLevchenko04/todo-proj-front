import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Header } from '@/pages/Header';
import { NotFoundPage } from '@/pages/NotFound';

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundPage,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="p-[12px] bg-white">
        <Header />
        <Outlet />
      </div>
    </React.Fragment>
  );
}
