import React from 'react';
import superagent from 'superagent'

class App extends React.Component {
  state = {
    text: ''
  }

  stream = new EventSource('http://localhost:4000/stream')

  componentDidMount () {
    this.stream.onmessage = function (event) {
      console.log('event.data test:', event.data)
    }
  }

  onSubmit = async event => {
    event.preventDefault()

    try {
      const response = await superagent
        .post('http://localhost:4000/message')
        .send({ text: this.state.text })

      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  onChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  reset = () => {
    this.setState({ text: '' })
  }

  render () {
    return <main>
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          onChange={this.onChange}
          value={this.state.text}
        />
        <button>Send</button>

        <button onClick={this.reset}>
          Reset
        </button>
      </form>
    </main>
  }
}

export default App;
