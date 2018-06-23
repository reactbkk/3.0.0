import React from 'react'

import { DynamicContent } from './DynamicContent'
import { Interaction } from './Interaction'
import { ActionButton } from './ActionButton'
import {
  Colors,
  Fonts,
  fontSize,
  beat,
  Tracking,
} from '../design'

export function SelfCheckInButton () {
  return (
    <DynamicContent>
      {(dialogElement, setDialogElement) => (
        <React.Fragment>
          <Interaction
            action={async () => {
              const promise = import(/* webpackChunkName: "checkin", webpackPrefetch: true */ '../checkin')
              const checkin = await promise
              setDialogElement(
                checkin.renderDialog({
                  onClose () {
                    setDialogElement(null)
                  },
                })
              )
            }}
          >
            {({ interactive, running, onClick }) => (
              <ActionButton
                href="javascript://checkin"
                onClick={onClick}
                cssExtension={{
                  height: beat(4),
                  width: beat(4),
                  borderRadius: '100%',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  fontFamily: Fonts.display,
                  fontSize: fontSize(3),
                  fontWeight: 600,
                  zIndex: 20,
                  '&:hover': {
                    color: Colors.react,
                    backgroundColor: Colors.brightest,
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <span>
                  {running ? 'Loading' : interactive ? 'SELF CHECK IN!' : '(Loading page)'}
                </span>
              </ActionButton>
            )}
          </Interaction>
          {dialogElement}
        </React.Fragment>
      )}
    </DynamicContent>
  )
}
