export function
Skill () {
  const skills = [
    {
      technology: 'AngularJS',
      level: 'experienced',
      class: 'devicon-angularjs-plain colored'
    },
    {
      technology: 'JavaScript',
      level: 'experienced',
      class: 'devicon-javascript-plain colored'
    },
    {
      technology: 'Java',
      level: 'experienced',
      class: 'devicon-java-plain colored'
    },
    {
      technology: 'c',
      level: 'beginner',
      class: 'devicon-c-plain colored'
    },
    {
      technology: 'jQuery',
      level: 'experienced',
      class: 'devicon-jquery-plain-wordmark colored'
    },
    {
      technology: 'Ruby',
      level: 'experienced',
      class: 'devicon-ruby-plain-wordmark colored'
    },
    {
      technology: 'Ruby on Rails',
      level: 'experienced',
      class: 'devicon-rails-plain-wordmark colored'
    },
    {
      technology: 'nodejs',
      level: 'beginner',
      class: 'devicon-nodejs-plain colored'
    },
    {
      technology: 'express',
      level: 'beginner',
      class: ''
    },
    {
      technology: 'mongoDB',
      level: 'beginner',
      class: 'devicon-mongodb-plain-wordmark colored'
    },
    {
      technology: 'react',
      level: 'beginner',
      class: 'devicon-react-original-wordmark colored'
    },
    {
      technology: 'HTML5',
      level: 'experienced',
      class: 'devicon-html5-plain-wordmark colored'
    },
    {
      technology: 'CSS3',
      level: 'experienced',
      class: 'devicon-css3-plain-wordmark colored'
    },
    {
      technology: 'less',
      level: 'experienced',
      class: 'devicon-less-plain-wordmark colored'
    },
    {
      technology: 'PostgreSQL',
      level: 'experienced',
      class: 'devicon-postgresql-plain-wordmark colored'
    },
    {
      technology: 'linux',
      level: 'experienced',
      class: 'devicon-linux-plain colored'
    },
    {
      technology: 'atom',
      level: 'experienced',
      class: 'devicon-atom-original colored'
    },
    {
      technology: 'git',
      level: 'experienced',
      class: 'devicon-git-plain colored'
    },
    {
      technology: 'Bootstrap',
      level: 'beginner',
      class: 'devicon-bootstrap-plain colored'
    },
    {
      technology: 'Heroku',
      level: 'beginner',
      class: 'devicon-heroku-plain-wordmark colored'
    },
    {
      technology: 'gulp',
      level: 'beginner',
      class: 'devicon-gulp-plain colored'
    },
    {
      technology: 'grunt',
      level: 'beginner',
      class: 'devicon-grunt-line-wordmark colored'
    },
    {
      technology: 'erlang',
      level: 'beginner',
      class: 'devicon-erlang-plain-wordmark colored'
    },
    {
      technology: 'c++',
      level: 'beginner',
      class: 'devicon-cplusplus-plain colored'
    },
    {
      technology: 'mysql',
      level: 'beginner',
      class: 'devicon-mysql-plain-wordmark colored'
    },
    {
      technology: 'python',
      level: 'beginner',
      class: 'devicon-python-plain-wordmark colored'
    },
    {
      technology: 'haskell',
      level: 'beginner',
      class: ''
    },
    {
      technology: 'prolog',
      level: 'beginner',
      class: ''
    }
  ]

  return {
    all: all,
    allExperienced: allExperienced,
    allBeginner: allBeginner
  }

  function allExperienced () {
    return skills.filter((skill) => {
      return skill.level === 'experienced'
    })
  }

  function allBeginner () {
    return skills.filter((skill) => {
      return skill.level === 'beginner'
    })
  }

  function all () {
    return skills
  }
}
