// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Emilia",
  middleName: "",
  lastName: "Gibellini",
  message: " Statistician | Data Scientist | Mentor | Consultant ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/emiliagibellini",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/emiliagibellini/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/picture.jpeg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/picture.jpeg"),
  imageSize: 375,
  message:
    "My name is Emilia, and I love solving problems. Ever since I was a kid, I have been fascinated by math problems. Then, I became a Statistician and made a living out of it. My first working experiences were in research and consulting, after which I focused on improving my coding skills and started to develop machine learning projects. These days, I'm based in Buenos Aires and team up with other consultants, freelancers and AI companies to empower businesses through better use of data. If you're facing a new challenge and would like to discuss possible approaches, or if you already have a project on your mind, let's talk!",
  resume: "https://drive.google.com/file/d/1hYphReMjPSsAolY_XgHqtFptfXQWk33l/view",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "emiliagibellini", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/picture.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/picture.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 90 },
    { name: "Version control", value: 85 },
    { name: "Data structures", value: 65 },
    { name: "R", value: 90 },
    { name: "AWS Cloud", value: 65 },
    { name: "Google Cloud", value: 55 },
    { name: "Docker containers", value: 50 },
  ],
  softSkills: [
    { name: "Teamwork", value: 90 },
    { name: "Leadership", value: 80 },
    { name: "Research", value: 75 },
    { name: "Public speaking", value: 70 },
    { name: "Problem solving", value: 90 },
    { name: "Time management", value: 80 },
    { name: "Creativity", value: 75 },
    { name: "Diligent", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Feel free to contact me at ",
  email: "emiliagibellini@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
