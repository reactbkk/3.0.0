import React from 'react'

export class Interaction extends React.Component {
  state = {
    interactive: false,
    running: false,
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({ interactive: true })
    })
  }
  onClick = async e => {
    if (this.state.running) return
    this.setState({ running: true })
    try {
      await this.props.action(e)
    } finally {
      this.setState({ running: false })
    }
  }
  render () {
    const { interactive, running } = this.state
    const { onClick } = this
    return this.props.children({
      interactive,
      running,
      onClick,
    })
  }
}
