import React, { useEffect, useState } from 'react';

const Todo = ({ data }) => {
  const [item, setItem] = useState(data);

  // Update local state if parent sends new data
  useEffect(() => {
    setItem(data);
  }, [data]);

  // Delete handler
  const handleDelete = (index) => {
    const updatedItems = item.filter((_, i) => i !== index);
    setItem(updatedItems);
  };

  return (
    <div>
      {
        item.map((ele, id) => (
          <div key={id} style={{ marginTop: '10px' }}>
            <span style={{ marginRight: '500px' }}>{ele}</span>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
};

export default Todo;
