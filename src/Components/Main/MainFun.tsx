import { BiLogoBootstrap, BiLogoFlask, BiLogoJava, BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { BsAndroid, BsCloud, BsGithub } from "react-icons/bs";
import { RiNextjsLine } from "react-icons/ri";

export const MySkills = [
    {
        name: "Frontend",
        subname: [
            {
                subname1: "Next js",
                icon: <RiNextjsLine size={25} />,
                color: "black"
            },
            {
                subname1: "React js",
                icon: <BiLogoReact size={25} />,
                color: "blue"
            },
            {
                subname1: "TypeScript",
                icon: <BiLogoTypescript size={25} />,
                color: "blue"

            },
            {
                subname1: "Tailwind",
                icon: <BiLogoTailwindCss size={25} />,
                color: "blue"

            },
            {
                subname1: "Redux",
                icon: <BiLogoRedux size={25} />,
                color: "red"

            },
            {
                subname1: "Bootstrap",
                icon: <BiLogoBootstrap size={25} />,
                color: "blue"

            },
        ]
    },
    {
        name: "Backend Framework",
        subname: [
            {
                subname1: "Express.js",
                icon: <BiLogoJavascript size={25} />,
                color: "red"

            },
            {
                subname1: "SpringBoot",
                icon: <BiLogoSpringBoot size={25} />,
                color: "green"

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
        name: "Language",
        subname: [
            {
                subname1: "Java",
                icon: <BiLogoJava size={20} />,
                color: "red"
            },
            {
                subname1: "JavaScript",
                icon: <BiLogoJavascript size={20} />,
                color: "yellow"
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
                color: "red"
            },

        ]
    },
]

export const MyWork = [
    {
        projectName: "Ella's Collection",
        projectType: "Full stack.  E-commerce ",
        projectDescription: "Ella's Collection,  an E-Commerce platform  aimed at meeting peoples fashion needs, ensuring  secure and safe payment for users.",
        projectImage: "/E_commerce.png",
        projectLink: ""
    },
    {
        projectName: "LACE 2025",
        projectType: "Full stack. Website",
        projectDescription: "LACE 2025, hosted by preneursafricaintl, was the largest African conference of the year. The conference website played a crucial role in enhancing participant experience by enabling seamless event registration and offering detailed information on the agenda, key speakers, and sponsors. These features improved user engagement and streamlined the registration process, significantly contributing to the event's success.",
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