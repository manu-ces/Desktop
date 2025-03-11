import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../src/components/TaskItem';

const mockTask = { id: 1, text: 'Test Task', completed: false };

test('toggle the task completion while clicking the toggle button', () => {
  const toggleTask = jest.fn();
  const deleteTask = jest.fn();

  render(<TaskItem item={mockTask} toggleTask={toggleTask} deleteTask={deleteTask} />);

  fireEvent.click(screen.getByRole('checkbox'));

  expect(toggleTask).toHaveBeenCalledWith(1);
});



test('It should delete the task when we click the delete button', () => {
  const toggleTask = jest.fn();
  const deleteTask = jest.fn();

  render(<TaskItem item={mockTask} toggleTask={toggleTask} deleteTask={deleteTask} />);

  fireEvent.click(screen.getByText('Delete'));

  expect(deleteTask).toHaveBeenCalledWith(1);
});