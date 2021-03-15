module.exports = {
  siteTitle: 'Daksh Goyal | Student',
  siteDescription:
    'Daksh Goyal is a full-time undergraduate student at NITK, India. I am deeply interested by Deep Learning and how algorithms can be smart too. I am currently working on exploring the endless possibilities of innovation using CNNs and RNNs, individually as well as in conjunction.',
  siteKeywords:
    'Daksh Goyal, software engineer, machine learning, deep learning, research, pytorch, tensorflow, CNN, RNN',
  siteUrl: 'https://daksh-goyal.github.io',
  siteLanguage: 'en_US',
  name: 'Daksh Goyal',
  location: 'Uttarakhand, India',
  email: 'dakshgoyal.171cv111@nitk.edu.in',
  github: 'https://github.com/daksh-goyal',
  twitterHandle: '@Daksh__Goyal',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/daksh-goyal',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dakshgoyal',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dakshgoyell',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Daksh__Goyal',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#FF4838',
  navyColor: '#162B32',
  darkNavyColor: '#020c1b',
  googleAnalyticsID: 'UA-192108302-2',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
