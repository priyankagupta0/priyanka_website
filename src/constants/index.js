import {
    python,
    data,
    anal,
    network,

    css,
    pythonl,
    colab,
    git,
    html,
    javascript,
    powerbi,
    pytorch,
    jupyter,
    tableau,
    tensorflow,
    c,

    thhs,
    svit,
    carrent,
    jobit,
    tripguide,
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
      title: "NLP Engineer",
      icon: python,
    },
    {
      title: "Data Scientist",
      icon: data,
    },
    {
      title: "Data Analyst",
      icon: anal,
    },
    {
      title: "ML Engineer",
      icon: network,
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
      name: "tensorflow",
      icon: tensorflow,
    },
    {
      name: "Google colab",
      icon: colab,
    },
    {
      name: "Python",
      icon: pythonl,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "pytorch",
      icon: pytorch,
    },
    {
      name: "Jupyter",
      icon: jupyter,
    },
    {
      name: "powerBI",
      icon: powerbi,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "tableau",
      icon: tableau,
    },
  ];
  
  const experiences = [
    {
      title: "SSC",
      company_name: "Tree House High School",
      icon: thhs,
      iconBg: "#383E56",
      date: "2019",
      points: [
        // "Developing and maintaining web applications using React.js and other related technologies.",
        
      ],
    },
    {
      title: "HSC",
      company_name: "Tree House High School",
      icon: thhs,
      iconBg: "#E6DEDD",
      date: "2021",
      points: [
      ],
    },
    {
      title: "B.E. in Computer Engineering (Pursuing)",
      company_name: "SVIT, Vasad",
      icon: svit,
      iconBg: "#383E56",
      date: "2021 - 2025",
      points: [
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "Web scraping to gain company insights and predicting customer buying behaviour.",
      name: "Data Science Job Simulation",
      designation: "British Airways",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
      link: "/priyanka_website/src/components/British_Airways_completion_certificate.pdf",

    },
    {
      testimonial:
        "Comprehensive data science course, gaining expertise in web scraping, data cleaning, Plotly visualization, and practical DA. Acquired hands-on coding skills applicable to custom data science projects within an organizational context.",
      name: "Python Essential Training",
      designation: "LinkedIn Learning",
      link: "/priyanka_website/src/components/CertificateOfCompletion_Python Essential Training.pdf",
    },
    {
      testimonial:
        "Comprehensive Python course, covering essential concepts including installation, programming basics, data types, structures, control flow, error handling, and file manipulation.",
      name: "Python for Data Science Essential Training",
      designation: "LinkedIn Learning",
      link: "/priyanka_website/src/components/CertificateOfCompletion_Python for Data Science Essential Training Part 1.pdf",
    },
  ];
  
  const projects = [
    {
      name: "Real-Time Virtual Painter Using AI ",
      description:
        "This tool is used to draw on the screen in real-time, with a user-friendly hand gesture interface—two fingers for selection, one for drawing. Enables color selection through gesture recognition, allowing dynamic drawing Virtually.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/priyankagupta0/Real-Time-Virtual-Painter-Using-AI",
    },
    {
      name: "What Donald Trump might tweet about Russia",
      description:
        "Preprocessed the data with more than 340 tweets by removing stop words, stemming, lemmatization, and tokenizing it, then trained the LSTM model on that data to generate similar tweets.",
      tags: [
        {
          name: "LSTM",
          color: "blue-text-gradient",
        },
        {
          name: "NLP",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/priyankagupta0/Text-generation-using-tweets",
    },
    {
      name: "Self Driving Car",
      description:
        "Implemented neural networks from scratch, to create a self-driving car simulation, where I define the environment, simulate sensors, detect collisions, and make the car control itself, along with the car driving mechanics. Displayed the NNs too.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Neural networks",
          color: "green-text-gradient",
        },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };