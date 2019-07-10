import React from 'react';
import Challenge from './Challenge.js'
import { generateSerie } from './topics.js'


class ChallengeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [
        {id: "19078", description: "Rewrite reduce function.", initialCode: "function reduce() {}", source: "Tyler Mcginnis", tests: []}
      ],
      draftCode: '',
      challengesCompleted: []
    }
  }

  handleCodeChange(value) {
    this.setState({ draftCode: value})
  }

  verifyChallenge() {

  }

  componentDidMount() {
    this.displayChallenge()
  }

  displayChallenge() {
    this.setState({ challenges: generateSerie() })
  }

  currentChallenge(index = 0) {
    const currentChallenge = this.state.challenges[index]
    return <Challenge handleCodeChange={this.handleCodeChange.bind(this)}
                      description={currentChallenge.description}
                      initialCode={currentChallenge.initialCode}
                      verifyChallenge={this.verifyChallenge.bind(this)}
                      source={currentChallenge.source}/>;
  }

  render() {
    const currentChallenge = this.currentChallenge()

    return (
      <div>
        {
          currentChallenge
        }
      </div>
    )
  }

}

export default ChallengeContainer
