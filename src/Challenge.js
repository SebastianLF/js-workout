import React from 'react';

const challengeStyle = {
  margin: '0 auto',
  padding: '30px 20px',
  width: '50%',
  border: '1px solid black'
};

const button = {
  backgroundColor: '#2ecc71',
  border: '0px',
  color: 'white',
  padding: '5px 30px',
  outline: 'none'
}

function Challenge({ description, initialCode, completeChallenge, id}) {

  return (
    <div style={challengeStyle}>
      <p>{description}</p>
      <code></code>
      <div contenteditable="true">{initialCode}</div>
      <p>Click the button below once it's resolved.</p>
      <button style={button} onClick={completeChallenge.bind(this, id)}>Done.</button>
    </div>
  )

}

export default Challenge
