const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'BK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Balqis Kinanti',
  role: 'Information Technology Student at Ngee Ann Polytechnic',
  description:
    "Hello! I am Balqis Kinanti. I'm a 20 years old, Indonesian currently pursuing my studies in Singapore. I am chill, determined and curious. My hobbies include building side projects, listening to music, and helping others. I am active in my Co-Curricular activities such as Student Council, Girl Guides, and Mentoring and hold leadership positions for all of them. ",
  resume: 'https://connectnpedu-my.sharepoint.com/:b:/g/personal/s10204973_connect_np_edu_sg/EVQNmsJ5WClIjADecrRfnogBDVaNm3vfv4aUskG7rexicA?e=uQ9j64',
  testimonial : 'https://connectnpedu-my.sharepoint.com/:b:/g/personal/s10204973_connect_np_edu_sg/EVhaOKaHdyNOrAHUBvyilSYBSu6SEFupeN2V6TB6kpUvpA?e=2KuQnP',
  social: {
    linkedin: 'https://www.linkedin.com/in/balqiskinanti/',
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
      'Volunteering application that lets users post their requests for volunteers to accept. In-app real time chat, map and leaderboard functionalities are also available among many others.',
    stack: ['Swift', 'CocoaPods', 'Firebase', 'Azure API'],
    sourceCode: 'https://github.com/jordanchoi/mad2-p02-assignment-team1-kamaemon',
    livePreview: 'https://www.youtube.com/watch?v=1pKxL4JJBXo&feature=youtu.be',
  },
  {
    name: 'GreenDemic | Hackathon',
    description:
      'Web-based application for people to track their food inventories at home by simply scanning barcode. Clinched top 5 position.',
    stack: ['ASP.NET', 'HTML,CSS,JS', 'SQL', 'Scandit','Azure Database', 'Power BI'],
    sourceCode: 'https://github.com/Balqiskinanti/GreenDemic',
    livePreview: 'https://greendemic.azurewebsites.net/',
  },
  {
    name: 'MADFit | Android Application',
    description:
      'Android application that encourages people to watch their diet, as well as set goals and plans to exercise frequently. In-app music service is also available for users to listen, while working out.',
    stack: ['Java', 'MailChimp'],
    sourceCode: 'https://github.com/Balqiskinanti/MADFit',
    livePreview: 'https://play.google.com/store/apps/details?id=sg.edu.np.mad.madfit',
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
  'Agile'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'work.balqiskinanti@gmail.com',
}

export { header, about, projects, skills, contact }
