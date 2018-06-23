import React from 'react'
import { Colors, Tracking } from '../design'

import { showSparklesEffectOnElement } from '../sparkles-effect'

/**
 * @param {MouseEvent} e
 */
function sparkle (e) {
  if (e.target) {
    showSparklesEffectOnElement(e.target)
  }
}

export function ActionButton ({
  href, target, cssExtension, children, onClick,
}) {
  return (
    <a
      href={href || `javascript${':'}`}
      target={target}
      onClick={onClick}
      onMouseOver={sparkle}
      onTouchStart={sparkle}
      onFocus={sparkle}
      css={{
        cursor: 'pointer',
        color: Colors.bright,
        letterSpacing: Tracking.wide,
        textAlign: 'center',
        border: `solid 1px ${Colors.brightest}`,
        transition: 'all ease 0.2s',
        '&:hover': {
          color: Colors.react,
          backgroundColor: Colors.brightest,
        },
        ...cssExtension,
      }}
    >
      {children}
    </a>
  )
}
