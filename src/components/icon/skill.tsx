// components/SkillIcons.tsx
import {
  Code2,
  Wrench,
  Database,
  Rocket,
  Layers,
  FolderDot,
} from "lucide-react";

type SkillIconsProps = {
  categoryName: string;
};

export function SkillIcons({ categoryName }: SkillIconsProps) {
  // Returns the appropriate icon based on category name
  switch (categoryName) {
    case "Frontend Development":
      return <Code2 className="text-neutral-300 w-5 h-5" />;
    case "Backend Development":
      return <Database className="text-neutral-300 w-5 h-5" />;
    case "Database Management":
      return <FolderDot className="text-neutral-300 w-5 h-5" />;
    case "DevOps & Deployment":
      return <Rocket className="text-neutral-300 w-5 h-5" />;
    case "Others":
      return <Wrench className="text-neutral-300 w-5 h-5" />;
    default:
      return <Layers className="text-neutral-300 w-5 h-5" />;
  }
}
