import React, { useState } from 'react';

function MaikohBoulder() {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the entered username using the 'username' state variable
    console.log(username);
  };

  return (
    <div>
      <h1>Maikoh Boulder</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Instagram Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MaikohBoulder;