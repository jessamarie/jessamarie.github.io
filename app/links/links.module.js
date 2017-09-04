import angular from 'angular'

import './links.less'

import { links } from './links.directive.js'
import { Link } from './link.js'

export default angular
    .module('app.link', [])
    .directive('links', links)
    .factory('Link', Link)
    .name
