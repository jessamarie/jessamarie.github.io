// Styles
import './index.less'

// 3rd party modules
import angular from 'angular'

// Modules
import home from './home/home.module'
import header from './header/header.module'
import links from './links/links.module'

angular.module('app', [
  // dependencies
  'ui.router',
  // custom
  home,
  header,
  links
])
