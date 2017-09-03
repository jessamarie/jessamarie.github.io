// import template from './header.html'
import { HeaderController } from './header.controller.js'
export function
header () {
  return {
    templateUrl: 'app/header/header.html',
    restrict: 'E',
    controller: HeaderController,
    controllerAs: 'header'
  }
}
