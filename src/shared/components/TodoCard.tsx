import { Link } from '@tanstack/react-router';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type TodoCardProps = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  onToggleCompleted: () => void;
};

export const TodoCard: React.FC<TodoCardProps> = ({
  id,
  title,
  description,
  completed,
  onToggleCompleted,
}) => {
  return (
    <div
      className={twMerge(
        'p-4 rounded-md shadow-sm border',
        completed ? 'bg-green-50 border-green-300' : 'bg-white border-gray-200'
      )}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggleCompleted}
        className="mt-1 h-5 w-5 text-green-600 rounded focus:ring-green-500 cursor-pointer "
      />
      <Link
        to="/todo/$todoId"
        params={{ todoId: id }}
        className={`flex items-start space-x-3`}
      >
        <div className="flex-1">
          <h3
            className={`text-lg font-medium ${
              completed ? 'line-through text-gray-400' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
          {description && (
            <p
              className={`mt-1 text-sm ${
                completed ? 'line-through text-gray-400' : 'text-gray-600'
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};
