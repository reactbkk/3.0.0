import React from 'react'
import { Parallax } from 'react-scroll-parallax'

export function ParallaxElement ({
  z, x, y, opacity, cssExtension, children,
}) {
  return (
    <Parallax
      offsetYMax={z * z * 1000}
      offsetYMin={-z * z * 1000}
      // slowerScrollRate={z < 0}
      css={{
        // pointerEvents: 'none',
        zIndex: Math.round(z),
        ...(x && y ? {
          position: 'absolute',
          left: `${x}vw`,
          top: `${y}vh`,
        }: {}),
        opacity: opacity || 1,
        ...cssExtension
      }}
    >
      {children}
    </Parallax>
  )
}