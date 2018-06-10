import React from 'react'
import GitHubIcon from 'react-icons/lib/fa/github'
import ArrowForward from 'react-icons/lib/fa/angle-right'
import Button from '@atlaskit/button'
import ModalDialog from '@atlaskit/modal-dialog'
import Spinner from '@atlaskit/spinner'
import axios from 'axios'

import { firebase } from '../firebase'

export function RedeemDialog ({ onClose, initialState }) {
  return (
    <ModalDialog
      actions={[{ text: 'Close', onClick: onClose }]}
      heading="Redeem ticket"
      onCloseComplete={onClose}
      shouldCloseOnOverlayClick={false}
    >
      <RedeemDialogContent initialState={initialState} />
    </ModalDialog>
  )
}

class RedeemDialogContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = props.initialState || {
      status: 'initial',
      error: '',
      code: '',
      admin: false,
    }
  }

  render () {
    if (this.state.status === 'error') {
      return (
        <div>
          <p css={{ color: 'red' }}>
            <strong>Error:</strong> {this.state.error}
          </p>
        </div>
      )
    }
    if (this.state.status === 'signingIn') {
      return this.renderSignInPage({ loading: true })
    }
    if (this.state.status === 'checking') {
      return <Preloader text="Looking for your ticket..." />
    }
    if (this.state.status === 'checked') {
      const adminPanel = this.state.admin && (
        <div>
          <p>
            Hey you are an admin! You can{' '}
            <Button onClick={this.giveCode}>give redemption codes!</Button>
          </p>
        </div>
      )
      if (!this.state.code) {
        return (
          <div>
            <p>Sorry, we cannot find the ticket associated with your account...</p>
            {adminPanel}
          </div>
        )
      }
      return (
        <div>
          <p>Congratulations! You receive a free ticket.</p>
          <p>
            Use the code <strong>{this.state.code}</strong> to redeem your free ticket.
          </p>
          <Button
            iconAfter={
              <Icon>
                <ArrowForward />
              </Icon>
            }
            appearance="primary"
            onClick={this.openEventPop}
          >
            Get your free ticket! (Go to Event Pop)
          </Button>
          {adminPanel}
        </div>
      )
    }
    return this.renderSignInPage({ loading: false })
  }

  renderSignInPage ({ loading }) {
    return (
      <div>
        <p>To redeem your ticket, please first sign in with GitHub...</p>
        <Button
          isLoading={loading}
          appearance="primary"
          size="large"
          iconBefore={
            <Icon>
              <GitHubIcon />
            </Icon>
          }
          onClick={loading ? undefined : this.signIn}
        >
          Sign in with GitHub
        </Button>
      </div>
    )
  }

  signIn = async () => {
    this.setState({ status: 'signingIn' })
    try {
      let result
      try {
        result = await firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
      } catch (e) {
        this.setState({ status: 'error', error: `Cannot sign in: ${e}` })
        return
      }
      const uid = result.user.providerData[0].uid
      let document
      this.setState({ status: 'checking' })
      try {
        document = await firebase
          .firestore()
          .collection('github_users')
          .doc(uid)
          .get()
      } catch (e) {
        this.setState({ status: 'error', error: `Cannot check: ${e}` })
        return
      }
      const data = document.data()
      this.setState({ status: 'checked', code: data && data.code, admin: data && data.admin })
    } catch (e) {
      this.setState({ status: 'error', error: `Unknown error: ${e}` })
    }
  }

  openEventPop = () => {
    window.open('https://www.eventpop.me/e/3607-react-bangkok-3-0-0', '_blank')
  }

  giveCode = async () => {
    const username = window.prompt('Enter GitHub username')
    if (!username) {
      window.alert('Aborting.')
      return
    }
    try {
      const data = (await axios.get(`https://api.github.com/users/${username}`)).data
      if (!data) throw new Error('No response from GitHub')
      if (!data.id) throw new Error('No user ID data found')
      const id = data.id
      window.alert(`Found GitHub user id = ${id}.`)
      const redemptionCode = window.prompt('Enter redemption code')
      if (!redemptionCode) {
        window.alert('Aborting.')
        return
      }
      await firebase
        .firestore()
        .collection('github_users')
        .doc(String(id))
        .set(
          {
            code: redemptionCode,
            username,
          },
          { merge: true }
        )
      window.alert(`OK done.\n\nusername=${username}\nid=${id}\ncode=${redemptionCode}`)
    } catch (e) {
      window.alert(`Cannot giveCode: ${e}.`)
    }
  }
}

function Preloader ({ text }) {
  return (
    <div>
      <span css={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <Spinner />
      </span>{' '}
      {text}
    </div>
  )
}

function Icon ({ children }) {
  return <span css={{ fontSize: '1rem' }}>{children}</span>
}
