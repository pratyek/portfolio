import { Github, Globe, Linkedin, Mail, Twitter } from 'lucide-react'

export const navigationLinks = [
  {
    "name": "Home",
    "href": "#home"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Projects",
    "href": "#projects"
  },
  {
    "name": "Skills",
    "href": "#skills"
  },
  {
    "name": "Experience",
    "href": "#experience"
  },
  {
    "name": "Education",
    "href": "#education"
  },
  {
    "name": "Certifications",
    "href": "#certifications"
  },
  {
    "name": "Contact",
    "href": "#contact"
  }
]

export const socialLinks = [
  {
    "platform": "github",
    "url": "https://github.com/pratyek",
    icon: Github
  },
  {
    "platform": "linkedin",
    "url": "https://www.linkedin.com/in/pratyek-thumula-2a62b4293/",
    icon: Linkedin
  },
  {
    "platform": "email",
    "url": "mailto:pratyekpk3@gmail.com",
    icon: Mail
  }
]

export const personalInfo = {
  "name": "Pratyek Thumula",
  "title": "Software Engineer",
  "email": "your.email@example.com",
  "location": "Hyderabad , Telangana , India",
  "bio": "Full-stack developer and machine learning enthusiast pursuing a B.Tech in Computer Science. Experienced in building scalable applications with Next.js, MongoDB, and Docker. Passionate about deep learning and reinforcement learning, demonstrated through the ViTalia project for malaria detection. Always eager to learn and tackle new challenges in both software development and AI.",
  "resumeUrl": "https://www.dropbox.com/scl/fi/m4fbof8p55wtyf44lu57z/pratyek-resume.pdf?rlkey=3hp0ve36kbovkqn5ivoj7063d&raw=1",
  "imageUrl": "https://www.dropbox.com/scl/fi/jq9ymszyz1khnluw9403t/my-photo.jpeg?rlkey=f7x0ksjrlh1xiv0tgjymbf9ie&raw=1",
  "logoFormat": "initials",
  "openToWork": true,
  "web3formsKey": "a51fe689-bbe3-4e44-960f-373c622b30ca"
}

