import React from 'react'
import ModalDialog from '@atlaskit/modal-dialog'
import Spinner from '@atlaskit/spinner'
import Banner from '@atlaskit/banner'
import TextField from '@atlaskit/field-text'
import { performCheckIn } from './performCheckin'

export class CheckinDialog extends React.Component {
  state = {
    error: null,
    errorText: '',
    success: false,
    attendee: null,
    loading: false,
  }

  render () {
    return (
      <ModalDialog
        actions={[
          ...(this.state.success ? [] : [{ text: 'Check in', onClick: this.checkIn }]),
          { text: 'Close', onClick: this.props.onClose },
        ]}
        heading="Self check-in"
        onCloseComplete={this.props.onClose}
        shouldCloseOnOverlayClick={false}
      >
        {this.renderContent()}
      </ModalDialog>
    )
  }

  renderContent () {
    if (this.state.success) {
      const info = this.state.attendee.info || {}
      return (
        <div>
          <div>Welcome to React Bangkok 3.0.0!</div>
          <br />
          <div>
            <strong>{info.name}</strong>
          </div>
          <div>{info.position}</div>
          <div>{info.company}</div>
          <br />
          <div>
            Thank you for checking in. Please proceed to receive your T-shirt and name tag. We hope
            you enjoy the event!
          </div>
        </div>
      )
    }
    return (
      <form
        onSubmit={this.onSubmit}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            e.preventDefault()
            this.checkIn()
          }
        }}
        ref={form => {
          this.form = form
        }}
      >
        <TextField
          isInvalid={this.state.error === 'refCode'}
          name="refCode"
          label="Ticket reference code"
          placeholder="ABCDEF"
        />
        <TextField
          isInvalid={this.state.error === 'totp'}
          name="totp"
          label="TOTP code (shown at kiosk)"
          placeholder="123456"
        />
        {!!this.state.loading && <Preloader text="Checking in..." />}
        <div style={{ marginTop: 20 }}>
          <Banner isOpen={!!this.state.error} appearance="error">
            Cannot check in: {this.state.errorText}
          </Banner>
        </div>
      </form>
    )
  }

  onSubmit = e => {
    e.preventDefault()
    this.checkIn()
  }

  checkIn = async () => {
    if (this.state.loading || this.state.success) return
    this.setState({ loading: true, error: null })
    try {
      if (!this.form) return
      const refCode = this.form.refCode.value
      const totp = this.form.totp.value
      if (!refCode) {
        this.setState({ error: 'refCode', errorText: 'Ticket reference code is required.' })
        return
      }
      if (!totp) {
        this.setState({ error: 'totp', errorText: 'TOTP is required.' })
        return
      }
      const result = await performCheckIn(refCode, totp, 'reactbkk3')
      if (result.error === 'EREF') {
        this.setState({
          error: 'refCode',
          errorText:
            'Ticket reference code is not recognized. Please double-check your reference code.',
        })
        return
      }
      if (result.error === 'ETOKEN') {
        this.setState({
          error: 'refCode',
          errorText: 'TOTP code is incorrect. You can find the TOTP code at the checkin kiosk.',
        })
        return
      }
      if (!result.attendee) {
        throw new Error('Expected field "attendee" to be present in result')
      }
      this.setState({
        success: true,
        attendee: result.attendee,
      })
    } catch (e) {
      this.setState({ error: 'unknown', errorText: `UNEXPECTED ERROR — ${e}` })
    } finally {
      this.setState({ loading: false })
    }
  }
}

function Preloader ({ text }) {
  return (
    <div css={{ marginTop: '20px' }}>
      <span css={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <Spinner />
      </span>{' '}
      {text}
    </div>
  )
}
