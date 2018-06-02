import React from 'react'

export class DynamicContent extends React.Component {
  state = {
    value: this.props.defaultValue,
  }
  setValue = value => this.setState({ value })
  render () {
    return this.props.children(this.state.value, this.setValue)
  }
}
