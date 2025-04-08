import { BiLogoBootstrap, BiLogoFlask, BiLogoJava, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { BsAndroid, BsCloud, BsGithub } from "react-icons/bs";

export const MySkills = [
    {
        name: "Frontend",
        subname: [
            {
                subname1: "React.js",
                icon: <BiLogoReact size={20} />,
                color: "blue"
            },
            {
                subname1: "TypeScript",
                icon: <BiLogoTypescript size={20} />,
                color: "blue"

            },
            {
                subname1: "Tailwind",
                icon: <BiLogoTailwindCss size={20} />,
                color: "blue"

            },
            {
                subname1: "Redux",
                icon: <BiLogoRedux size={20} />,
                color: "red"

            },
            {
                subname1: "Bootstrap",
                icon: <BiLogoBootstrap size={20} />,
                color: "green"

            },
        ]
    },
    {
        name: "Backend",
        subname: [
            {
                subname1: "Node.js",
                icon: <BiLogoNodejs size={20} />,
                color: "green"
            },
            {
                subname1: "Express.js",
                icon: <BiLogoJavascript size={20} />,
                color: "red"

            },
            {
                subname1: "Java",
                icon: <BiLogoJava size={20} />,
                color: "red"

            }
        ]
    },
    {
        name: "Database",
        subname: [
            {
                subname1: "MongoDb",
                icon: <BiLogoMongodb size={20} />,
                color: "green"
            },
        ]
    },
    {
        name: "Other Tools",
        subname: [
            {
                subname1: "Puppeteer",
                icon: <BsAndroid size={20} />,
                color: "green"
            },
            {
                subname1: "GitHub",
                icon: <BsGithub size={20} />,
                color: "black"
            },
            {
                subname1: "Cloudinary",
                icon: <BsCloud size={20} />,
                color: "blue"
            },
            {
                subname1: "Postman",
                icon: <BiLogoFlask size={20} />,
                color: "yellow"
            },

        ]
    },
]

export const MyWork = [
    {
        projectName: "Ella's Collection",
        projectType: "Full stack.  E-commerce ",
        projectDescription: "Ella's Collection is an E-Commerce web site aimed at meeting peoples fashion needs, bringing the stor to the people.",
        projectImage: "/Ella'sShop.png",
        projectLink: ""
    },
    {
        projectName: "LACE 2025",
        projectType: "Full stack. WEBSITE",
        projectDescription: "Lace 'Largest African Conference 2025' hosted by preneursafricaintl, a program aimed at reaching out to young entrepreneur across africa.",
        projectImage: "/Work1.png",
        projectLink: "https://preneursafricaintl.com"
    },
    {
        projectName: "Alpha Hunter",
        projectType: "Backend - Node Js.  Telegram bot",
        projectDescription: "Alpha Hunter is a smart Telegram bot built with Node.js that delivers real-time crypto alerts and updates based on user-defined queries. It helps traders stay ahead with instant notifications tailored to their watchList",
        projectImage: "/TelegramBotImage.jpg",
        projectLink: ""
    }
]