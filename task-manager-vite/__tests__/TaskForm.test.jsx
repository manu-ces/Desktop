import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../src/components/TaskForm';

test('when add button is clicked  new task should be added.', () => {
  const addTask = jest.fn();
  const setTask = jest.fn();

  render(<TaskForm task="New Task" setTask={setTask} addTask={addTask} />);

  fireEvent.click(screen.getByText('Add Task'));

  expect(addTask).toHaveBeenCalledTimes(1);
});