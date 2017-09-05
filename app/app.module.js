// Styles
import './index.less'

// 3rd party modules
import angular from 'angular'

// Modules
import home from './home/home.module'
import header from './header/header.module'
import links from './links/links.module'
import skills from './skills/skills.module'

import { Router } from './app.routes.js'

angular.module('app', [
  // dependencies
  'ui.router',
  // custom
  home,
  header,
  links,
  skills
])
.config(Router)
