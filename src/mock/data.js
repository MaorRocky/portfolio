import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
    title: 'Maor Rocky',
    lang: 'en',
    description: 'Welcome to Maor Rocky portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
    title: '',
    name: 'Maor Rocky',
    subtitle: 'Software Developer',
    cta: '',
};

// ABOUT DATA
export const aboutData = {
    img: 'profile.jpg',
    paragraphOne: `I'm a recent graduate of BGU in Computer Science`,
    paragraphTwo: `During my university studies, I acquired the following skills:

  Development knowledge in JAVA, Python, JavaScript, C, C++.
  Experience with MERN STACK, REACT, css, HTML, REDUX, AWS, HADOOP\n
  Knowledge in Html and CSS.\n
  Deep understanding and implementation of OOP / OOD principles.\n\n`,
    paragraphThree: `My background is rich in technology, I have a systematic vision, and logical reasoning, along
  with a comprehensive understanding of the pieces that make up complex systems. A proven
  record of scholarly/research work and experience in a team and as a single-tasker, working in
  various frameworks, quick to learn new technologies and a very good self-learner with a strong
  sense of responsibility with the ability to cope with complex/multi-disciplinary technological
  challenges. Very good interpersonal relationships`,
    resume: `https://drive.google.com/file/d/18UPB-0EwKFbWGoz7KM_pXowKKFLZvWxF/view?usp=sharing`, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [{
        id: nanoid(),
        img: 'aws.jpeg',
        title: 'AWS Distributed Systems - JAVA',
        info: `Massively distributed applications, Cloud
    computing, Big data processing, Scalability considerations,Hadoop.`,
        info2: `* Language Processing - Collocation extraction, a map-reduce program
    that produces the list of top-100 collocations for each decade on the
    Google 2-grams datasets using Amazon Elastic Map Reduce.
    * Cloud Computing - Manager and workers framework, based on AWS
    services - C2, SQS, S3.`,
        url: `https://github.com/MaorRocky/Collocation-Extraction-Amazon-EMR`,
        repo: `https://github.com/MaorRocky/Collocation-Extraction-Amazon-EMR`, // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'project.png',
        title: 'MERN STACK - E-commerce shop',
        info: `Deployed an E-commerce website with paypal integration – used React and React-Bootstrap
    for the frontend, react-redux to change the state of the components, nodeJS
    for the backend, and MongoDB for the database`,
        info2: '',
        url: 'https://maorshopapp.herokuapp.com/',
        repo: 'https://github.com/MaorRocky/eCommerce', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'project.png',
        title: 'MERN STACK - stree food review',
        info: `Deployed a website for reviewing restaurants with social
    network features such as posting, liking, commenting, and so on. – used React
    for the frontend, react-redux to change the state of the components, nodeJS
    for the backend, and MongoDB for the database`,
        info2: '',
        url: 'https://young-atoll-27562.herokuapp.com/',
        repo: 'https://github.com/MaorRocky/MERN_stack_foodReview', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'bit.jpeg',
        title: 'Crypto Tracker',
        info: `A small React app for tracking the top 100 crypto-currencies, with a really nice theme.`,
        info2: '',
        url: 'https://maorcrypto.netlify.app/',
        repo: 'https://github.com/MaorRocky/MaorCrypto', // if no repo, the button will not show up
    },

    {
        id: nanoid(),
        img: 'akka.png',
        title: 'Akka (Actor model)',
        info: `A WhatsApp clone using Akka ActorSystem for
    concurrent programming instead of regular threading.`,
        info2: '',
        url: '',
        repo: `https://github.com/MaorRocky/Akka_whatsApp`, // if no repo, the button will not show up
    },
];

// CONTACT DATA
export const contactData = {
    cta: '',
    btn: '',
    email: 'maorrocky@gmail.com',
};

// FOOTER DATA
export const footerData = {
    networks: [{
            id: nanoid(),
            name: 'twitter',
            url: 'https://twitter.com/Maorrocky',
        },
        {
            id: nanoid(),
            name: 'codepen',
            url: '',
        },
        {
            id: nanoid(),
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/maor-rocky-5b95a185/',
        },
        {
            id: nanoid(),
            name: 'github',
            url: 'https://github.com/MaorRocky',
        },
    ],
};

// Github start/fork buttons
export const githubButtons = {
    isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};