import { Dialog } from 'reactackle'
import React from 'react'

export async function open () {
  // alert('meow')
}

export function renderDialog ({ onClose }) {
  return (
    <Dialog
      haveCloseButton
      backdrop
      title="Redeem ticket"
      subtitle="Yay"
      buttons={[{ text: 'button 1' }, { text: 'button 2' }]}
      open
      closeOnEscape
      onClose={onClose}
    >
      <p>some dialog content</p>
    </Dialog>
  )
}
