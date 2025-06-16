import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sombo Hai",
  initials: "DV",
  url: "https://haisombo.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Telegram.",
  summary:
    "iOS Developer with 2 years of experience in iOS app development. Proficient in Swift, UIKit, Ui, and CoreData, with hands-on experience designing and implementing scalable, high-performance applications. Skilled in building intuitive user interfaces, integrating RESTful APIs, and ensuring robust app functionality. Strong collaboration skills in working with cross-functional teams to deliver high-quality, user-focused solutions.",
  avatarUrl: "/haisombo.png",

  skills: [
    "Swift Uikit",
    "Swift Ui",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Java",
    "Spring",
    "Python",
    "MySQL",
    "Postgres",
    "Docker",
    "Kubernetes",
    "C#",
    "C++",
    "UX-UI",
    "Adobe",
     "Microsoft",
     "CI-CD",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "haisombo20@gmail.com",
    tel: "+885 93287558",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/settings/profile",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hai-sombo-213b272a5",
        icon: Icons.linkedin,

        navbar: true,
      },
      Feacbook: {
        name: "Feacbook",
        url: "https://www.facebook.com/hai.sombo.1/",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@haisombo-wl7bl?si=XkVRVe5mzmHW-1pj",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
   {
  "company": "Kosign",
  "href": "https://atomic.finance",
  "badges": [],
  "location": "#C168 (Tela Office Building 2nd Floor), Russian Federation Blvd (#110), Toeuk Thla, Sen Sok, Phnom Penh, Cambodia",
  "title": "Software Engineer iOS",
  "logoUrl": "/kosign.jpeg",
  "start": "January 2024",
  "end": "Present",
  "description": "Researched and applied industry best practices in iOS development to build scalable, maintainable, and high-performance applications.\nDesigned, developed, and maintained robust iOS apps using Objective-C, Swift (UIKit & SwiftUI), and CoreData, delivering smooth and intuitive user experiences.\nIntegrated RESTful APIs for secure and efficient communication with backend systems.\nFocused on app performance optimization through effective memory management, asynchronous data handling, and intelligent caching strategies.\nCollaborated with cross-functional teams and documented codebases, system architecture, and APIs to ensure knowledge sharing and maintainable development processes."
  },

    {
      company: "KC Group",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Graphic Designer",
      logoUrl: "/kc.jpeg",
      start: "January 2022",
      end: "April 2023",
      description:
        "Designed posters, backdrops, flyers, name cards, and event banners. Additionally, worked as a cameraman for various company events, etc.",
    },

    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Australian Centre for Education (ACE)",
      href: "https://shortcourses.cstad.edu.kh/", 
      degree: "GEP",
      logoUrl: "/logoACE.png",
      start: "2025",
      end: "Present",
    },
    {
      school: "Cambodia Mekong University",
      href: "https://mekong.edu.kh/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/cmu.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "Institute for International Studies and Public Policy",
      href: "https://rupp.edu.kh/iispp/",
      degree: "English for International Studies",
      logoUrl: "/ippu.jpg",
      start: "2024",
      end: "2025",
    },
    {
      school: "Korea Software HRD Center",
      href: "https://uwaterloo.ca",
      degree: "Software Exports",
      logoUrl: "/HRD.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "Mentors International Cambodian",
      href: "https://mentorsinternational.org/about-us/",
      degree: "Graphic Designer & Video Editor",
      logoUrl: "/mentors_international_logo.jpeg",
      start: "2021",
      end: "2022",
    },
    {
      school: "Institute of Science and Technology Advanced Development",
      href: "https://shortcourses.cstad.edu.kh/",
      degree: "Web Design",
      logoUrl: "/ISTAD.png",
      start: "2022",
      end: "2022",
    },
    {
      school: "Sorya Cambodia",
      href: "https://sorya.org/en/",
      degree: "English",
      logoUrl: "/sorya-logo-2.png",
      start: "2016",
      end: "2020",
    },
 
  ],

  projects: [

    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],

      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },

    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },

    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },

    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },

    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },

    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },

    {
      title: "BNK CAMBODIAN",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://www.bnkcmfi.com/frontend/img/photo_2021-06-24_15-03-10.jpg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        // {
        //   title: "Devpost",
        //   icon: <Icons.globe className="h-4 w-4" />,
        //   href: "https://devpost.com/software/my6footprint",
        // },
        // {
        //   title: "ML",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/Wallet6/my6footprint-machine-learning",
        // },
        // {
        //   title: "iOS",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/Wallet6/CarbonWallet",
        // },
        {
          title: "App Store",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },

    
   
  ],
} as const;
