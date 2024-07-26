import React from 'react'
import { useState, useEffect } from 'react';
import './UseEffectDataFetchingComponent.css'

const UseEffectDataFetchingComponent = () => {
    // State to store the fetched data
  const [data, setData] = useState([]);
  // State to store the loading state
  const [loading, setLoading] = useState(true);
  // State to store the error
  const [error, setError] = useState(null);

  // useEffect hook for fetching data
  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Make an API request
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // Check if the response is OK
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON data
        const data = await response.json();
        // Update the state with the fetched data
        setData(data);
      } catch (error) {
        // Handle any errors
        setError(error.message);
      } finally {
        // Set loading to false when the request is complete
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();

    // Cleanup function to run when the component unmounts
    return () => {
      //clean up side effects
      console.log('Cleaning up...');
    };
  }, []); // this effect runs once on mount

  // Render loading, error, or data
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className='fetched-users'>
      <h1>Fetched Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
  

export default UseEffectDataFetchingComponent