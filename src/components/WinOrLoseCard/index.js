// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWonGame, resetGame, score} = props
  const imageUrl = isWonGame
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const scoreLabel = isWonGame ? 'Best Score' : 'Score'
  const status = isWonGame ? 'You Won' : 'You Lose'

  return (
    <div className="win-or-loss-card-container">
      <div className="image-container">
        <img src={imageUrl} alt="win or lose" className="card-img" />
      </div>
      <div className="card-details-contaier">
        <h1 className="status-heading">{status}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="final-score">{score}/12</p>
        <button className="play-again-button" type="button" onClick={resetGame}>
          Play Again
        </button>
      </div>
    </div>
  )
}
export default WinOrLoseCard
