import React from 'react';
import DataFetch from './DataFetch';

const FetchApp = () => (
  <div>
    <h1>Render Prop Component</h1>
    <DataFetch url="https://www.google.com">
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        return (
          <div>
            <h2>Fetched Data:</h2>
            <ul>
              {data.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        );
      }}
    </DataFetch>
  </div>
);

export default FetchApp;
