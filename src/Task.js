import React, { useState, useEffect } from 'react';

function Task(props) {
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  
  return (
    <div>
      <pre>
          {data ? JSON.stringify(data) : 'lOading...'}
      </pre>
    </div>
  );
}

export default Task;
