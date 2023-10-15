import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerateButton = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onApplyButton = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img"
          alt="speedometer"
        />

        <h1 className="speed-counter">Speed is {speed}mph</h1>
        <p className="descripton">Min Limit is 0mph, Max Limit is 200mph</p>

        <div>
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.onAccelerateButton}
          >
            Accelerate
          </button>
          <button
            className="apply-btn"
            type="button"
            onClick={this.onApplyButton}
          >
            {' '}
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
