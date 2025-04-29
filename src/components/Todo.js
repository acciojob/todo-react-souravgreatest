import React, { useEffect, useState } from 'react';

const Todo = ({ data }) => {
  const [item, setItem] = useState(data);

  useEffect(() => {
    setItem(data);
  }, [data]);

  const handleDelete = (index) => {
    const updatedItems = item.filter((_, i) => i !== index);
    setItem(updatedItems);
  };

  return (
    <ul>
      {item.map((ele, id) => (
        <li key={id} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <span>{ele}</span>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
