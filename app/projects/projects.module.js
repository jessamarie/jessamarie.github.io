import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import './projects.less'

import { Router } from './projects.routes.js'
import { Project } from './project.js'
import { Skill } from '../skills/skill.js'

export default angular
    .module('app.projects', [uirouter])
    .config(Router)
    .factory('Project', Project)
    .name
