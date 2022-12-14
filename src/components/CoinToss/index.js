import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHead: true, totalCount: 0, headsCount: 0, tailsCount: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalCount: prevState.totalCount + 1,
        headsCount: prevState.headsCount + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(prevState => ({
        isHead: false,
        totalCount: prevState.totalCount + 1,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {isHead, totalCount, headsCount, tailsCount} = this.state
    const imageSrc = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="toss-game-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="game-name">Heads (or) Tails</p>
          <img src={imageSrc} className="coin-img" alt="toss result" />
          <button type="button" className="toss-button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="result-text">Total: {totalCount}</p>
            <p className="result-text">Heads: {headsCount}</p>
            <p className="result-text">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
