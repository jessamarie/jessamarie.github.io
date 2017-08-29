import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import { Router } from './home.routes.js'

export default angular
    .module('app.home', [uirouter])
    .config(Router)
    .name
