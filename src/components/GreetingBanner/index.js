import React, { useState, useEffect } from 'react';

export default function GreetingBanner() {
  const [greetingString, setGreetingString] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGreeting() {
      try {
        const response = await fetch('/api/greet');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        
        const data = await response.json(); // Parse JSON from response

        setGreetingString(data.value);
      } catch (error) {
        console.error('Error fetching greeting:', error);
      } finally {
        setLoading(false); // Stop loading once fetch is complete
      }
    }

    fetchGreeting();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="container">
        Hello!

        {greetingString ? (
        <p>{greetingString}</p>
      ) : (
        <p>No greeting available.</p>
      )}
        
      </div>
    </section>
  );
}


