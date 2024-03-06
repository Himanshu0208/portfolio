export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Qualification",
    hash: "#qualification",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectData = [
  { 
    title: "Plant Care", 
    description:'"Plant Care" is an AI-powered app for diagnosing plant diseases. It provides accurate predictions, along with three preventive measures and cures. With multilingual support, it ensures global accessibility and ease of use.', 
    imageUrl: "/assets/plantCare.png",
    github: "https://github.com/Himanshu0208/PlantCare",
    tags: ["SkLearn", "Flask", "Tensorflow", "python"]
  },
  { 
    title: "Diamond Price Prediction", 
    description:"Diamond Price Prediction is a machine learning model which can check the quality of the diamonds on the basis of carat,cut,color,clarity,depth etc feature. With an accuracy of 97.68% it can be used for automating the diamond quality checking process", 
    imageUrl: "/assets/diamondPricePrediction.png",
    github: "https://github.com/Himanshu0208/DiamondPricePrediction",
    tags: ["SkLearn", "Flask", "Tensorflow"]
  },
  { 
    title: "Portfolio", 
    description:"A visually captivating and user-friendly personal portfolio website showcasing my expertise in Web Devlopment and Machine Learning.Explore my portfolio to discover my professional journey and diverse range of projects.", 
    imageUrl: "/assets/portfolio-light.png",
    github: "https://github.com/Himanshu0208/portfolio",
    tags: ["next.js", "react", "typescript", "tailwind", "redux"]
  }
] as const;

export const qualificationData = [
  { degree : "Secondary School",university : "KL Mehta Dayanand School,",city : "Faridabad",from : "2017",to : "2018"},
  { degree : "Senior Secondary School",university : "KL Mehta Dayanand School,",city : "Faridabad",from : "2019",to : "2020"},
  { degree : "Btech Computer Engg",university : "JC Bose University,",city : "Faridabad",from : "2021",to : "present"},
] as const;

export const skillsData = [
  {
    name: "Front-End Web Devlopment",
    skill: [
      { name: "next", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
      { name: "vite", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" },
      { name: "Type Script", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
      { name: "react", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "tailwind", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    ]
  },
  {
    name: "Back-End Web Devlopment",
    skill: [
      { name: "Node.js", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
      { name: "Express", percentage: 100, url: "/assets/express.png" },
      { name: "Mongo DB", percentage: 100, url: "/assets/MongoDB_Logomark_SpringGreen.png" },
      { name: "My SQL", percentage: 100, url: "https://labs.mysql.com/common/logos/mysql-logo.svg" },
    ]
  },
  {
    name: "Machine Learning",
    skill: [
      { name: "Python", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
      { name: "Flask", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" },
      { name: "TensorFlow", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/TensorFlow_logo.svg" },
      { name: "SkLearn", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "SciPy", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg" },
    ]
  }
];