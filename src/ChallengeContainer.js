import React from 'react';
import Challenge from './Challenge.js'



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

    console.log(value)
    console.log(this.state.draftCode)
  }

  verifyChallenge() {
    console.log()
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {

    return (
      <div>
        {
          this.state.challenges.map( ({description, initialCode, id, handleCodeChange, source}) => {
            return <Challenge handleCodeChange={this.handleCodeChange.bind(this)}
                              description={description}
                              initialCode={initialCode}
                              verifyChallenge={this.verifyChallenge.bind(this)}
                              source={source}/>;
          })
        }
      </div>
    )
  }

}

export default ChallengeContainer
