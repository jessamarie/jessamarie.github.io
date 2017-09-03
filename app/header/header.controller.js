export function HeaderController (NavLink) {
  const vm = this
  console.log(this);
  vm.menu = NavLink.all()
}
