import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import './contact.less'

import { Router } from './contact.routes.js'

export default angular
    .module('app.contact', [uirouter])
    .config(Router)
    .name
