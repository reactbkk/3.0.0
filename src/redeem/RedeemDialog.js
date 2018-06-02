import { Dialog } from 'reactackle'
import React from 'react'

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
      <p>Ticket redeem system will be available soon! Check back later please.</p>
    </Dialog>
  )
}
