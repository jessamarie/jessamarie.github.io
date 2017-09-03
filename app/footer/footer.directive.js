import { FooterController } from './footer.controller.js'

export function
footer () {
  return {
    templateUrl: 'app/footer/footer.html',
    restrict: 'E',
    controller: FooterController,
    controllerAs: 'footer'
  }
}
