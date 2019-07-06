import React from 'react';
import Challenge from './Challenge.js'

class ChallengeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [
        {id: "19078", description: "Rewrite reduce function.", initialCode: "function reduce() {<br><br>}"},
        {id: "19079", description: "Rewrite map function.", initialCode: "function map() {}"}
      ],
      completed: []
    }
  }

  completeChallenge(id) {
    console.log('completed: ' + id);
    this.setState({
      completed: this.state.completed.concat(id)
    })
  }

  disableDoneButton() {

  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {
          this.state.challenges.map( ({description, initialCode, id}) => {
            return <Challenge id={id} description={description} initialCode={initialCode} completeChallenge={this.completeChallenge.bind(this)}/>;
          })
        }
      </div>
    )
  }

}

export default ChallengeContainer
