import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}
  increment = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  decrement = () => {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }

  decrement
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.increment}>
            Increase
          </button>
          <button className="button" onClick={this.decrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
