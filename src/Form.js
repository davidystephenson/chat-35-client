import React from 'react';

class Form extends React.Component {
  state = {
    value: ''
  }

  onSubmit = async event => {
    event.preventDefault()

    try {
      await this.props.onSubmit(this.state.value)
    } catch (error) {
      console.error(error)
    }
  }

  onChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  reset = () => {
    this.setState({ value: '' })
  }

  render () {
    return <form onSubmit={this.onSubmit}>
      <input
        type='text'
        onChange={this.onChange}
        value={this.state.value}
      />
      <button>Send</button>

      <button onClick={this.reset}>
        Reset
      </button>
    </form>
  }
}

export default Form