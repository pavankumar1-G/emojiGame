// Write your code here.
import './index.css'

const NavBar = props => {
  const {isGameInProgress, topScore, progressingScore} = props

  return (
    <>
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-heading">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="scores-container">
          <p className="score">Score: {progressingScore}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </>
  )
}
export default NavBar
