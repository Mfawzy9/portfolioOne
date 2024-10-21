import Bootstrap from "@/app/_Components/skillsIcons/Bootstrap";
import CSS from "@/app/_Components/skillsIcons/CSS";
import Formik from "@/app/_Components/skillsIcons/Formik";
import FramerMotion from "@/app/_Components/skillsIcons/FramerMotion";
import HTML from "@/app/_Components/skillsIcons/HTML";
import JavaScript from "@/app/_Components/skillsIcons/JavaScript";
import JQuery from "@/app/_Components/skillsIcons/JQuery";
import NextJs from "@/app/_Components/skillsIcons/NextJs";
import React from "@/app/_Components/skillsIcons/React";
import ReactQuery from "@/app/_Components/skillsIcons/ReactQuery";
import SwiperJs from "@/app/_Components/skillsIcons/SwiperJs";
import TailwindCSS from "@/app/_Components/skillsIcons/TailwindCSS";
import TypeScript from "@/app/_Components/skillsIcons/TypeScript";
import Zod from "@/app/_Components/skillsIcons/Zod";

export interface IProject {
  id: number;
  title: string;
  description: string;
  img: string;
  imgs: string[];
  demo: string;
  repo: string;
  technologies: Itechonlogy[];
  technologiesIcons: React.FC<React.SVGProps<SVGSVGElement>>[];
  category: string;
  categoryIcons: React.FC<React.SVGProps<SVGSVGElement>>[];
}

export interface Itechonlogy {
  name: string;
  description: string;
  link: string;
}

