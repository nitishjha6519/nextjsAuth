import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "Algorithm Visualizer",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    category: ["react"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["django", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    name: "Color Classification using tf.js",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["express"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    name: "Football App",
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];

export const orderByList = [
  {
    label: "🦴 Sort by",
    value: "🦴 Sort by",
  },
  {
    label: "🆕 Latest jobs",
    value: "🆕 Latest jobs",
  },
  {
    label: "💵 Highest paid",
    value: "💵 Highest paid",
  },
  {
    label: "👀 Most viewed",
    value: "👀 Most viewed",
  },
  {
    label: "✅ Most applied",
    value: "✅ Most applied",
  },
  {
    label: "🔥 Hottest",
    value: "🔥 Hottest",
  },
  {
    label: "🎪 Most benefits",
    value: "🎪 Most benefits",
  },
];

export const jobTypeList = [
  {
    value: "full_time",
    label: "Full-time",
  },
  {
    value: "part_time",
    label: "Part-time",
  },
  {
    value: "contractor",
    label: "Contractor",
  },
  {
    value: "temporary",
    label: "Temporary",
  },
  {
    value: "intern",
    label: "Internship",
  },
  {
    value: "intern",
    label: "Per diem",
  },
  {
    value: "volunteer",
    label: "Volunteer",
  },
];

export const primaryTagList = [
  {
    label: "Select a primary tag",
    value: "",
  },
  {
    label: "Software Devlopment",
    value: "dev",
  },
  {
    label: "Customer Support",
    value: "customer support",
  },
  {
    label: "Sales",
    value: "sales",
  },
  {
    label: "Marketing",
    value: "marketing",
  },
  {
    label: "Design",
    value: "design",
  },
  {
    label: "Front End",
    value: "front end",
  },
  {
    label: "Back End",
    value: "backend",
  },
  {
    label: "Legal",
    value: "legal",
  },
  {
    label: "Testing",
    value: "testing",
  },
  {
    label: "Quanlity Assurance",
    value: "quanlity assurance",
  },
  {
    label: "Non-Tech",
    value: "non tech",
  },
  {
    label: "Other",
    value: "other",
  },
];

export const benefitsList = [
  {
    value: "💰 401(k)",
    label: "💰 401(k)",
  },
  {
    value: "🌎 Distributed team",
    label: "🌎 Distributed team",
  },
  {
    value: "⏰ Async",
    label: "⏰ Async",
  },
  {
    value: "🤓 Vision insurance",
    label: "🤓 Vision insurance",
  },
  {
    value: "🦷 Dental insurance",
    label: "🦷 Dental insurance",
  },
  {
    value: "🚑 Medical insurance",
    label: "🚑 Medical insurance",
  },
  {
    value: "🚢 Unlimited vacation",
    label: "🚢 Unlimited vacation",
  },
  {
    value: "🚢 Paid time off",
    label: "🚢 Paid time off",
  },
];
