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

function Challenge(props) {
  return (
    <div style={challengeStyle}>
      <p>Challenge #1: <a href={props.url} target="_blank">Link</a><br/>
      Click the button below once it's resolved.</p>
      <button style={button}>Done.</button>
    </div>
  )
}

export default Challenge
