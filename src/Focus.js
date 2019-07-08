import React from 'react';
import { Header, Icon, Segment, Select } from 'semantic-ui-react'

const Focus = () => {
  const options = [
    { key: '1', value: '1', text: 'Rewrite js functions' },
    { key: '2', value: '2', text: '`this` keyword' },
    { key: '3', value: '3', text: 'Array manipulation' },
    { key: '4', value: '4', text: 'Equality operators' }
  ]

  return (<Segment placeholder>
    <Header icon>
      <Icon name='search' />
      Choose the topic you want to train for.
    </Header>
    <Segment.Inline>
      <Select placeholder='Select your topic' options={options}/>
    </Segment.Inline>
  </Segment>)
}

export default Focus;
