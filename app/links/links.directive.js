import { LinksController } from './links.controller.js'

export function
links () {
  return {
    templateUrl: 'app/links/links.html',
    restrict: 'E',
    controller: LinksController,
    controllerAs: 'links'
  }
}
