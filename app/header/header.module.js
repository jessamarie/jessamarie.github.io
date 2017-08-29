import angular from 'angular'

import { HeaderController } from './header.controller.js'
import { Header } from './header.directive.js'
import { NavLink } from './navlink.js'

export default angular
    .module('app.header', [])
    .controller(HeaderController)
    .directive(Header)
    .factory(NavLink)
    .name
