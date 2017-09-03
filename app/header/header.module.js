import angular from 'angular'

import './header.less'

import { header } from './header.directive.js'
import { NavLink } from './navlink.js'

export default angular
    .module('app.header', [])
    .directive('headerMenu', header)
    .factory('NavLink', NavLink)
    .name
