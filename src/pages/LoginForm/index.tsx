import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from '@tanstack/react-router';

interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const validate = (values: LoginFormValues) => {
    const errors: Partial<LoginFormValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      errors.email = 'Invalid email';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'Too short';
    }

    return errors;
  };

  const handleSubmit = (values: LoginFormValues) => {
    console.log('Login form submitted:', values);
    // Add login logic here
  };

  return (
    <div className="w-full px-4 phone-m:px-6 tablet:px-8 max-w-t-container mx-auto mt-10">
      <div className="bg-white p-6 phone-m:p-8 rounded-xl shadow-md">
        <h2 className="text-xl tablet:text-2xl font-semibold text-center mb-6">
          Login
        </h2>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-black rounded-md hover:bg-blue-700 transition"
            >
              Sign In
            </button>
            <span className="flex gap-[4px]">
              If you dont have an account yet - click here
              <Link to="/auth/register">Register</Link>
            </span>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
