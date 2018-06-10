import React from 'react'
import { Colors, beat } from '../design'

import Section from './Section'
import ActionButton from './ActionButton'
import { DynamicContent } from './DynamicContent'
import { Interaction } from './Interaction'

/* eslint no-script-url: off */

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
        {this.renderRedeemTicketButton()}
      </Section>
    )
  }
  renderRedeemTicketButton () {
    return (
      <DynamicContent>
        {(dialogElement, setDialogElement) => (
          <React.Fragment>
            <Interaction
              action={async () => {
                const promise = import(/* webpackChunkName: "redeem", webpackPrefetch: true */ '../redeem')
                const redeem = await promise
                setDialogElement(
                  redeem.renderDialog({
                    onClose () {
                      setDialogElement(null)
                    },
                  })
                )
              }}
            >
              {({ interactive, running, onClick }) => (
                <ActionButton
                  disabled={!interactive || running}
                  href="javascript://redeem"
                  onClick={onClick}
                >
                  {running ? 'Loading…' : interactive ? 'Redeem ticket' : '(Loading page)'}
                </ActionButton>
              )}
            </Interaction>
            {dialogElement}
          </React.Fragment>
        )}
      </DynamicContent>
    )
  }
}
