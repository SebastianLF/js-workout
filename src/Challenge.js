import React from 'react';
import { Button, Segment } from 'semantic-ui-react'
import { UnControlled as CodeMirror } from 'react-codemirror2'

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const challengeStyle = {
  margin: '0 auto',
  padding: '30px 20px',
  width: '600px',
};

const button = {
  backgroundColor: '#2ecc71',
  border: '0px',
  color: 'white',
  padding: '5px 30px',
  outline: 'none'
}

function Challenge({ description, initialCode, verifyChallenge, id, handleCodeChange, source }) {

  return (
    <div style={challengeStyle}>
      <h2>Challenge: {description}</h2>
      <CodeMirror
        value={initialCode}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={(editor, data, value) => handleCodeChange(value) }
      />
      <p>source: {source}</p>
      <Button size='huge' color='green' onClick={verifyChallenge.bind(this)}>Test!</Button>
    </div>
  )

}

export default Challenge
