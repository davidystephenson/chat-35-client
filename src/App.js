import React from 'react';
import superagent from 'superagent'

class App extends React.Component {
  onSubmit = async event => {
    event.preventDefault()

    try {
      const response = await superagent
        .post('http://localhost:4000/message')
        .send({ text: 'hardcoded' })

      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    return <main>
      <form onSubmit={this.onSubmit}>
        <input type='text' />
        <button>Send</button>
      </form>
    </main>
  }
}

export default App;
