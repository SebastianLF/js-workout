import React from 'react';

function Focus() {
  return (
    <div>
      <p>Choose the topics you want to work on.</p>
      <div>
        <select>
          <option value="class">class</option>
          <option value="this">this</option>
          <option value="prototypes">prototypes</option>
        </select>
      <button>Let's go!</button>
      </div>
    </div>
  )
}

export default Focus;
