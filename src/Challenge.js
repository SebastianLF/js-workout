import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import { UnControlled as CodeMirror } from 'react-codemirror2'

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const challengeStyle = {
  margin: '0 auto',
  padding: '30px 20px',
  width: '600px'
}

const Challenge = ({ description, initialCode, verifyChallenge, source, handleCodeChange }) => {
  const options = { mode: 'javascript', theme: 'material', lineNumbers: true }

  return (
    <div style={challengeStyle}>
      <h2>Challenge: {description} </h2>
      <p>Rewrite this function as if you had to invent it.</p>
      <CodeMirror
        value={initialCode}
        options={options}
        onChange={handleCodeChange}
      />
      <p>source: {source}</p>
      <Button size='huge' color='green' onClick={verifyChallenge.bind(this)}>Test!</Button>
      <Button size='huge' color='green'><Icon name='lock' />Solution</Button>
    </div>
  )
}

export default Challenge
