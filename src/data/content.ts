export const brand = {
  name: 'CIAA',
  tagline: 'Mentorship. Training. Heavenly Culture.',
  location: 'Atlanta, Georgia',
  ministry: 'Ministry of Sports',
}

export const navLinks = [
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Programs', href: '/programs' },
  { label: 'Events', href: '/events' },
  { label: 'Get Connected', href: '/connect' },
]

export const heroSlides = [
  {
    id: 'home',
    eyebrow: 'CIAA · Atlanta',
    title: 'CIAA',
    headline: 'Built for athletes who want more than the game.',
    support:
      'Mentorship, heavenly culture, and high-energy training — so curiosity turns into commitment.',
    image: '/images/programs/community.jpg',
    primary: { label: 'See programs', href: '/programs' },
    secondary: { label: 'Get connected', href: '/connect' },
    theme: 'dark' as const,
  },
  {
    id: 'train',
    eyebrow: 'Faith Training Camp',
    title: 'Train the whole athlete',
    headline: 'Word first. Then the game.',
    support:
      'Bible-centered sessions that strengthen identity, purpose, and performance under pressure.',
    image: '/images/programs/hero-seminar-room.jpg',
    imagePosition: 'center 28%',
    primary: { label: 'Learn more', href: '/programs' },
    secondary: { label: 'Join a camp', href: '/events' },
    theme: 'dark' as const,
  },
  {
    id: 'compete',
    eyebrow: 'Team Sports',
    title: 'Compete with purpose',
    headline: 'High intensity. Heavenly culture.',
    support:
      'Basketball, soccer, track, and more — competition that heals culture instead of burning athletes out.',
    image: '/images/programs/hero-basketball.jpg',
    primary: { label: 'See sports', href: '/events' },
    secondary: { label: 'Get involved', href: '/connect' },
    theme: 'dark' as const,
  },
]

export const mission = {
  problem:
    'Sports culture can turn toxic — high tension, pressure, anxiety, and burnout that leave athletes without purpose or direction.',
  solution:
    'CIAA helps athletes build a strong foundation in the Word first — through faith-based training, mentorship, and competition that heals culture.',
  purpose:
    'Heal nations with the heavenly culture of sports and show the glory of God — training body and mind in harmony.',
}

export const passionCards = [
  {
    title: 'Team Sports Competitions',
    blurb: 'Basketball, soccer, track, and more — compete with purpose, not just pressure.',
    image: '/images/programs/basketball.jpg',
    cta: 'Learn more',
    href: '/events',
  },
  {
    title: 'Faith Training Camp',
    blurb: 'Word-focused Bible study that builds athletes from the inside out.',
    image: '/images/programs/who-we-are.jpg',
    cta: 'Learn more',
    href: '/programs',
  },
  {
    title: '1-on-1 Bible Coaching',
    blurb: 'Personal mentorship for athletes ready to grow in faith and game.',
    image: '/images/programs/mentorship.jpg',
    cta: 'Get coached',
    href: '/connect',
  },
  {
    title: 'Fellowships & Sports Days',
    blurb: 'High-energy gatherings that unite athletes in community and heavenly culture.',
    image: '/images/programs/community.jpg',
    cta: 'Join in',
    href: '/events',
  },
]

export const fiveWays = [
  {
    number: '01',
    title: 'Athlete Mentorship',
    blurb: 'One-on-one and group guidance rooted in the Word.',
  },
  {
    number: '02',
    title: 'Heavenly Culture Curriculum',
    blurb: 'Structured enrichment on identity, purpose, and leadership.',
  },
  {
    number: '03',
    title: 'Podcast & Conversations',
    blurb: 'Extending the mission through digital media and open dialogue.',
  },
  {
    number: '04',
    title: 'Bible Studies & Counseling',
    blurb: 'Guidance through God’s Word — 1:1, group, or specialized course.',
  },
  {
    number: '05',
    title: 'Outreach & Partnerships',
    blurb: 'Bringing the message to campuses, teams, and communities.',
  },
]

export const events = [
  {
    date: 'Aug 16',
    title: 'Sports Day — Atlanta',
    detail: 'Open competition, fellowship, and heavenly culture on the field.',
    tag: 'Competition',
  },
  {
    date: 'Aug 23',
    title: 'Faith Training Camp',
    detail: 'Word-focused sessions for athletes building a foundation that lasts.',
    tag: 'Training',
  },
  {
    date: 'Sep 6',
    title: 'Special Training Clinic',
    detail: 'Skill work, mentorship huddles, and game-day intensity.',
    tag: 'Clinic',
  },
  {
    date: 'Sep 20',
    title: 'Fellowship Night',
    detail: 'Community, encouragement, and connection for athletes and friends.',
    tag: 'Fellowship',
  },
]

export const verses = [
  {
    text: 'I can do all things through Christ who strengthens me.',
    ref: 'Philippians 4:13',
  },
  {
    text: 'Do you not know that in a race all the runners run, but only one receives the prize? So run that you may obtain it.',
    ref: '1 Corinthians 9:24',
  },
  {
    text: 'The Lord is my strength and my shield; in him my heart trusts.',
    ref: 'Psalm 28:7',
  },
]

export const involve = [
  {
    title: 'Join a Training',
    body: 'Show up to sports days, camps, and special sessions across Atlanta.',
    action: 'See events',
    href: '/events',
  },
  {
    title: 'Shadow the Ministry',
    body: 'Sign up for the shadowing program and learn how CIAA moves day to day.',
    action: 'Apply to shadow',
    href: '/connect#connect-form',
  },
  {
    title: 'Serve on the Team',
    body: 'Help with Culture & Promo, Administration, or Athlete Evangelism.',
    action: 'Get connected',
    href: '/connect#connect-form',
  },
]

export const gallery = [
  {
    src: '/images/gallery/flag-football.jpg',
    caption: 'Game day energy',
  },
  {
    src: '/images/gallery/cheering.jpg',
    caption: 'Crowd and culture',
  },
  {
    src: '/images/gallery/player.jpg',
    caption: 'Focus under pressure',
  },
  {
    src: '/images/gallery/intensity.jpg',
    caption: 'Train hard',
  },
  {
    src: '/images/gallery/baseball.jpg',
    caption: 'Every sport welcome',
  },
  {
    src: '/images/gallery/bleachers.jpg',
    caption: 'Community shows up',
  },
  {
    src: '/images/gallery/team.jpg',
    caption: 'Team first',
  },
  {
    src: '/images/gallery/leaders.jpg',
    caption: 'Leaders in the huddle',
  },
]

export const footerColumns = [
  {
    title: 'Explore',
    links: [
      { label: 'Who We Are', href: '/who-we-are' },
      { label: 'What We Do', href: '/what-we-do' },
      { label: 'Programs', href: '/programs' },
      { label: 'Events', href: '/events' },
    ],
  },
  {
    title: 'What We Do',
    links: [
      { label: 'Athlete Mentorship', href: '/what-we-do' },
      { label: 'Heavenly Culture', href: '/what-we-do' },
      { label: 'Bible Studies', href: '/what-we-do' },
      { label: 'Outreach', href: '/what-we-do' },
    ],
  },
  {
    title: 'Get Connected',
    links: [
      { label: 'Contact form', href: '/connect#connect-form' },
      { label: 'Join a training', href: '/events' },
      { label: 'Serve on the team', href: '/connect' },
      { label: 'Email us', href: 'mailto:hello@ciaa.atlanta' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: brand.ministry, href: '/who-we-are' },
      { label: brand.location, href: '/connect' },
      { label: 'Mission', href: '/who-we-are' },
    ],
  },
]
