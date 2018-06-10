import React from 'react';

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { RedeemDialog } from './RedeemDialog'

storiesOf('RedeemDialog', module)
  .add('initial', () => (
    <RedeemDialog
      onClose={action('close-button-clicked')}
      initialState={{ status: 'initial' }}
    />))
  .add('error', () => (
    <RedeemDialog
      onClose={action('close-button-clicked')}
      initialState={{ status: 'error', error: 'Error message' }}
    />))
  .add('signingIn', () => (
    <RedeemDialog
      onClose={action('close-button-clicked')}
      initialState={{ status: 'signingIn' }}
    />))
  .add('checking', () => (
    <RedeemDialog
      onClose={action('close-button-clicked')}
      initialState={{ status: 'checking' }}
    />))
  .add('checked (not found)', () => (
    <RedeemDialog
      onClose={action('close-button-clicked')}
      initialState={{ status: 'checked', code: '', admin: false }}
    />))
  .add('checked (found)', () => (
    <RedeemDialog
      onClose={action('close-button-clicked')}
      initialState={{ status: 'checked', code: 'ABCDEF', admin: false }}
    />))
  .add('checked (admin)', () => (
    <RedeemDialog
      onClose={action('close-button-clicked')}
      initialState={{ status: 'checked', code: 'ABCDEF', admin: true }}
    />))
