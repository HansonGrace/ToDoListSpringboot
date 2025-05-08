import React, { useEffect, useState } from 'react';
import './ThanksPage.css';

function ThanksPage() {
  const [greeting, setGreeting] = useState('Welcome to Dark CSS!');

  useEffect(() => {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    if (firstName && lastName) {
      setGreeting(`Welcome to Dark CSS! ${firstName} ${lastName}`);
    }
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2 id="greetings">{greeting}</h2>
        <p>Your submission has been received. Thank you!</p>
      </div>
    </div>
  );
}

export default ThanksPage;
