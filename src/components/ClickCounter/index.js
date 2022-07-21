import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          the Button has been Clicked
          <br /> <span className="counter">{count}</span>times
        </h1>

        <p className="paragraph">Click the button to increase the count!</p>
        <div>
          <button
            className="button_styling"
            type="button"
            onClick={this.onIncrementCount}
          >
            Click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
