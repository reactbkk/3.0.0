import React from 'react'
import { Fonts, fontSize, beat, Tracking } from '../design'

function Header ({ title }) {
  return (
    <div
      css={{
        textTransform: 'uppercase',
        letterSpacing: Tracking.wide,
        fontFamily: Fonts.display,
        fontWeight: 600,
        fontSize: fontSize(6),
        marginBottom: beat(1),
      }}
    >
      {title}
    </div>
  )
}

export function Section ({ cssExtension, title, children }) {
  return (
    <section
      css={{
        minHeight: '100vh',
        width: '100%',
        padding: `${beat(1)} ${beat(3.5)}`,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...cssExtension,
      }}
    >
      {title && <Header title={title} />}
      {children}
    </section>
  )
}

export default Section
