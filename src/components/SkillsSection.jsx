import { useState } from "react"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

const skills = [
  { name: "Next", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Angular", level: 30, category: "frontend" },
  { name: "Kotlin", level: 50, category: "frontend" },
  { name: "Tailwind", level: 60, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },

  { name: "SpringBoot", level: 50, category: "backend" },
  { name: "Nest.js", level: 50, category: "backend" },
  { name: "Python", level: 70, category: "backend" },

  { name: "SQL", level: 90, category: "databases" },
  { name: "MongoDB", level: 70, category: "databases" },

  { name: "Git", level: 90, category: "tools" },
  { name: "Postman", level: 100, category: "tools" },
  { name: "Docker", level: 50, category: "tools" },
]

const categories = ["all", "frontend", "backend", "databases", "tools"]

export const SkillsSection = () => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState("all")
  const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("skills.title")} <span className="text-primary">{t("skills.titleHighlight")}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 cursor-pointer py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category ?
                  "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:db-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {t(`skills.categories.${category}`)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="flex items-center justify-between mb-4">
                <img src={`/skills/${skill.name}.svg`} alt={skill.name} className="w-8 h-8" />
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}