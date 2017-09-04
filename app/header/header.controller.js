export function HeaderController (NavLink) {
  const vm = this
  vm.menu = NavLink.all()
}
