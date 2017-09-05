export function SkillsController (Skill) {
  this.message = 'Olah'
  this.skills = Skill.all()
  this.goodSkills = Skill.allExperienced()
  this.beginnerSkills = Skill.allBeginner()
}
