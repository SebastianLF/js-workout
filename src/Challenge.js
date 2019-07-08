import React from 'react';
import { Button } from 'semantic-ui-react'
import { UnControlled as CodeMirror } from 'react-codemirror2'

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const challengeStyle = {
  margin: '0 auto',
  padding: '30px 20px',
  width: '600px',
};

/* const button = {
  backgroundColor: '#2ecc71',
  border: '0px',
  color: 'white',
  padding: '5px 30px',
  outline: 'none'
} */

  const Challenge = ({ description, initialCode, verifyChallenge, source, handleCodeChange }) => {
  const codeEditor = renderCodeEditor(CodeMirror, initialCode, { mode: 'javascript', theme: 'material', lineNumbers: true }, handleCodeChange);

  return (
    <div style={ challengeStyle }>
      <h2>Challenge: { description } </h2>
      { codeEditor }
      <p>source: { source }</p>
      <Button size='huge' color='green' onClick={ verifyChallenge.bind(this) }>Test!</Button>
    </div>
  )
}

// Pure function.
const renderCodeEditor = (Component, initialCode, options, onChangeCode) => (
  <Component value={initialCode}
              options={options}
              onChange={onChangeCode}
  />
)


export default Challenge
