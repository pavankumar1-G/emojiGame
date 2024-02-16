import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {clickedEmojiList: [], isGameInProgress: true, topScore: 0}

  resetGame = () => {
    this.setState({clickedEmojiList: [], isGameInProgress: true})
  }

  renderFinalScoreCard = () => {
    const {clickedEmojiList} = this.state
    const {emojisList} = this.props
    const isWonGame = clickedEmojiList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWonGame={isWonGame}
        score={clickedEmojiList.length}
        resetGame={this.resetGame}
      />
    )
  }

  exitGameAndShowTopScore = progressedScore => {
    const {topScore} = this.state
    let newScore = topScore
    if (progressedScore > newScore) {
      newScore = progressedScore
    }
    this.setState({topScore: newScore, isGameInProgress: false})
  }

  clickedEmoji = id => {
    const {clickedEmojiList} = this.state
    const {emojisList} = this.props
    const isEmojiPresent = clickedEmojiList.includes(id)
    const clickedEmojiListLength = clickedEmojiList.length

    if (isEmojiPresent) {
      this.exitGameAndShowTopScore(clickedEmojiListLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiListLength) {
        this.exitGameAndShowTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emoji-list-container">
        {shuffledEmojisList.map(eachEmojiObj => (
          <EmojiCard
            key={eachEmojiObj.id}
            eachEmojiObjDetails={eachEmojiObj}
            clickedEmoji={this.clickedEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojiList, isGameInProgress, topScore} = this.state

    return (
      <div className="app-container">
        <nav className="nav-bar-container">
          <NavBar
            progressingScore={clickedEmojiList.length}
            isGameInProgress={isGameInProgress}
            topScore={topScore}
          />
        </nav>

        <div className="emoji-game-space">
          {isGameInProgress
            ? this.renderEmojiList()
            : this.renderFinalScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
