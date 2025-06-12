import type { TodoList, User } from '../types';

export const users: User[] = [
  {
    id: 'user1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    passwordHash: 'hashed_password_1',
    role: 'Admin',
  },
  {
    id: 'user2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    passwordHash: 'hashed_password_2',
    role: 'Admin',
  },
  {
    id: 'user3',
    name: 'Carol Williams',
    email: 'carol@example.com',
    passwordHash: 'hashed_password_3',
    role: 'Viewer',
  },
];

export const MOCK_DATA = [
  {
    id: 'task3',
    title: 'Buy groceries',
    description: 'Milk, Bread, Eggs, Coffee',
    completed: false,
    createdAt: '2025-06-10T09:00:00Z',
    updatedAt: '2025-06-10T09:00:00Z',
  },
  {
    id: 'task4',
    title: 'Call plumber',
    description: 'Fix kitchen sink leak',
    completed: false,
    createdAt: '2025-06-11T11:30:00Z',
    updatedAt: '2025-06-11T11:30:00Z',
  },
  {
    id: 'task1',
    title: 'Prepare presentation',
    description: 'Create slides for Monday meeting',
    completed: false,
    createdAt: '2025-06-01T08:00:00Z',
    updatedAt: '2025-06-01T08:00:00Z',
  },
  {
    id: 'task2',
    title: 'Review project proposal',
    description: 'Check feasibility and budget',
    completed: true,
    createdAt: '2025-05-28T10:00:00Z',
    updatedAt: '2025-06-02T12:00:00Z',
  },
];

export const todoLists: TodoList[] = [
  {
    id: 'list1',
    title: 'Work Projects',
    ownerId: 'user1',
    collaborators: [
      { userId: 'user1', role: 'Admin' },
      { userId: 'user2', role: 'Viewer' },
    ],
    tasks: [
      {
        id: 'task1',
        title: 'Prepare presentation',
        description: 'Create slides for Monday meeting',
        completed: false,
        createdAt: '2025-06-01T08:00:00Z',
        updatedAt: '2025-06-01T08:00:00Z',
      },
      {
        id: 'task2',
        title: 'Review project proposal',
        description: 'Check feasibility and budget',
        completed: true,
        createdAt: '2025-05-28T10:00:00Z',
        updatedAt: '2025-06-02T12:00:00Z',
      },
    ],
    createdAt: '2025-05-20T07:00:00Z',
    updatedAt: '2025-06-02T12:00:00Z',
  },
  {
    id: 'list2',
    title: 'Personal Errands',
    ownerId: 'user3',
    collaborators: [{ userId: 'user3', role: 'Admin' }],
    tasks: [
      {
        id: 'task3',
        title: 'Buy groceries',
        description: 'Milk, Bread, Eggs, Coffee',
        completed: false,
        createdAt: '2025-06-10T09:00:00Z',
        updatedAt: '2025-06-10T09:00:00Z',
      },
      {
        id: 'task4',
        title: 'Call plumber',
        description: 'Fix kitchen sink leak',
        completed: false,
        createdAt: '2025-06-11T11:30:00Z',
        updatedAt: '2025-06-11T11:30:00Z',
      },
    ],
    createdAt: '2025-06-01T06:00:00Z',
    updatedAt: '2025-06-11T11:30:00Z',
  },
];
