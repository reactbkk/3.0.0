import React from 'react';

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { RedeemDialog } from './RedeemDialog'

storiesOf('RedeemDialog', module).add('Just Wrap everything', () => <RedeemDialog onClose={action('close-button-clicked')}/>)
