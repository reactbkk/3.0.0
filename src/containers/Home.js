import React from 'react'
import { withSiteData } from 'react-static'
import glamorous from 'glamorous'
//
import logoImg from '../reactbkk-logo.png'

export default withSiteData(() => (
  <div>
    <HeadingSection />
    <CTA
      title="Call for Speakers"
      href="https://www.facebook.com/groups/react.th/permalink/1831386766882071/"
    >
      We encourage everyone to share your knowledge with the community!
      First-time speakers are welcome; you don’t have to be an expert.
      People outside Bangkok are also welcome; we can provide travel and accomodation support.
      If you have something cool to share, please submit a proposal by May 4th, 2018.
    </CTA>
    <CTA
      title="Recommend a Speaker"
      disabled
    >
      Know someone who’s got a story to tell?
      Recommend them to us! More info soon!
    </CTA>
    <CTA
      title="Call for Staffs"
      disabled
    >
      You can also contribute to our event by volunteering to become an event staff.
      More info soon!
    </CTA>
    <SpeakersSection />
    <CommunitySection />
  </div>
))

// region HeadingSection
const HeadingSection = () => (
  <HeadingSectionContainer>
    <img src={logoImg} alt="" />
    <div>
      <h1>React Bangkok 3.0.0</h1>
      <p>June 23rd (tentative)</p>
    </div>
  </HeadingSectionContainer>
)
const HeadingSectionContainer = glamorous.h1({
  ...tw('text-center md:flex items-center justify-center'),
  '& img': {
    ...tw('flex-none'),
    maxWidth: '10rem',
  },
  '& > div': {
    ...tw('md:text-left md:pl-8'),
    '& > h1': tw('text-3xl md:text-4xl text-react-blue font-normal'),
    '& > p': tw('text-2xl md:text-3xl font-normal'),
  },
})
// endregion
// region CTA
const CTA = ({
  title, href, disabled, children,
}) => (
  <CTASection disabled={disabled}>
    <a href={href || `javascript${':'}`}>{title}</a>
    <p>{children}</p>
  </CTASection>
)
const CTASection = glamorous.section({
  ...tw('text-center md:flex items-center md:min-h-16 md:text-xl mx-auto max-w-xl'),
  '& a': tw('bg-react-blue text-white p-3 inline-block md:w-64 font-bold flex-none'),
  '& p': tw('md:pl-8 md:text-left leading-normal'),
}, props => ({
  '& a': {
    opacity: props.disabled ? 0.25 : 1,
  },
}))
// endregion
// region SpeakersSection
const SpeakersSection = () => (
  <ContentSection>
    <SectionHeader>Speakers</SectionHeader>
    <p style={{ textAlign: 'center' }}>TBA</p>
  </ContentSection>
)
// endregion
// region CommunitySection
const FACEBOOK_GROUP_URL = 'https://www.facebook.com/groups/react.th/'
const CommunitySection = () => (
  <ContentSection>
    <SectionHeader>Community</SectionHeader>
    <p style={{ textAlign: 'center' }}>Stay connected. Join our <a href={FACEBOOK_GROUP_URL}>Facebook Group</a>.</p>
  </ContentSection>
)
// endregion

const SectionHeader = glamorous.h2(tw('text-react-blue text-5xl font-bold text-center'))
const ContentSection = glamorous.section(tw('mt-8 pt-4'))
