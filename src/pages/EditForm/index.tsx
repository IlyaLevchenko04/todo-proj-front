import { EditForm } from '@/shared/components/EditForm';
import { MOCK_DATA } from '@/shared/constants/mockData';
import { Navigate, useNavigate, useParams } from '@tanstack/react-router';
import React from 'react';

export const EditFormPage: React.FC = () => {
  const { todoId } = useParams({ from: '/todo/$todoId/edit' });
  const todo = MOCK_DATA.find(item => item.id === todoId);
  const navigate = useNavigate({ from: '/todo/$todoId/edit' });

  if (!todo) return <Navigate to="/todo" />;
  return (
    <div className="w-full px-4 phone-m:px-6 tablet:px-8 max-w-t-container mx-auto mt-8">
      <EditForm
        todo={todo}
        onSave={() => navigate({ to: '/todo/$todoId' })}
        onCancel={() => navigate({ to: '/todo/$todoId' })}
      />
    </div>
  );
};
