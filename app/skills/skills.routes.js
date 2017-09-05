import { SkillsController } from './skills.controller.js'

export function Router ($stateProvider) {
  $stateProvider
  .state('skills', {
    url: '/skills',
    templateUrl: 'app/skills/skills.html',
    controller: SkillsController,
    controllerAs: 'vm'
  })
}
