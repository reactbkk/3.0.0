import React from 'react'

import { beat, Colors, fontSize, LOGOMARK } from '../design'
import { Section } from './Section'
import { ParallaxElement } from './ParallaxElement'

export class InfoSection extends React.Component {
  render () {
    return (
      <Section cssExtension={{
        position: 'relative',
        minHeight: '10vh',
        height: '10vh',
      }}>
        <ParallaxElement z={2}>
          <div css={{
            width: '120vw',
            height: '90vh',
            backgroundColor: Colors.brightest,
            transform: 'rotate(-5deg)',
          }} />
        </ParallaxElement>
        <ParallaxElement z={10} x={50} y={5} cssExtension={{
          color: Colors.reactDark,
          fontSize: fontSize(3),
          fontWeight: 600,
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}>
          <img src={LOGOMARK} alt="react-logo" css={{
            paddingBottom: beat(2),
          }} />
          <br />
          กลับมาอีกครั้งกับงาน Conference ประจำปี<br />
          ของโปรแกรมเมอร์สาย React ทุกคน<br />
          กับงาน “React Bangkok 3.0.0”<br />
          ที่ในปีนี้จะกลับมาอย่างยิ่งใหญ่กว่าเดิม
        </ParallaxElement>
      </Section>
    )
  }
}
