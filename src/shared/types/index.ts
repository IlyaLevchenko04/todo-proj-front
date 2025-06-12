// User type
export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: Role;
};

// Role in a todo list
export type Role = 'Admin' | 'Viewer';

// Collaborator type
export type Collaborator = {
  userId: string;
  role: Role;
};

// Task type
export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

// To-Do List type
export type TodoList = {
  id: string;
  title: string;
  ownerId: string; // creator's user id
  collaborators: Collaborator[];
  tasks: Task[];
  createdAt: string;
  updatedAt: string;
};
