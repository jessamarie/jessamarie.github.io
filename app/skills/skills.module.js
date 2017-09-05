import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import './skills.less'

import { Router } from './skills.routes.js'
import { Skill } from './skill.js'

export default angular
    .module('app.skills', [uirouter])
    .config(Router)
    .factory('Skill', Skill)
    .name
