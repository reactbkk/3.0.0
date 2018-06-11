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
        marginBottom: beat(1.5),
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
        padding: '10vh 0',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        ...cssExtension,
      }}
    >
      <Header title={title} />
      {children}
    </section>
  )
}

export default Section
