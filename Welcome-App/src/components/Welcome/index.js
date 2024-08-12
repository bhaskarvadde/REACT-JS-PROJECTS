import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Welcome</h1>
          <p className="description">Thank you! Happy Learning</p>
          <button className="button" onClick={this.onSubscribe}>
            {isSubscribed ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
