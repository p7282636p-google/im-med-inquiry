// Target browsers: modern browsers (Chrome, Firefox, Safari, Edge)
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/ollama-endpoint');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <App data={data} />;
};

ReactDOM.render(<Main />, document.getElementById('root'));
