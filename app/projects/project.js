export function
Project (Skill) {
  const skills = Skill.all()

  const projects = [
    {
      name: 'Moments',
      repo: 'http://github.com/jessamarie/Moments',
      description: 'What else happened on the day you were born?',
      keywords: ['Ruby on Rails', 'AngularJS', 'HTML5', 'CSS3'],
      technologies: []
    },
    {
      name: 'Reverse Hangman',
      repo: 'http://github.com/jessamarie/Moments',
      description: 'A unique hangman game--in reverse!',
      keywords: ['JavaScript', 'JCanvas', 'HTML5', 'CSS3'],
      technologies: []
    },
    {
      name: 'jessamarie.github.io',
      repo: 'http://github.com/jessamarie/jessamarie.github.io',
      description: 'My Portfolio Site',
      keywords: ['AngularJS', 'Webpack', 'HTML5', 'CSS3'],
      technologies: []
    }
  ]

  populateTechnologies()

  function populateTechnologies () {
    console.log('populating')
    projects.forEach(function (project) {
      project.keywords.forEach(function (technology) {
        skills.forEach((skill) => {
          if (skill.technology === technology) {
            project.technologies.push(skill)
          }
        })
      })
    })

    console.log(projects);
  }

  return {
    all: all
  }

  function all () {
    return projects
  }
}
