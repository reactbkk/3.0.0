import AppMan from './sponsors/appman.svg'
import EventPop from './sponsors/eventpop.svg'
import Metromerce from './sponsors/metromerce.svg'
import Nextzy from './sponsors/nextzy.svg'
import Odds from './sponsors/odds.svg'
import ProntoTools from './sponsors/prontotools.svg'
import PttDigital from './sponsors/pttdigital.svg'
import SixNetwork from './sponsors/sixnetwork.svg'
import Skooldio from './sponsors/skooldio.svg'
import Taskworld from './sponsors/taskworld.svg'
import TelenorDigital from './sponsors/telenordigital.svg'
import Tencent from './sponsors/tencent.svg'
import ThaiProgrammer from './sponsors/thaiprogrammer.svg'
import ThoughtWorks from './sponsors/thoughtworks.svg'

export const SPONSORS = {
  TELENOR: {
    logo: TelenorDigital,
    website: 'https://telenordigital.com/',
    title: 'Telenor Digital',
  },
  PTT: {
    logo: PttDigital,
    website: 'http://www.pttdigital.com/home/',
    title: 'PTT Digital Solutions',
  },
  THOUGHT_WORKS: {
    logo: ThoughtWorks,
    website: 'https://www.thoughtworks.com/',
    title: 'ThoughtWorks',
  },
  TASKWORLD: {
    logo: Taskworld,
    website: 'https://taskworld.com/',
    title: 'Taskworld',
  },
  ODDS: {
    logo: Odds,
    website: 'https://medium.com/odds-team',
    title: 'ODDS',
  },
  APP_MAN: {
    logo: AppMan,
    website: 'https://www.appman.co.th/',
    title: 'AppMan',
  },
  SIX_NETWORK: {
    logo: SixNetwork,
    website: 'https://six.network/',
    title: 'SIX Network',
  },
  TENCENT: {
    logo: Tencent,
    website: 'https://www.tencent.co.th/th/',
    title: 'Tencent (Thailand)',
  },
  NEXTZY: {
    logo: Nextzy,
    website: 'https://nextzy.me/',
    title: 'Nextzy Technologies',
  },
  PRONTO_TOOLS: {
    logo: ProntoTools,
    website: 'https://www.prontotools.io/',
    title: 'Pronto Tools',
  },
  SKOOLDIO: {
    logo: Skooldio,
    website: 'https://www.skooldio.com/',
    title: 'Skooldio',
  },
  METROMERCE: {
    logo: Metromerce,
    website: 'https://www.metromerce.com/',
    title: 'Metromerce',
  },
  EVENT_POP: {
    logo: EventPop,
    website: 'https://www.eventpop.me/',
    title: 'Event Pop',
  },
  THAI_PROGRAMMER: {
    logo: ThaiProgrammer,
    website: 'https://thaiprogrammer.org/',
    title: 'Thai Programmer Association',
  },
}


export const PLATINUM_SPONSORS = [
  SPONSORS.TELENOR,
]

export const GOLD_SPONSORS = [
  SPONSORS.PTT,
  SPONSORS.THOUGHT_WORKS,
  SPONSORS.TASKWORLD,
  SPONSORS.ODDS,
  SPONSORS.APP_MAN,
]

export const SILVER_SPONSORS = [
  SPONSORS.SIX_NETWORK,
  SPONSORS.TENCENT,
  SPONSORS.NEXTZY,
  SPONSORS.PRONTO_TOOLS,
  SPONSORS.SKOOLDIO,
  SPONSORS.METROMERCE,
  SPONSORS.EVENT_POP,
  SPONSORS.THAI_PROGRAMMER,
]