export const projects = [
  {
    "title": "ViTalia - Vision Transformer for Malaria Detection",
    "description": "Developed a Vision Transformer (ViT) solution for malaria detection, achieving a 97.53% accuracy, surpassing CNN models by 2.13%. The project integrates memory, reasoning, and reinforcement learning for improved medical diagnosis performance.",
    "tags": [
      "Vision Transformer",
      "Reinforcement Learni",
      "PyTorch",
      "TensorFlow",
      "Medical Imaging",
      "AI"
    ],
    "links": [
      {
        "name": "Github",
        "url": "https://github.com/rzeta-10/ViTalia",
        icon: Github
      }
    ],
    "inDevelopment": true
  },
  {
    "title": "Full-Stack YouTube Downloader",
    "description": "Engineered a high-performance YouTube downloader with video/audio extraction, clip selection, and format options. The architecture utilizes Next.js, MongoDB, BullMQ, and Redis for scalability and asynchronous processing. Docker was used to containerize the application for seamless deployment.",
    "tags": [
      "Next.js",
      "MongoDB",
      "BullMQ",
      "Redis",
      "Docker",
      "Full-stack"
    ],
    "links": [
      {
        "name": "Github",
        "url": "https://github.com/pratyek/mp3-downloader",
        icon: Github
      }
    ],
    "inDevelopment": false
  },
  {
    "title": "Deep Learning Models from Scratch",
    "description": "EImplemented various deep learning architectures like ResNet-152, CNNs, AutoEncoders, and GANs from scratch using PyTorch and TensorFlow. Focused on optimizing hyperparameters for high accuracy across diverse datasets.",
    "tags": [
      "PyTorch",
      "TensorFlow",
      "Deep Learning",
      "GAN",
      "Neural Networks",
      "RNN"
    ],
    "links": [
      {
        "name": "Github",
        "url": "https://github.com/pratyek/DL",
        icon: Github
      }
    ],
    "inDevelopment": false
  },
  {
    "title": "Jobby App - Job Search Platform",
    "description": "Developed a job search platform with a secure authentication system using JWT tokens. The app allows users to log in, search jobs, and view detailed listings. Built with React.js and integrated with REST APIs for dynamic content.",
    "tags": [
      "ReactJS",
      "JWT authentication",
      "REST API",
      "Local Storage",
      "Full-stack"
    ],
    "links": [
      {
        "name": "Jobby-app",
        "url": "http://pratyekjobbyapp.ccbp.tech",
        icon: Globe
      }
    ],
    "inDevelopment": false
  },
  {
    "title": "Nxt Watch - YouTube Clone",
    "description": "Created a YouTube clone where users can log in, search for videos, view details, and toggle between light and dark themes. The app includes secure authentication and routing for a seamless user experience.",
    "tags": [
      "ReactJS",
      "JWT authentication",
      "REST API",
      "Full-stack"
    ],
    "links": [
      {
        "name": "Nxt Watch",
        "url": "http://pratyeknxtwatch.ccbp.tech",
        icon: Globe
      }
    ],
    "inDevelopment": false
  },
  {
    "title": "IPL Dashboard",
    "description": "Developed an IPL dashboard to list teams and display detailed information about each team's matches. The app fetches data asynchronously using API calls and uses React Router for page routing and navigation.",
    "tags": [
      "ReactJS",
      "API integration",
      "Routing",
      "JavaScript",
      "Full-stack"
    ],
    "links": [
      {
        "name": "IPL Dashboard",
        "url": "http://pratyekipl.ccbp.tech",
        icon: Globe
      }
    ],
    "inDevelopment": false
  },
  {
    "title": "Automation of Network Configurations using Python Scripting",
    "description": "Automated network management tasks like IP assignment and ACL management with Python scripting. Used Paramiko and Netmiko libraries for secure device connections and created scalable backup solutions for network configurations.",
    "tags": [
      "Python",
      "Networking",
      "Automation",
      "Paramiko",
      "Netmiko"
    ],
    "links": [
      {
        "name": "Github",
        "url": "https://github.com/pratyek",
        icon: Github
      }
    ],
    "inDevelopment": false
  },
  {
    "title": "UnixLite - Minimalist Unix-like Shell",
    "description": "Developed a lightweight Unix-like shell supporting essential commands like process handling and file operations using C and Unix system calls. Implemented features like redirection, piping, and multi-process management.",
    "tags": [
      "C",
      "Unix System Calls",
      "Shell scripting",
      "Bash",
      "Operating Systems"
    ],
    "links": [
      {
        "name": "Github",
        "url": "https://github.com/rzeta-10/UnixLite",
        icon: Github
      }
    ],
    "inDevelopment": false
  },
  {
    "title": "Smile Lab",
    "description": "Smile Lab is a web application designed to provide lab-related services, leveraging modern technologies like TypeScript and Node.js. The application includes various functionalities related to lab management, with a responsive front end and seamless back-end integration to improve user experience. It utilizes Tailwind CSS for styling and Vite for fast development, ensuring performance and scalability.",
    "tags": [
      "Typescript",
      "NodeJS",
      "Tailwind CSS",
      "Vite",
      "Full-stack"
    ],
    "links": [
      {
        "name": "Github",
        "url": "https://github.com/VIVEKREDDYGOLLALA/Smile_Lab",
        icon: Github
      }
    ],
    "inDevelopment": false
  }
]

