import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    onclick: '',
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    onclick: '',
    link: '/create-campaign',
  },
  {
    name: 'payment',
    imgUrl: payment,
    link: '/',
    onclick: '',
    disabled: true,
  },
  {
    name: 'withdraw',
    imgUrl: withdraw,
    link: '/',
    onclick: '',
    disabled: true,
  },
  {
    name: 'profile',
    imgUrl: profile,
    onclick: '',
    link: '/profile',
  },
  // {
  //   name: 'logout',
  //   imgUrl: logout,
  //   link: '/',
  //   onclick: 'handleLogout',
  //   disabled: true,
  // },
];
