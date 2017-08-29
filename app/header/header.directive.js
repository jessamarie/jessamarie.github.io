export function
header () {
  return {
    templateUrl: 'app/header/header.html',
    restrict: 'E',
    controller: 'HeaderController',
    controllerAs: 'vm'
  }
}
