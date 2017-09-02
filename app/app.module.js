// Styles
import './style.less'

// 3rd party modules
import angular from 'angular'

// Modules
import home from './home/home.module'
import header from './header/header.module'
import footer from './footer/footer.module'

angular.module('app', [
  // dependencies
  'ui.router',
  // custom
  home,
  header,
  footer
])
