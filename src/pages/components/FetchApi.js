import React, { useState, useEffect } from 'react';
import './FetchApi.css';

function FetchAPI() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [inputs, setInputs] = useState({ userId: '', id: '' });

  const apiGet = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setFilteredData(json);
      });
  };

  const handleChange = event => {
    event.persist();
    setInputs(prevInputs => ({
      ...prevInputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    filterData();
  };

  const filterData = () => {
    const userIdToFilter = parseInt(inputs.userId, 10);
    const idToFilter = parseInt(inputs.id, 10);

    const filtered = data.filter(
      item =>
        (isNaN(userIdToFilter) || item.userId === userIdToFilter) &&
        (isNaN(idToFilter) || item.id === idToFilter)
    );

    setFilteredData(filtered);
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      <div className="center-text">
        <h1>USERS POSTS API</h1>
      </div>
      
      <div className="fetch-button">
        <div className="fetch-button-container">
          <button onClick={apiGet}>Fetch API</button>
        </div>
      </div>
      
      <div className="center-text">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="number"
            name="userId"
            placeholder="Search by userId"
            defaultValue={inputs.userId}
            onChange={handleChange}
            className="search-input"
          />
          <span className="space"></span>
          <input
            type="number"
            name="id"
            placeholder="Search by id"
            defaultValue={inputs.id}
            onChange={handleChange}
            className="search-input"
          />
          <span className="space"></span>
          <input type="Submit" value="Search" className="search-button" />
        </form>
      </div>

      <div className="card-container">
        {filteredData.map(item => (
          <div key={item.id} className="card">
            <h2>{item.title}</h2>
            <p>UserID: {item.userId}</p>
            <p>ID: {item.id}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchAPI;
