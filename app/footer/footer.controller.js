export function FooterController (FooterLink) {
  const vm = this
  console.log(this)
  vm.links = FooterLink.all()
}
