// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  textBtn = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const textBtn = this.textBtn()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="greeting">Thank you! Happy Learning</p>
        <button className="sub-btn" type="button" onClick={this.onSubscribe}>
          {textBtn}
        </button>
      </div>
    )
  }
}

export default Welcome
