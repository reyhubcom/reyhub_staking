import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Staking',
      links: [
        {
          text: 'MEME Staking',
          href: getPermalink('/meme'),
        },
        {
          text: 'Bitcoin Staking',
          href: getPermalink('/btc'),
        },
        {
          text: 'Stake ETH',
          href: getPermalink('/eth'),
        },
        {
          text: 'Stake SOL',
          href: getPermalink('/sol'),
        },
        {
          text: 'All Blockchains',
          href: getPermalink('/allchains'),
        },
      ],
    },
    {
      text: 'Protocols',
      links: [
        {
          text: 'Hyperliquid',
          href: getPermalink('/hyper'),
        },
        {
          text: 'Buy Crypto',
          href: getPermalink('/exchange'),
        },
        
      ],
    },
    {
      text: 'DeFi',
      links: [
        {
          text: 'Earn With DeFi',
          href: getPermalink('/defi'),
        },
        {
          text: 'Staking DAO',
          href: getPermalink('/dao'),
        },
        {
          text: 'BOB Staking ',
          href: getPermalink('/bob'),
        },
        {
          text: 'Blockchain FX',
          href: getPermalink('/fx'),
        },
        
      ],
    },
    {
      text: 'Crypto',
      links: [
        {
          text: 'Crypto Bubbles',
          href: getPermalink( '/bubble'),
        },
        {
          text: 'Stablecoins',
          href: getPermalink( '/stable'),
        },
        {
          text: 'Bridge Coins',
          href: getPermalink('/bridge'),
        },
        {
          text: 'Lite Lend',
          href: getPermalink('/lite'),
        },
        {
          text: 'All Protocol',
          href: getPermalink('/allprotocol'),
        },
      ],
    },
    {
      text: 'Lending',
      href: 'https://fluid.io/smart-lending/1' ,target: ' _blank',
    },
  ],
  actions: [{ text: 'EXCHANGE', href: '/exchange', target: '' }],
};

export const footerData = {
  links: [
    {
      title: 'Networks',
      links: [
        { text: 'Ethereum', href: '/eth' },
        { text: 'Solana', href: '/sol' },
        { text: 'Binance', href: '/bnb' },
        { text: 'AVAX', href: '/avax' },
        { text: 'Polygon', href: '#' },
        { text: 'Cosmos', href: '/atom' },
        { text: 'All Networks', href: '/all' },
      ],
    },
    {
      title: 'MEME Coins',
      links: [
        { text: 'Staking BONKS', href: '/meme' },
        { text: 'Staking PEPE', href: '/pepe' },
        { text: 'Staking FLOKI', href: '/floki' },
        { text: 'Staking Pepeto', href: '/meme' },
        { text: 'Staking SHIBA INU', href: '/shiba' },
      ],
    },
    {
      title: 'Labs',
      links: [
        { text: 'Blockberry', href: '#' },
        { text: 'Suiscan', href: '#' },
        { text: 'Minascan', href: '#' },
        { text: 'Zekoscan', href: '#' },
        { text: 'Starscan', href: '#' },
        { text: 'Upscan', href: '#' },
      ],
    },
    {
      title: 'About',
      links: [
        { text: 'About Us', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Docs', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Brand Kit', href: '#' },
        { text: 'Staking Reward', href: '#' },
        { text: 'Rey Shop', href: 'https://linktr.ee/reystaking', target: ' _blank'},
       
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('#') },
    { text: 'Privacy Policy', href: getPermalink('#') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: '#'},
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://reyhub.com"> Rey</a> 2025 ReyHub.com All Rights Reserved.
  `,
};
