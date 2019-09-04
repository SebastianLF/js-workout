import React from 'react';
import { Header, Icon, Segment, Select } from 'semantic-ui-react'
import { topics } from './utils/data'

const Focus = () => {
  return (<Segment placeholder>
    <Header icon>
      <Icon name='search' />
      Choose the topic you want to exercise.
    </Header>
    <Segment.Inline>
      <Select placeholder='Select your topic' options={topics} />
    </Segment.Inline>
  </Segment>)
}

export default Focus;