export const skills = [
  {
    "category": "Languages",
    "items": [
      {
        "name": "Java",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        "name": "Python",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        "name": "Javascript",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        "name": "HTML",
        "icon": "https://www.dropbox.com/scl/fi/qlk211pn5ueb17gw36mui/HTML5.png?rlkey=t0mryjr28915h5bk495xfekni&st=4nhfo0qk&raw=1"
      },
      {
        "name": "CSS",
        "icon": "https://www.dropbox.com/scl/fi/jqdx5b3pginw8gumalhwf/CSS3.png?rlkey=ts5q8m2h9n7rcs8pa0545mzxw&st=jeq4tm7s&raw=1"
      },
      {
        "name": "YAML",
        "icon": "https://www.dropbox.com/scl/fi/ctq2qh182xtgniyetm9l2/YAML.png?rlkey=y5ur6yh8vechovjj82f6hx3iv&st=w29msxuq&raw=1"
      },
      {
        "name": "Bash",
        "icon": "https://www.dropbox.com/scl/fi/n2e3wa7ydvxdffm9v8qmx/Bash.png?rlkey=bthqmpf8q7mv9d5jj2jexg0z8&st=fp8a5oho&raw=1"
      },
      {
        "name": "Cpp",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
      }
    ]
  },
  {
    "category": "Databases & Messaging",
    "items": [
      {
        "name": "PostgreSQL",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      },
      {
        "name": "MongoDB",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      },
      {
        "name": "Redis",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
      },
      {
        "name": "Sqlite",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
      },
      {
        "name": "Mysql",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        "name": "Ubuntu",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
      }
    ]
  },
  {
    "category": "Infrastructure & Tools",
    "items": [
      {
        "name": "AWS",
        "icon": "https://www.dropbox.com/scl/fi/5q3sbh6jkpbg76rpye80q/aws-icon.png?rlkey=ldi13y3rmrjlb1c1i9vtvfire&st=lpelux0v&raw=1"
      },
      {
        "name": "Docker",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      },
      {
        "name": "Git",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      }
    ]
  },
  {
    "category": "Frameworks",
    "items": [
      {
        "name": "Spring",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
      }
    ]
  },
  {
    "category": "Libraries",
    "items": [
      {
        "name": "React",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        "name": "Nextjs",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      },
      {
        "name": "Express",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      }
    ]
  }
]

export const experience = [
  {
    "title": "ML trainee",
    "company": "ASL , DRDL ",
    "location": "Kanchan bagh , hyderabad",
    "startYear": "2024",
    "endYear": "2024",
    "isOngoing": false,
    "description": [
      "Worked as an ML trainee at ASL, developing software fault prediction models using NASA Promise datasets to enhance system reliability through ML."
    ]
  }
]

export const education = [
  {
    "degree": "Bachelor of Technology in Computer Science",
    "institution": "IIIT, Design and Manufacturing, Kancheepuram",
    "location": "Chennai, Tamil Nadu, IND",
    "startYear": "2022",
    "endYear": "",
    "isOngoing": true,
    "description": "Specialized in ML / DL, Achieved top grades in DSA , Design and Analysis of Algorithm"
  }
]

export const certifications = [
  {
    "title": "Java 17 Masterclass",
    "issuer": "Udemy",
    "issueDate": "2024",
    "expiryDate": "",
    "credentialId": "0004",
    "credentialUrl": "",
    "description": "Learned advanced Java 17 concepts, including new language features, functional programming techniques, and performance optimization. Gained hands-on experience with Java's latest updates, building efficient and scalable applications.\n"
  },
  {
    "title": "Python",
    "issuer": "NPTEL",
    "issueDate": "2024",
    "expiryDate": "",
    "credentialId": "NPTEL24CS57S653407817",
    "credentialUrl": "",
    "description": "Gained a strong foundation in Python programming through the NPTEL \"Joy of Computing\" course, covering basic syntax, data structures, and problem-solving techniques. Developed the ability to write efficient and clean Python code for real-world applications."
  },
  {
    "title": "React",
    "issuer": "CCBP academy",
    "issueDate": "2024",
    "expiryDate": "",
    "credentialId": "YEMMPBBSKS",
    "credentialUrl": "",
    "description": "Mastered React.js fundamentals through CCBP Academy, including component-based architecture, state management, and building interactive UIs. Gained practical experience in creating dynamic web applications with React's modern features and best practices.\n"
  },
  {
    "title": "Node JS",
    "issuer": "CCBP Academy",
    "issueDate": "2024",
    "expiryDate": "",
    "credentialId": "ZQOJEFIUYT",
    "credentialUrl": "",
    "description": "Acquired in-depth knowledge of Node.js for building scalable and high-performance server-side applications. Gained hands-on experience with Express.js, API development, and real-time communication using WebSockets."
  },
  {
    "title": "Build your own Dynamic Web application",
    "issuer": "CCBP academy",
    "issueDate": "2023",
    "expiryDate": "",
    "credentialId": "MMPDICLIEK",
    "credentialUrl": "",
    "description": "Learned to design and develop dynamic web applications by integrating front-end and back-end technologies. Gained practical experience in building interactive, user-friendly platforms with a focus on responsiveness, scalability, and efficient data handling."
  }
]
