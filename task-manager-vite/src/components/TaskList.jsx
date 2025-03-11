import React from 'react';
import { List } from 'antd';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <List
      bordered
      dataSource={tasks}
      renderItem={item => (
        <TaskItem item={item} toggleTask={toggleTask} deleteTask={deleteTask} />
      )}
    />
  );
}