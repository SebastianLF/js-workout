import React from 'react';
import { Button, Segment } from 'semantic-ui-react'
import { UnControlled as CodeMirror } from 'react-codemirror2'

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

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
      <CodeMirror
        value={initialCode}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {
        }}
      />
      <p>Click the button below once it's resolved.</p>
      <Button inverted color='green' onClick={completeChallenge.bind(this, id)}>Done.</Button>
    </div>
  )

}

export default Challenge
