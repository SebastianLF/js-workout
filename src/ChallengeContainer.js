import React from 'react';
import Challenge from './Challenge.js'
import { generateSerie } from './topics.js'

const style = {
  width: '800px',
  height: '500px',
  border: 0,
  borderRadius: '4px',
  overflow: 'hidden',
  margin: '0 auto'
}

class ChallengeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [
        { id: "19078", description: "Rewrite reduce function.", initialCode: "function reduce() {}", source: "Tyler Mcginnis", tests: [] }
      ],
      draftCode: '',
      challengesCompleted: []
    }
  }

  handleCodeChange(editor, data, value) {
    this.setState({ draftCode: value })
  }

  verifyChallenge() {
    try {
      const fn = eval("(" + this.state.draftCode + ")") //disable
      alert(fn(2, 1))

    } catch (error) {
      alert(error)
    }



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
      source={currentChallenge.source} />;
  }

  render() {
    const currentChallenge = this.currentChallenge()

    return (
      <iframe
        src="https://codesandbox.io/embed/new?codemirror=1&moduleview=1&view=editor&hidenavigation=1&previewwindow=tests"
        title="new"
        style={style}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
      </iframe>
    )
  }

}

export default ChallengeContainer
