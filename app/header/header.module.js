import angular from 'angular'

import { HeaderController } from './header.controller.js'
import { header } from './header.directive.js'
import { NavLink } from './navlink.js'

export default angular
    .module('app.header', [])
    .controller('HeaderController', HeaderController)
    .directive('headerMenu', header)
    .factory('NavLink', NavLink)
    .name
