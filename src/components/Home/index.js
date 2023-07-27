// Write your code here
import {Component} from 'react'

import './index.css'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {Login: false}

  onClickButton = () => {
    const {login} = this.state
    if (login === false) {
      this.setState({login: true})
    } else {
      this.setState({login: false})
    }
  }

  render() {
    const {login} = this.state
    console.log(login)
    return (
      <div className="bg-container">
        <div className="card-container">
          <Message isLogin={login} />
          {login ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
