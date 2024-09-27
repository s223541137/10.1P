import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import Button from './Button';


function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend
      const response = await fetch('http://localhost:8001/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message); // Success message from the backend
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <form 
      className="signup-form" 
      style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', padding: '10px', border: '1px solid #ccc' }} 
      onSubmit={handleSubmit}
    >
      <span className="signup-text" style={{ fontWeight: 'bold', marginRight: '10px' }}>
        SIGN UP FOR OUR DAILY INSIDER
      </span>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '5px', marginRight: '5px', border: '1px solid #ccc', width: 'auto' }}
        required
      />
      <Button
        type="submit"
        text="Subscribe"
        style={{ padding: '5px 10px', backgroundColor: '#ddd', border: '1px solid #999', cursor: 'pointer' }}
      />
      <p>{message}</p> {/* Display success or error message */}
    </form>
  );
}

export default SubscribeSection;
