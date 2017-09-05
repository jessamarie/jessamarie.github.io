import { ProjectsController } from './projects.controller.js'

export function Router ($stateProvider) {
  $stateProvider
  .state('projects', {
    url: '/projects',
    templateUrl: 'app/projects/projects.html',
    controller: ProjectsController,
    controllerAs: 'vm'
  })
}
