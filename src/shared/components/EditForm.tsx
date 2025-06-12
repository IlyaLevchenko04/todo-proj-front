import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface TodoItem {
  id?: string;
  title: string;
  description: string;
  completed?: boolean;
}

interface TodoFormProps {
  todo?: TodoItem; // optional, if present → edit mode
  onCreate?: (todo: Omit<TodoItem, 'id' | 'completed'>) => void;
  onSave?: (todo: TodoItem) => void;
  onCancel?: () => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({
  todo,
  onCreate,
  onSave,
  onCancel,
}) => {
  const isEditMode = Boolean(todo);

  const initialValues = {
    title: todo?.title || '',
    description: todo?.description || '',
    completed: todo?.completed || false,
  };

  const validate = (values: typeof initialValues) => {
    const errors: Partial<typeof initialValues> = {};
    if (!values.title.trim()) {
      errors.title = 'Title is required';
    }
    return errors;
  };

  const handleSubmit = (values: typeof initialValues) => {
    if (isEditMode && onSave) {
      onSave({ id: todo!.id!, ...values });
    } else if (!isEditMode && onCreate) {
      onCreate(values);
    }
  };

  return (
    <div className="w-full px-4 phone-m:px-6 tablet:px-8 max-w-t-container mx-auto mt-8">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg tablet:text-xl font-semibold mb-5">
          {isEditMode ? 'Edit Task' : 'Create New Task'}
        </h3>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <Field
                id="title"
                name="title"
                type="text"
                placeholder="Task title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                rows={3}
                placeholder="Additional details (optional)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              />
            </div>

            {isEditMode && (
              <div className="flex items-center space-x-2">
                <Field
                  type="checkbox"
                  name="completed"
                  id="completed"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="completed" className="text-sm text-gray-700">
                  Mark as completed
                </label>
              </div>
            )}

            <div className="flex justify-end gap-3 pt-2">
              {onCancel && (
                <button
                  type="button"
                  onClick={onCancel}
                  className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
              )}

              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-600 text-black hover:bg-blue-700"
              >
                {isEditMode ? 'Save Changes' : 'Add Task'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
