import angular from 'angular'

import { footer } from './footer.directive.js'
import { FooterLink } from './footerlink.js'

export default angular
    .module('app.footer', [])
    .directive('footerMenu', footer)
    .factory('FooterLink', FooterLink)
    .name
