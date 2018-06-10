import React from 'react'
import { Colors, beat, fontSize, MediaQueries } from '../design'

export function ActionButton ({
  href, disabled, primary, children, onClick,
}) {
  return (
    <a
      href={href || `javascript${':'}`}
      onClick={onClick}
      css={{
        padding: beat(0.5),
        display: 'inline-block',
        border: `1px solid ${primary ? Colors.reactBlue : Colors.grey600}`,
        borderTopLeftRadius: beat(0.25),
        borderBottomRightRadius: beat(0.25),
        color: primary ? Colors.white : Colors.grey200,
        fontSize: fontSize(-2),
        fontWeight: 600,
        opacity: disabled ? 0.25 : 1,
        pointerEvents: disabled ? 'none' : undefined,
        [MediaQueries.md]: {
          width: beat(10),
        },
        transition: 'all ease 0.2s',
        '&:hover': {
          background: primary ? Colors.reactBlue : Colors.grey600,
        },
      }}
    >
      {children}
    </a>
  )
}
