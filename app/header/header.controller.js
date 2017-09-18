export function HeaderController (NavLink, $state) {
  const vm = this
  vm.menu = NavLink.all()

  vm.state = $state

  this.active = function (name) {
    // code to check for state is active
    // and return 'active'
    // console.log($state.is(name))
    return ''
  }
}
