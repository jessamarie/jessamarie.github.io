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
      repo: 'http://github.com/jessamarie/hangman',
      description: 'A unique hangman game--in reverse!',
      keywords: ['JavaScript', 'JCanvas', 'HTML5', 'CSS3'],
      technologies: []
    },
    {
      name: 'jessamarie.github.io',
      repo: 'http://github.com/jessamarie/jessamarie.github.io',
      description: 'My Githhub Portfolio',
      keywords: ['AngularJS', 'Webpack', 'HTML5', 'CSS3'],
      technologies: []
    }
  ]

  populateTechnologies()

  /* Populates project.technologies with the
    icon classes in skills that match each keyword
  */
  function populateTechnologies () {
    projects.forEach(function (project) {
      project.keywords.forEach(function (technology) {
        skills.forEach((skill) => {
          if (skill.technology === technology) {
            project.technologies.push(skill)
          }
        })
      })
    })
  }

  return {
    all: all
  }

  function all () {
    return projects
  }
}
