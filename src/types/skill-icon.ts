export interface Skill {
  name: string;
  level: number;
  description: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}
