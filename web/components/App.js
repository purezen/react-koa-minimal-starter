import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCurrencyList()
  }

  render() {
    const currencyList = this.props.currencyList.map((c) => <div>{c.name}</div>)

    return (
      <div>
        <strong>Currency List</strong>
        {currencyList}
      </div>
    )
  }
}

export default App
