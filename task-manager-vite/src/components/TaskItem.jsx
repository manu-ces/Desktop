
import React from 'react';
import { List, Checkbox, Button, Input } from 'antd';
import { useState } from 'react';

export default function TaskItem({ item, toggleTask, deleteTask }) {

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);

    const handleSave = () => {
        item.text = text;
        setIsEditing(false);
    };

    return (
        <List.Item
          actions={[
            <Checkbox 
              checked={item.completed} 
              onChange={() => toggleTask(item.id)}
            />,
            isEditing ? (
              <Button type="link" onClick={handleSave}>Save</Button>
            ) : (
              <Button type="link" onClick={() => setIsEditing(true)}>Edit</Button>
            ),
            <Button 
              danger 
              onClick={() => deleteTask(item.id)}
            >
              Delete
            </Button>
          ]}
        >
          {isEditing ? (
            <Input value={text} onChange={(e) => setText(e.target.value)} />
          ) : (
            item.text
          )}
        </List.Item>
      );
}