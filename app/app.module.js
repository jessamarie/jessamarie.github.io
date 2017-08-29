// Styles
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

// 3rd party modules
import angular from 'angular'

// Modules
import home from './home/home.module'

angular.module('app', [
  // dependencies
  'ui.router',
  // custom
  home
])
