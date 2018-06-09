import React from 'react'
import { Colors, beat } from '../design'

import Section from './Section'
import ActionButton from './ActionButton'

export default class TicketsSection extends React.Component {
  renderDescription = () => (
    <p css={{ textAlign: 'center' }}>
      กลับมาอีกครั้งกับงาน Conference ประจำปี<br />
      ของโปรแกรมเมอร์สาย React ทุกคน<br />
      กับงาน “React Bangkok 3.0.0”<br />
      ที่ในปีนี้จะกลับมาอย่างยิ่งใหญ่กว่าเดิม
    </p>
  )
  render () {
    return (
      <Section title="Get Tickets" cssExtension={{ background: 'black' }}>
        {this.renderDescription()}
        <p>
          Tickets will be available on <strong>June 11th, 2018</strong> at <strong>18:00</strong>
        </p>
        <ActionButton primary href="https://www.eventpop.me/e/3607-react-bangkok-3-0-0">
            Tickets on Event Pop
        </ActionButton>
        <p css={{ marginTop: beat(2), textAlign: 'center', color: Colors.grey700 }}>
          Win a free ticket by contributing to open-source community!<br />
          Details will be available soon!
        </p>
        <ActionButton href="https://www.facebook.com/reactbkk/photos/a.161749477831615.1073741828.161742341165662/172068550133041/?type=3">Information</ActionButton>
      </Section>
    )
  }
}
