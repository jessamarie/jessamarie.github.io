export function SkillsController (Skill) {
  this.skills = Skill.all()
  this.goodSkills = Skill.allExperienced()
  this.beginnerSkills = Skill.allBeginner()
}
