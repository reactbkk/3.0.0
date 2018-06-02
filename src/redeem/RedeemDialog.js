import { Dialog, Button, Preloader } from 'reactackle'
import React from 'react'
import GitHubIcon from 'react-icons/lib/fa/github'
import ArrowForward from 'react-icons/lib/fa/angle-right'
import axios from 'axios'

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
    admin: false,
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
      const adminPanel = this.state.admin && (
        <div>
          <p>
            Hey you are an admin! You can{' '}
            <Button onPress={this.giveCode} text="give redemption codes!" />
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
            text="Get your free ticket!"
            subtitle="Go to Event Pop"
            colorScheme="primary"
            iconPositionRight
            icon={<ArrowForward />}
            onPress={this.openEventPop}
          />
          {adminPanel}
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
        .update({
          code: redemptionCode,
          username,
        })
      window.alert(`OK done.\n\nusername=${username}\nid=${id}\ncode=${redemptionCode}`)
    } catch (e) {
      window.alert(`Cannot giveCode: ${e}.`)
    }
  }
}
