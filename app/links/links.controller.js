export function LinksController (Link) {
  const vm = this
  vm.links = Link.all()
}
