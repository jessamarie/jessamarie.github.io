import angular from 'angular'

import { FooterController } from './footer.controller.js'
import { footer } from './footer.directive.js'
import { FooterLink } from './footerlink.js'

export default angular
    .module('app.footer', [])
    .controller('FooterController', FooterController)
    .directive('footerMenu', footer)
    .factory('FooterLink', FooterLink)
    .name
