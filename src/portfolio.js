const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://balqiskinanti.github.io/Portfolio/',
  title: 'BK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Balqis Kinanti',
  role: 'Information Technology Graduate',
  description:
    "Hello! My name is Balqis. I'm an IT graduate from Ngee Ann Polytechnic, Singapore. I teach coding at Timedoor Academy and I was a Data Analyst Intern at KrisShop. I like web development, music, cafe hopping and gym. Check out my portfolio below!",
  resume: 'https://drive.google.com/file/d/1oYsahGQxRs1lXcHttkzCqfA2u4zpbqAj/view?usp=sharing',
  testimonial : 'https://drive.google.com/file/d/1hPqgCeFySzAJr-2KzetxukvpdVLO8zNJ/view?usp=sharing',
  social: {
    linkedin: '',
    github: 'https://github.com/Balqiskinanti',
    instagram: 'https://www.instagram.com/_qnant/'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Kamaemon | iOS Application',
    description:
      'Volunteering application that lets users post their requests & volunteers to accept. In-app real time chat, map and leaderboard functionalities are available among many others.',
    stack: ['Swift', 'CocoaPods', 'Firebase', 'Azure API'],
    sourceCode: 'https://github.com/jordanchoi/mad2-p02-assignment-team1-kamaemon'
  },
  {
    name: 'GreenDemic | Web Application Hackathon',
    description:
      "Food inventories tracker that aims to reduce food waste. Scanner is used to identify the product's calories and match it with user's recommended calories intake to reduce overconsumption.",
    stack: ['ASP.NET', 'HTML,CSS,JS', 'SQL', 'Scandit','Azure Database', 'Power BI'],
    sourceCode: 'https://github.com/Balqiskinanti/GreenDemic'
  },
  {
    name: 'MADFit | Android Application',
    description:
      'Android application that encourages people to watch their diet and exercise. In-app music service is also available for users to listen, while working out.',
    stack: ['Java', 'MailChimp'],
    sourceCode: 'https://github.com/Balqiskinanti/MADFit'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Python',
  'C#',
  'ASP.NET',
  'Swift',
  'Java',
  'SQL',
  'Excel',
  'Tableau',
  'Machine Learning',
  'Version Control',
  'Databases',
  'Agile',
  'Figma/Adobe XD',
  'Git',
  'PHP'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'work.balqiskinanti@gmail.com',
}

export { header, about, projects, skills, contact }
