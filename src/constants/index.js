import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    browser,
    nlng,
    food,
    hacker,
    sql,
    meme,
    gdsc,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Cyber Security/ Ethical Hacker",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Full stack Developer",
        company_name: "NLNG",
        icon: nlng,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - August 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Cyber Security Lead",
        company_name: "Google Developers Club",
        icon: gdsc,
        iconBg: "#E6DEDD",
        date: "Sept 2023 - Present",
        points: [
            "Led cybersecurity initiatives and projects, promoting best practices among club members and the broader campus community.",
            "Provided mentorship and support to students interested in pursuing careers in cybersecurity..",
            "Managed cybersecurity awareness campaigns to enhance students' understanding of potential threats and how to mitigate them.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Tolu proved me wrong.",
        name: "Anonymous",
        designation: "Developer",
        company: "Nigeria LNG",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Tolu does.",
        name: "Anonymous",
        designation: "Data Analyst",
        company: "Nigeria LNG",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Tolu optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Anonymous",
        designation: "Data Analyst",
        company: "Nigeria LNG",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Food App",
        description:
            "Web-based platform that allows users to search, book, and manage food recipes from various sorces, providing a convenient and efficient solution for culinary needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: food,
        source_code_link: "https://github.com/userIssa/react-food-app",
        live_site: 'https://react-food-app-8aca0.web.app/'
    },
    {
        name: "Hacker Script",
        description:
            "A github repository of scripts used for ethical hacking and penetration testing.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "kali Linux",
                color: "green-text-gradient",
            },
            {
                name: "bash",
                color: "pink-text-gradient",
            },
        ],
        image: hacker,
        source_code_link: "https://github.com/userIssa/hackerScript",
        live_site: 'https://github.com/userIssa/hackerScript'
    },
    {
        name: "Meme4U",
        description:
            "An API driven web application that searches the web for the 100 most popular memes and allows users to insert text and save.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: meme,
        source_code_link: "https://github.com/userIssa/memeApp",
        live_site: 'https://meme4u-issa.netlify.app'
    },
    {
        name: "AsiLeave",
        description:
            "A leave management system that enables staff to easily book thier leave and get approvals in a professional manner.",
        tags: [
            {
                name: "sql",
                color: "blue-text-gradient",
            },
            {
                name: "php",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: sql,
        source_code_link: "https://github.com/userIssa/lets-leave",
        live_site: 'https://github.com/userIssa/lets-leave'
    },
];

export { services, technologies, experiences, testimonials, projects };
