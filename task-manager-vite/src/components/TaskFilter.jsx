import React from 'react';
import { Select } from 'antd';

export default function TaskFilter({ filter, setFilter }) {
  return (
    <Select
      value={filter}
      onChange={setFilter}
      style={{ marginBottom: '20px', marginLeft: '10px' }}
    >
      <Select.Option value="all">All</Select.Option>
      <Select.Option value="completed">Completed</Select.Option>
      <Select.Option value="incomplete">Incomplete</Select.Option>
    </Select>
  );
}