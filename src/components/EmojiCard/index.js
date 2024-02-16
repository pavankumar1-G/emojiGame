// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmojiObjDetails, clickedEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmojiObjDetails

  const onClickEmoji = () => {
    clickedEmoji(id)
  }
  return (
    <li className="list-item-card">
      <button className="emoji-btn" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
