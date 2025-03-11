import React from 'react';
import { Input, Button, Space } from 'antd';

export default function TaskForm({ task, setTask, addTask }) {
  return (
    <Space style={{ marginBottom: '20px' }}>
      <Input 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <Button type="primary" onClick={addTask}>
        Add Task
      </Button>
    </Space>
  );
}