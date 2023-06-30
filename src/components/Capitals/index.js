import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    capitalId: countryAndCapitalsList[0].id,
  }

  updateDetails = event => {
    this.setState({capitalId: event.target.value})
  }

  render() {
    const {capitalId} = this.state

    return (
      <div className="app-cont">
        <div className="app-sub-cont">
          <h1 className="main-head">Countries And Capitals</h1>
          <div>
            <select
              onChange={this.updateDetails}
              value={capitalId}
              className="select-elem"
            >
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <span className="sub-text"> is capital of which country?</span>
          </div>
          {countryAndCapitalsList.map(
            eachItem =>
              eachItem.id === capitalId && (
                <p className="main-text">{eachItem.country}</p>
              ),
          )}
        </div>
      </div>
    )
  }
}

export default Capitals
