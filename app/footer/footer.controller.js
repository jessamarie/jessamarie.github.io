export function FooterController (FooterLink) {
  const vm = this
  vm.links = FooterLink.all()
}
