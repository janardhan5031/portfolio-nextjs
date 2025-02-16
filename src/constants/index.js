import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  ec2,
  aws_s3,
  cloud_front,
  lambda,
  load_balancer,
  route_53,
  SES,
  mongodb,
  flutter,

  postgresql,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  stalcon
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Flutter Developer',
    icon: ux,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  // {
  //   name: 'HTML 5',
  //   icon: html,
  // },
  // {
  //   name: 'CSS 3',
  //   icon: css,
  // },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'flutter',
    icon: flutter,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'mongodb',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
  {
    name: 'EC2',
    icon: ec2,
  },
  {
    name: 'S3',
    icon: aws_s3,
  },
  // {
  //   name: 'Cloud_Front',
  //   icon: cloud_front,
  // },
  {
    name: 'Lambda Function',
    icon: lambda,
  },
  // {
  //   name: 'load_balancer',
  //   icon: load_balancer,
  // },
  {
    name: 'route_53',
    icon: route_53,
  },
  {
    name: 'SES',
    icon: SES,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'YAV Technologies',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Sep 2021 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Mai Labs',
    icon: microverse,
    iconBg: '#333333',
    date: 'April 2023 - May 2024',
  },
  {
    title: 'Lead Software Developer',
    company_name: 'Stalcon Solutions',
    icon: stalcon,
    iconBg: '#333333',
    date: 'June 2024 - Present',
  },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: 'project-1',
    name: 'MY IPR',
    description: 'MyIPR is a cloud platform for securing and managing intellectual property rights using blockchain technology.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    // repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://www.myipr.io/',
  },
  {
    id: 'project-2',
    name: 'Mai Events',
    description:
      'MayaaVerse delivers lifelike virtual worlds and avatars for immersive experiences.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    // repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://explore.maicity.io/',
  },
  {
    id: 'project-3',
    name: 'Sellwase',
    description: 'The ultimate marketplace for university students to buy and sell items safely and conveniently within your campus community.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://sellwase.com/',
  },
  {
    id: 'project-4',
    name: 'Growers Hub',
    description: `Your Expert Guide to Starting and Nurturing Your Garden Journey.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    // repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://growers-hub.com/',
  },
  {
    id: 'project-5',
    name: 'Amealio',
    description:
      'The Social Platform for Food Lovers to Discover, Share, and Experience Meals Together.',
    image: nyeusi,
    // repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://www.amealio.com/IN',
  },
  // {
  //   id: 'project-6',
  //   name: 'Amealio',
  //   description:
  //     'The Social Platform for Food Lovers to Discover, Share, and Experience Meals Together.',
  //   image: nyeusi,
  //   // repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://www.amealio.com/IN',
  // },
  // {
  //   id: 'project-7',
  //   name: 'Amealio',
  //   description:
  //     'The Social Platform for Food Lovers to Discover, Share, and Experience Meals Together.',
  //   image: nyeusi,
  //   // repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://www.amealio.com/IN',
  // },
  // {
  //   id: 'project-8',
  //   name: 'Amealio',
  //   description:
  //     'The Social Platform for Food Lovers to Discover, Share, and Experience Meals Together.',
  //   image: nyeusi,
  //   // repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://www.amealio.com/IN',
  // },
];

const resume_link = "https://www.snapit.tech/bjanardhan/bjanardhan-current-org";

const contactDetails = {
  email:"bjanardhan5031@gmail.com",
  name:"Janardhan",
  body:`Dear Janardhan, \n
  I came across your portfolio and was really impressed by your work. I’d love to learn more about your background and explore if there might be an opportunity to collaborate. \n
  Would you be open to a quick chat? \n
  Looking forward to hearing from you.\n
  `,
  emailSubject:"Opportunity to Discuss Potential Collaboration",
  whatsappNumber:"9666528220",
  phoneNumber:"9666528220"

}

export { services, technologies, experiences, projects, resume_link , contactDetails};
