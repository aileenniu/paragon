import brownLogo from '@/assets/colleges/brown.png';
import georgetownLogo from '@/assets/colleges/georgetown.png';
import gtLogo from '@/assets/colleges/gt.svg';
import harvardLogo from '@/assets/colleges/harvard.png';
import iitLogo from '@/assets/colleges/iit.jpeg';
import pennLogo from '@/assets/colleges/penn.png';
import risdLogo from '@/assets/colleges/risd.svg';
import stanfordLogo from '@/assets/colleges/stanford.png';
import ucbLogo from '@/assets/colleges/ucb.png';
import uciLogo from '@/assets/colleges/uci.png';
import ucsdLogo from '@/assets/colleges/ucsd.png';
import ugaLogo from '@/assets/colleges/uga.png';
import yaleLogo from '@/assets/colleges/yale.png';
import { StaticImageData } from 'next/image';

export const colleges: {
    [key: string]: {
        name: string,
        logo: StaticImageData
    }
} = {
    harvard: {
        name: 'Harvard',
        logo: harvardLogo
    },
    brown: {
        name: 'Brown',
        logo: brownLogo
    },
    yale: {
        name: 'Yale',
        logo: yaleLogo
    },
    penn: {
        name: 'Penn',
        logo: pennLogo
    },
    gt: {
        name: 'Georgia Tech',
        logo: gtLogo
    },
    uga: {
        name: 'University of Georgia',
        logo: ugaLogo
    },
    risd: {
        name: 'RISD',
        logo: risdLogo
    },
    iit: {
        name: 'Illinois Tech',
        logo: iitLogo
    },
    georgetown: {
        name: 'Georgetown',
        logo: georgetownLogo
    },
    stanford: {
        name: 'Stanford',
        logo: stanfordLogo
    },
    ucsd: {
        name: 'UC San Diego',
        logo: ucsdLogo
    },
    ucb: {
        name: 'UC Berkeley',
        logo: ucbLogo
    },
    uci: {
        name: 'UC Irvine',
        logo: uciLogo
    }
}

export const AIRTABLE_API_KEY = `patUaz6OGg90PIjOT.a3a57483b5bb0c36b546a85441b77f8737b4d61e679345b33804f29385d8ed16` // i realize this is bad practice but this key can only read from only the people table (which is public) so im not concerned
export const AIRTABLE_BASE_ID = `appItWRxWaZWa1qhj`