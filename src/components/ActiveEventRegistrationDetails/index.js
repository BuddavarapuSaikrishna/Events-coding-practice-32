// Write your code here
import './index.css'

const apiStatus = {
  RegistrationsClosed: 'REGISTRATIONS_CLOSED',
  YetToRegister: 'YET_TO_REGISTER',
  Registered: 'REGISTERED',
}

const ActiveEventRegistrationDetails = props => {
  const {myStatus} = props

  const renderRegistrationClosed = () => (
    <div>
      <img
        className="registrations-closed-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registration soon!</p>
    </div>
  )

  const renderRegistrations = () => (
    <div>
      <img
        className="registered-image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderYetToRegister = () => (
    <div>
      <img
        className="yet-to-register-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance.</p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderNoActiveView = () => (
    <p>Click on an event, to view its registration details</p>
  )

  const renderActiveRegistrationDetails = () => {
    switch (myStatus) {
      case apiStatus.Registered:
        return renderRegistrations()
      case apiStatus.YetToRegister:
        return renderYetToRegister()
      case apiStatus.RegistrationsClosed:
        return renderRegistrationClosed()
      default:
        return renderNoActiveView()
    }
  }

  return <div>{renderActiveRegistrationDetails()}</div>
}

export default ActiveEventRegistrationDetails
