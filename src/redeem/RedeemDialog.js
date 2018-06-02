import { Dialog, Button, Preloader } from 'reactackle'
import React from 'react'
import GitHubIcon from 'react-icons/lib/fa/github'
import ArrowForward from 'react-icons/lib/fa/angle-right'

import { firebase } from '../firebase'

export function RedeemDialog ({ onClose }) {
  return (
    <Dialog
      haveCloseButton
      backdrop
      title="Redeem ticket"
      buttons={[{ text: 'Close', onPress: onClose }]}
      open
      closeOnEscape
      onClose={onClose}
    >
      <RedeemDialogContent />
    </Dialog>
  )
}

class RedeemDialogContent extends React.Component {
  state = {
    status: 'initial',
    error: '',
    code: '',
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
      this.setState({ status: 'checked', code: data && data.code })
    } catch (e) {
      this.setState({ status: 'error', error: `Unknown error: ${e}` })
    }
  }

  openEventPop = () => {
    window.open('https://www.eventpop.me/e/3607-react-bangkok-3-0-0', '_blank')
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
      return <Preloader kind="linear" labelAlign="center" subtitle="Signing in..." indeterminate />
    }
    if (this.state.status === 'checking') {
      return (
        <Preloader
          kind="linear"
          labelAlign="center"
          subtitle="Looking for your ticket..."
          indeterminate
        />
      )
    }
    if (this.state.status === 'checked') {
      if (!this.state.code) {
        return (
          <div>
            <p>Sorry, we cannot find the ticket associated with your account...</p>
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
            text="Get your free ticket!"
            subtitle="Go to Event Pop"
            colorScheme="primary"
            iconPositionRight
            icon={<ArrowForward />}
            onPress={this.openEventPop}
          />
        </div>
      )
    }
    return (
      <div>
        <p>To redeem your ticket, please first sign in with GitHub...</p>
        <Button
          text="Sign in with GitHub"
          colorScheme="primary"
          size="large"
          icon={<GitHubIcon />}
          onPress={this.signIn}
        />
      </div>
    )
  }
}
