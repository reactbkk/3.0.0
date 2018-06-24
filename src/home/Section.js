import React from 'react'
import { Colors, Fonts, fontSize, beat, Tracking, ViewType } from '../design'

function Header ({ title }) {
  return (
    <div
      css={{
        letterSpacing: Tracking.wide,
        fontFamily: Fonts.display,
        fontSize: fontSize(5),
        color: Colors.bright,
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
        padding: `${beat(2)} ${beat(3.5)}`,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [ViewType.mobile]: {
          padding: `${beat(2)} ${beat(1)}`,
        },
        ...cssExtension,
      }}
    >
      {title && <Header title={title} />}
      {children}
    </section>
  )
}

export default Section
