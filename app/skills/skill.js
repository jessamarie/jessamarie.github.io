export function
Skill () {
  const skills = [
    {
      technology: 'AngularJS',
      level: 'experienced',
      iconClass: 'devicon-angularjs-plain-wordmark colored'
    },
    {
      technology: 'JavaScript',
      level: 'experienced',
      iconClass: 'devicon-javascript-plain colored'
    },
    {
      technology: 'Java',
      level: 'experienced',
      iconClass: 'devicon-java-plain-wordmark colored'
    },
    {
      technology: 'C',
      level: 'experienced',
      iconClass: 'devicon-c-plain colored'
    },
    {
      technology: 'jQuery',
      level: 'experienced',
      iconClass: 'devicon-jquery-plain-wordmark colored'
    },
    {
      technology: 'Ruby',
      level: 'experienced',
      iconClass: 'devicon-ruby-plain-wordmark colored'
    },
    {
      technology: 'Ruby on Rails',
      level: 'experienced',
      iconClass: 'devicon-rails-plain-wordmark colored'
    },
    {
      technology: 'nodejs',
      level: 'beginner',
      iconClass: 'devicon-nodejs-plain-wordmark colored'
    },
    {
      technology: 'Vuejs',
      level: 'beginner',
      iconClass: 'devicon-vuejs-plain-wordmark colored'
    },
    {
      technology: 'Webpack',
      level: 'beginner',
      iconClass: 'devicon-webpack-plain-wordmark colored'
    },
    {
      technology: 'express',
      level: 'beginner',
      iconClass: 'devicon-express-original-wordmark'
    },
    {
      technology: 'mongoDB',
      level: 'beginner',
      iconClass: 'devicon-mongodb-plain-wordmark colored'
    },
    {
      technology: 'React',
      level: 'beginner',
      iconClass: 'devicon-react-original-wordmark colored'
    },
    {
      technology: 'HTML5',
      level: 'experienced',
      iconClass: 'devicon-html5-plain-wordmark colored'
    },
    {
      technology: 'CSS3',
      level: 'experienced',
      iconClass: 'devicon-css3-plain-wordmark colored'
    },
    {
      technology: 'less',
      level: 'experienced',
      iconClass: 'devicon-less-plain-wordmark colored'
    },
    {
      technology: 'PostgreSQL',
      level: 'experienced',
      iconClass: 'devicon-postgresql-plain-wordmark colored'
    },
    {
      technology: 'linux',
      level: 'experienced',
      iconClass: 'devicon-linux-plain colored'
    },
    {
      technology: 'atom',
      level: 'experienced',
      iconClass: 'devicon-atom-original-wordmark'
    },
    {
      technology: 'git',
      level: 'experienced',
      iconClass: 'devicon-git-plain-wordmark colored'
    },
    {
      technology: 'Bootstrap',
      level: 'beginner',
      iconClass: 'devicon-bootstrap-plain-wordmark colored'
    },
    {
      technology: 'Heroku',
      level: 'beginner',
      iconClass: 'devicon-heroku-plain-wordmark colored'
    },
    {
      technology: 'gulp',
      level: 'beginner',
      iconClass: 'devicon-gulp-plain colored'
    },
    {
      technology: 'grunt',
      level: 'beginner',
      iconClass: 'devicon-grunt-line-wordmark colored'
    },
    {
      technology: 'erlang',
      level: 'beginner',
      iconClass: 'devicon-erlang-plain-wordmark colored'
    },
    {
      technology: 'c++',
      level: 'beginner',
      iconClass: 'devicon-cplusplus-plain colored'
    },
    {
      technology: 'mysql',
      level: 'beginner',
      iconClass: 'devicon-mysql-plain-wordmark colored'
    },
    {
      technology: 'python',
      level: 'beginner',
      iconClass: 'devicon-python-plain-wordmark colored'
    },
    {
      technology: 'haskell',
      level: 'beginner',
      class: 'haskell'
    },
    {
      technology: 'prolog',
      level: 'beginner',
      class: 'prolog'
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
