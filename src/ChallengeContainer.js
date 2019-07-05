import React from 'react';
import Challenge from './Challenge.js'

import codewars_APIKEY from './codewars_APIKEY.js'

class ChallengeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { challenges: {} }
  }

  componentDidMount() {

    const url = 'https://www.codewars.com/api/v1/code-challenges/';
    let challenge_code = '57cc847e58a06b1492000264?';
    fetch(url + challenge_code + 'access_key=' + codewars_APIKEY)
    .then( (response) => response.json() )
    .then( function(myJson) {
      console.log(myJson);
      console.log(JSON.stringify(myJson));
    })
  }

  render() {
    return <div>retour</div>
  }

}

export default ChallengeContainer
