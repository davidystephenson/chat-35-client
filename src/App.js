import React from 'react';
import superagent from 'superagent'
import { connect } from 'react-redux'

class App extends React.Component {
  state = {
    text: ''
  }

  stream = new EventSource('https://aqueous-island-05561.herokuapp.com/stream')

  componentDidMount () {
    this.stream.onmessage = (event) => {
      // event.data is a JSON string
      // we need a real JavaScript object to use the data
      // To convert, use JSON.parse
      console.log('event.data test:', event.data)
      const parsed = JSON.parse(event.data)
      this.props.dispatch(parsed)
      console.log('parsed test:', parsed)
    }
  }

  onSubmit = async event => {
    event.preventDefault()

    try {
      const response = await superagent
        .post('https://aqueous-island-05561.herokuapp.com/message')
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
    const messages = this
      .props
      .messages
      .map(message => <p>{message}</p>)

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

      {messages}
    </main>
  }
}

function mapStateToProps (state) {
  return {
    messages: state.messages
  }
}


// export default connect(mapStateToProps)(App);

const connector = connect(mapStateToProps)
const connected = connector(App)
export default connected