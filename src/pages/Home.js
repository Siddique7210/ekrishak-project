import React from 'react';
import FetchAPI from './components/FetchApi';

function Home() {
  return (
    <div>
      <FetchAPI apiEndpoint="https://jsonplaceholder.typicode.com/posts" />
    </div>
  );
}

export default Home;
