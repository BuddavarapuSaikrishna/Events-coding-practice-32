// Write your code here
import './index.css'

const EventItem = props => {
  const {EventsDetails, ClickEvent} = props
  const {imageUrl, name, location, registrationStatus} = EventsDetails

  const onClickImage = () => {
    ClickEvent(registrationStatus)
  }
  return (
    <li className="event-items-display-container">
      <button type="button" className="event-button" onClick={onClickImage}>
        <img src={imageUrl} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