export const projectsArr: IProject[] = [
  {
    id: 14,
    title: "Portfolio1",
    description:
      "A dynamic personal portfolio built with Next.js and TypeScript, featuring Tailwind CSS styling and Framer Motion animations for seamless interactions. It offers dark/light mode, a color switcher, and a fully functional contact form that sends emails directly to the portfolio owner. With smooth page transitions and Context API handling theme, color, and custom cursor settings, the portfolio covers essential sections like Home, About, Skills, Projects, and Contact.",
    img: "/assets/projectsImgs/portfolio1/Cover.jpg",
    imgs: [
      "/assets/projectsImgs/portfolio1/NewFolder/1.jpg",
      "/assets/projectsImgs/portfolio1/NewFolder/2.jpg",
      "/assets/projectsImgs/portfolio1/NewFolder/3.jpg",
      "/assets/projectsImgs/portfolio1/NewFolder/4.jpg",
      "/assets/projectsImgs/portfolio1/NewFolder/5.jpg",
    ],
    demo: "https://first-portfolio-woad.vercel.app/",
    repo: "https://github.com/Mfawzy9/FirstPortfolio",
    technologies: [
      {
        name: "Next.js",
        description: "Framework for server-side rendering.",
        link: "https://nextjs.org/",
      },
      {
        name: "TypeScript",
        description: "JavaScript with static typing.",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Zod",
        description: "Schema validation for TypeScript.",
        link: "https://zod.dev/",
      },
      {
        name: "Framer Motion",
        description: "Animations for React components.",
        link: "https://www.framer.com/motion/",
      },
      {
        name: "React Icons",
        description: "Icon library for React.",
        link: "https://react-icons.github.io/react-icons/",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework.",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Context API",
        description: "Global state management solution.",
        link: "https://reactjs.org/docs/context.html",
      },
      {
        name: "Next Themes",
        description: "Theme switching for Next.js.",
        link: "https://github.com/pacocoursey/next-themes",
      },
      {
        name: "cookies-next",
        description: "Cookie storage management library.",
        link: "https://www.npmjs.com/package/cookies-next",
      },
    ],
    technologiesIcons: [NextJs, TypeScript, TailwindCSS, FramerMotion, Zod],
    category: "Next Js",
    categoryIcons: [NextJs],
  },
  {
    id: 1,
    title: "E-commerce",
    description:
      "A dynamic shopping platform offering seamless cart and wishlist management, real-time product quantity updates, and a smooth checkout experience with online payment or cash on delivery options. Features include dark/light mode, secure authentication, comprehensive order summaries, user account management, real-time product search, and easy shopping by category and brand, all designed to enhance the user experience.",
    img: "/assets/projectsImgs/freshCart/Cover.jpg",
    imgs: [
      "/assets/projectsImgs/freshCart/NewFolder/1.jpg",
      "/assets/projectsImgs/freshCart/NewFolder/2.jpg",
      "/assets/projectsImgs/freshCart/NewFolder/3.jpg",
      "/assets/projectsImgs/freshCart/NewFolder/4.jpg",
      "/assets/projectsImgs/freshCart/NewFolder/5.jpg",
      "/assets/projectsImgs/freshCart/NewFolder/6.jpg",
      "/assets/projectsImgs/freshCart/NewFolder/7.jpg",
      "/assets/projectsImgs/freshCart/NewFolder/8.jpg",
      "/assets/projectsImgs/freshCart/NewFolder/9.jpg",
    ],
    demo: "https://fresh-cart-beryl-eight.vercel.app/",
    repo: "https://github.com/Mfawzy9/FreshCart",
    technologies: [
      {
        name: "Tailwind CSS",
        description: "Efficient, streamlined styling",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Axios",
        description: "HTTP data fetching",
        link: "https://axios-http.com/",
      },
      {
        name: "React Query",
        description: "Server state management",
        link: "https://react-query.tanstack.com/",
      },
      {
        name: "Framer Motion",
        description: "Smooth UI animations",
        link: "https://www.framer.com/motion/",
      },
      {
        name: "JWT Decoding",
        description: "Secure token authentication",
        link: "https://jwt.io/",
      },
      {
        name: "React Icons",
        description: "Icon library integration",
        link: "https://react-icons.github.io/react-icons/",
      },
      {
        name: "Swiper",
        description: "Touch slider interface",
        link: "https://swiperjs.com/",
      },
      {
        name: "Formik",
        description: "Form handling and management",
        link: "https://formik.org/",
      },
      {
        name: "Yup",
        description: "Schema validation for forms",
        link: "https://github.com/jquense/yup",
      },
      {
        name: "React Router DOM",
        description: "Declarative client routing",
        link: "https://reactrouter.com/",
      },
      {
        name: "React Toastify",
        description: "Custom toast notifications",
        link: "https://fkhadra.github.io/react-toastify/",
      },
      {
        name: "Context API",
        description: "Global state sharing",
        link: "https://react.dev/reference/react/createContext",
      },
    ],
    technologiesIcons: [
      React,
      TailwindCSS,
      FramerMotion,
      ReactQuery,
      SwiperJs,
      Formik,
    ],
    category: "React Js",
    categoryIcons: [React],
  },
  {
    id: 2,
    title: "Book Mark",
    description:
      "A user-friendly app that allows users to save, edit, and delete their favorite website URLs using local storage. It includes built-in validation to ensure that users enter valid URLs, helping them effortlessly organize and manage their bookmarks for quick access to their most cherished online resources!",
    img: "/assets/projectsImgs/BookMark/Cover.jpg",
    imgs: [
      "/assets/projectsImgs/BookMark/NewFolder/1.jpg",
      "/assets/projectsImgs/BookMark/NewFolder/2.jpg",
      "/assets/projectsImgs/BookMark/NewFolder/3.jpg",
      "/assets/projectsImgs/BookMark/NewFolder/4.jpg",
    ],
    demo: "https://mfawzy9.github.io/Bookmark/",
    repo: "https://github.com/Mfawzy9/Bookmark",
    technologies: [
      {
        name: "HTML",
        description: "Structure of the app.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        description: "Styling and presentation.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        description: "Core programming language.",
        link: "https://www.javascript.com/",
      },
      {
        name: "Bootstrap",
        description: "Responsive design framework.",
        link: "https://getbootstrap.com/",
      },
    ],
    technologiesIcons: [JavaScript, Bootstrap, HTML, CSS],
    category: "Pure Js",
    categoryIcons: [JavaScript],
  },
  {
    id: 3,
    title: "BRKLYNdemo",
    description:
      "This project is a practical application that demonstrates the use of HTML and CSS to create a responsive and visually appealing web interface. It showcases essential web design principles, including layout structure, styling techniques, and user experience considerations. Through this project, I gained hands-on experience in crafting web pages and enhancing my understanding of front-end development.",
    img: "/assets/projectsImgs/BRKLYNdemo/Cover.jpg",
    imgs: [
      "/assets/projectsImgs/BRKLYNdemo/NewFolder/1.jpg",
      "/assets/projectsImgs/BRKLYNdemo/NewFolder/2.jpg",
      "/assets/projectsImgs/BRKLYNdemo/NewFolder/3.jpg",
      "/assets/projectsImgs/BRKLYNdemo/NewFolder/4.jpg",
      "/assets/projectsImgs/BRKLYNdemo/NewFolder/5.jpg",
    ],
    demo: "https://mfawzy9.github.io/BRKLYNdemo/",
    repo: "https://github.com/Mfawzy9/BRKLYNdemo",
    technologies: [
      {
        name: "HTML",
        description: "Structure of the application.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        description: "Styling and visual presentation.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
    technologiesIcons: [HTML, CSS],
    category: "HTML & CSS",
    categoryIcons: [HTML, CSS],
  },
  {
    id: 4,
    title: "DANIELS",
    description:
      "This project is a practical application that demonstrates the use of HTML, CSS, and Bootstrap to create a responsive and aesthetically pleasing web interface. It leverages Bootstrap's grid system and components to enhance user experience and streamline development. Through this project, I gained valuable experience in front-end design, responsive layouts, and utilizing a popular CSS framework for efficient styling.",
    img: "/assets/projectsImgs/DANIELS/Cover.jpg",
    imgs: [
      "/assets/projectsImgs/DANIELS/NewFolder/1.jpg",
      "/assets/projectsImgs/DANIELS/NewFolder/2.jpg",
      "/assets/projectsImgs/DANIELS/NewFolder/3.jpg",
      "/assets/projectsImgs/DANIELS/NewFolder/4.jpg",
      "/assets/projectsImgs/DANIELS/NewFolder/5.jpg",
      "/assets/projectsImgs/DANIELS/NewFolder/6.jpg",
      "/assets/projectsImgs/DANIELS/NewFolder/7.jpg",
    ],
    demo: "https://mfawzy9.github.io/DANIELS/",
    repo: "https://github.com/Mfawzy9/DANIELS",
    technologies: [
      {
        name: "HTML",
        description: "Structure of the application.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        description: "Styling and visual presentation.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Bootstrap",
        description: "Responsive CSS framework.",
        link: "https://getbootstrap.com/",
      },
    ],
    technologiesIcons: [HTML, CSS, Bootstrap],
    category: "HTML & CSS",
    categoryIcons: [HTML, CSS],
  },
  {
    id: 5,
    title: "DevFolio",
    description:
      "This project showcases the application of HTML, CSS, and Bootstrap to build a fully responsive web interface. By utilizing Bootstrap's pre-built components and responsive grid system, I created an engaging user experience that adapts seamlessly across devices. This project allowed me to deepen my understanding of modern web design practices, focusing on layout, styling, and responsive development techniques.",
    img: "/assets/projectsImgs/DevFolio/Cover.jpg",
    imgs: [
      "/assets/projectsImgs/DevFolio/NewFolder/1.jpg",
      "/assets/projectsImgs/DevFolio/NewFolder/2.jpg",
      "/assets/projectsImgs/DevFolio/NewFolder/3.jpg",
      "/assets/projectsImgs/DevFolio/NewFolder/4.jpg",
      "/assets/projectsImgs/DevFolio/NewFolder/5.jpg",
    ],
    demo: "https://mfawzy9.github.io/DevFolio/",
    repo: "https://github.com/Mfawzy9/DevFolio",
    technologies: [
      {
        name: "HTML",
        description: "Structure of the application.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        description: "Styling and visual presentation.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Bootstrap",
        description: "Responsive CSS framework.",
        link: "https://getbootstrap.com/",
      },
    ],
    technologiesIcons: [HTML, Bootstrap, CSS],
    category: "HTML & CSS",
    categoryIcons: [HTML, CSS],
  },
  {
    id: 6,
    title: "Free To Game",
    description:
      "This website allows users to explore a wide range of free games organized by categories, complete with links to their official sites for easy access. Featuring robust search functionality and pagination for seamless navigation, it enhances the gaming discovery experience using Object-Oriented Programming (OOP) for better code organization.",
    img: "/assets/projectsImgs/FreeToGame/Cover.jpg",
    imgs: [
      "/assets/projectsImgs/FreeToGame/NewFolder/1.jpg",
      "/assets/projectsImgs/FreeToGame/NewFolder/2.jpg",
      "/assets/projectsImgs/FreeToGame/NewFolder/3.jpg",
      "/assets/projectsImgs/FreeToGame/NewFolder/4.jpg",
      "/assets/projectsImgs/FreeToGame/NewFolder/5.jpg",
    ],
    demo: "https://mfawzy9.github.io/Game-OOP/",
    repo: "https://github.com/Mfawzy9/Game-OOP",
    technologies: [
      {
        name: "HTML",
        description: "Structure of the website.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        description: "Styling and visual presentation.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        description: "Core programming language.",
        link: "https://www.javascript.com/",
      },
      {
        name: "jQuery",
        description: "Simplifies DOM manipulation.",
        link: "https://jquery.com/",
      },
      {
        name: "Bootstrap",
        description: "Responsive design framework.",
        link: "https://getbootstrap.com/",
      },
      {
        name: "Object-Oriented Programming",
        description: "Code organization methodology.",
        link: "https://en.wikipedia.org/wiki/Object-oriented_programming",
      },
    ],
    technologiesIcons: [HTML, Bootstrap, JQuery, JavaScript, CSS],
    category: "Pure Js",
    categoryIcons: [JavaScript],
  },
  {
    id: 7,
    title: "Game Store",
    description:
      "This project is a practical application that demonstrates the use of HTML and CSS to create a responsive and visually appealing web interface. It showcases essential web design principles, including layout structure, styling techniques, and user experience considerations. Through this project, I gained hands-on experience in crafting web pages and enhancing my understanding of front-end development.",
    img: "/assets/projectsImgs/GameStore/Cover.jpg",
    imgs: [
      "/assets/projectsImgs/GameStore/NewFolder/1.jpg",
      "/assets/projectsImgs/GameStore/NewFolder/2.jpg",
      "/assets/projectsImgs/GameStore/NewFolder/3.jpg",
      "/assets/projectsImgs/GameStore/NewFolder/4.jpg",
      "/assets/projectsImgs/GameStore/NewFolder/5.jpg",
    ],
    demo: "https://mfawzy9.github.io/gameStore/",
    repo: "https://github.com/Mfawzy9/gameStore",
    technologies: [
      {
        name: "HTML",
        description: "Structure of the application.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        description: "Styling and visual presentation.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
    technologiesIcons: [HTML, CSS],
    category: "HTML & CSS",
    categoryIcons: [HTML, CSS],
  },
  {
    id: 8,
    title: "LoginSystem",
    description:
      "This app features a secure login and registration system with built-in validation to ensure user data integrity, using local storage for seamless data management. After logging in, users are directed to a personalized home page where they can access their account information and features. The application prioritizes user experience with intuitive navigation and clear feedback throughout the authentication process.",
    img: "/assets/projectsImgs/LoginSystem/Cover.jpg",
    imgs: [
      "/assets/projectsImgs/LoginSystem/NewFolder/1.jpg",
      "/assets/projectsImgs/LoginSystem/NewFolder/2.jpg",
      "/assets/projectsImgs/LoginSystem/NewFolder/3.jpg",
      "/assets/projectsImgs/LoginSystem/NewFolder/4.jpg",
      "/assets/projectsImgs/LoginSystem/NewFolder/5.jpg",
    ],
    demo: "https://mfawzy9.github.io/Login-System/",
    repo: "https://github.com/Mfawzy9/Login-System",
    technologies: [
      {
        name: "HTML",
        description: "Structure of the application.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        description: "Styling and visual presentation.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        description: "Core programming language.",
        link: "https://www.javascript.com/",
      },
      {
        name: "Bootstrap",
        description: "Responsive CSS framework.",
        link: "https://getbootstrap.com/",
      },
    ],
    technologiesIcons: [HTML, CSS, Bootstrap, JavaScript],
    category: "Pure Js",
    categoryIcons: [JavaScript],
  },
  {
    id: 9,
    title: "Mealify",
    description:
      "This responsive app displays a collection of meals and chefs' details, designed to practice and enhance skills in HTML and CSS. It focuses on creating a visually appealing layout that adapts seamlessly across different devices, offering a user-friendly browsing experience.",
    img: "/assets/projectsImgs/Mealify/Cover.jpg",
    imgs: [
      "/assets/projectsImgs/Mealify/NewFolder/1.jpg",
      "/assets/projectsImgs/Mealify/NewFolder/2.jpg",
      "/assets/projectsImgs/Mealify/NewFolder/3.jpg",
      "/assets/projectsImgs/Mealify/NewFolder/4.jpg",
      "/assets/projectsImgs/Mealify/NewFolder/5.jpg",
    ],
    demo: "https://mfawzy9.github.io/Mealify/",
    repo: "https://github.com/Mfawzy9/Mealify",
    technologies: [
      {
        name: "HTML",
        description: "Structure of the application.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        description: "Styling and visual presentation.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
    technologiesIcons: [HTML, CSS],
    category: "HTML & CSS",
    categoryIcons: [HTML, CSS],
  },
  {
    id: 10,
    title: "Quote",
    description:
      "This app generates a random quote each time the user clicks a button, providing a fun and inspirational experience. It includes a dark and light mode toggler implemented using CSS, allowing users to switch between themes without relying on JavaScript.",
    img: "/assets/projectsImgs/Quote/Cover.jpg",
    imgs: [
      "/assets/projectsImgs/Quote/NewFolder/1.jpg",

      "/assets/projectsImgs/Quote/NewFolder/2.jpg",
    ],
    demo: "https://mfawzy9.github.io/Quote/",
    repo: "https://github.com/Mfawzy9/Quote",
    technologies: [
      {
        name: "HTML",
        description: "Structure of the application.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        description: "Styling and dark/light mode.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        description: "Core functionality for quotes.",
        link: "https://www.javascript.com/",
      },
      {
        name: "Bootstrap",
        description: "Responsive design framework.",
        link: "https://getbootstrap.com/",
      },
    ],
    technologiesIcons: [HTML, CSS, Bootstrap, JavaScript],
    category: "Pure Js",
    categoryIcons: [JavaScript],
  },
  {
    id: 11,
    title: "Weather App",
    description:
      "This weather app displays current weather conditions, a 5-day forecast, and hourly updates. It can detect the user's current location and dynamically changes the background based on the weather stats, offering a visually engaging and informative experience.",
    img: "/assets/projectsImgs/Weather/cover.jpg",
    imgs: [
      "/assets/projectsImgs/Weather/NewFolder/1.jpg",
      "/assets/projectsImgs/Weather/NewFolder/2.jpg",
      "/assets/projectsImgs/Weather/NewFolder/3.jpg",
      "/assets/projectsImgs/Weather/NewFolder/4.jpg",
    ],
    demo: "https://mfawzy9.github.io/weather-app/",
    repo: "https://github.com/Mfawzy9/weather-app",
    technologies: [
      {
        name: "HTML",
        description: "Structure of the application.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        description: "Styling and dark/light mode.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        description: "Core functionality for quotes.",
        link: "https://www.javascript.com/",
      },
      {
        name: "Bootstrap",
        description: "Responsive design framework.",
        link: "https://getbootstrap.com/",
      },
    ],
    technologiesIcons: [HTML, CSS, Bootstrap, JavaScript],
    category: "Pure Js",
    categoryIcons: [JavaScript],
  },
  {
    id: 12,
    title: "Yummy",
    description:
      "A versatile meal discovery app that allows users to search for meals, explore detailed recipes, and discover dishes by categories, regions, and ingredients. Perfect for home cooks and food enthusiasts looking to expand their culinary repertoire!",
    img: "/assets/projectsImgs/Yummy/Cover.jpg",
    imgs: [
      "/assets/projectsImgs/Yummy/NewFolder/1.jpg",
      "/assets/projectsImgs/Yummy/NewFolder/2.jpg",
      "/assets/projectsImgs/Yummy/NewFolder/3.jpg",
      "/assets/projectsImgs/Yummy/NewFolder/4.jpg",
      "/assets/projectsImgs/Yummy/NewFolder/5.jpg",
      "/assets/projectsImgs/Yummy/NewFolder/6.jpg",
    ],
    demo: "https://mfawzy9.github.io/Yummy/",
    repo: "https://github.com/Mfawzy9/Yummy",
    technologies: [
      {
        name: "JavaScript",
        description: "Core programming language.",
        link: "https://www.javascript.com/",
      },
      {
        name: "jQuery",
        description: "Simplifies DOM manipulation.",
        link: "https://jquery.com/",
      },
      {
        name: "HTML",
        description: "Structure of the app.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        description: "Styling and presentation.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Object-Oriented Programming",
        description: "Code organization methodology.",
        link: "https://en.wikipedia.org/wiki/Object-oriented_programming",
      },
    ],
    technologiesIcons: [HTML, Bootstrap, JQuery, JavaScript, CSS],
    category: "Pure Js",
    categoryIcons: [JavaScript],
  },
  {
    id: 13,
    title: "someJQuery",
    description:
      "This simple application demonstrates the use of jQuery by applying various features such as DOM manipulation, event handling, and animations, showcasing its versatility and ease of use in web development.",
    img: "/assets/projectsImgs/someJQuery/Cover.jpg",
    imgs: [
      "/assets/projectsImgs/someJQuery/NewFolder/1.jpg",
      "/assets/projectsImgs/someJQuery/NewFolder/2.jpg",
      "/assets/projectsImgs/someJQuery/NewFolder/3.jpg",
      "/assets/projectsImgs/someJQuery/NewFolder/4.jpg",
    ],
    demo: "https://mfawzy9.github.io/someJQuery/",
    repo: "https://github.com/Mfawzy9/someJQuery",
    technologies: [
      {
        name: "HTML",
        description: "Structure of the application.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        description: "Styling and visual presentation.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "jQuery",
        description: "Simplified JavaScript for DOM manipulation.",
        link: "https://jquery.com/",
      },
      {
        name: "JavaScript",
        description: "Core functionality and interactivity.",
        link: "https://www.javascript.com/",
      },
      {
        name: "Bootstrap",
        description: "Responsive CSS framework.",
        link: "https://getbootstrap.com/",
      },
    ],
    technologiesIcons: [HTML, Bootstrap, JQuery, JavaScript, CSS],
    category: "Pure Js",
    categoryIcons: [JavaScript],
  },
];
