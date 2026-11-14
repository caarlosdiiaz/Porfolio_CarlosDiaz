import { useState } from "react"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

const skills = [
  { name: "Next", category: "frontend", main: true },
  { name: "React", category: "frontend", main: true },
  { name: "Angular", category: "frontend", main: false },
  { name: "Kotlin", category: "frontend", main: false },
  { name: "Tailwind", category: "frontend", main: false },
  { name: "Bootstrap", category: "frontend", main: false },

  { name: "SpringBoot", category: "backend", main: true },
  { name: "Nest.js", category: "backend", main: false },
  { name: "Python", category: "backend", main: false },

  { name: "SQL", category: "databases", main: true },
  { name: "MongoDB", category: "databases", main: false },

  { name: "Git", category: "tools", main: false },
  { name: "Postman", category: "tools", main: false },
  { name: "Docker", category: "tools", main: false },
]

const categories = ["all", "frontend", "backend", "databases", "tools"]

export const SkillsSection = () => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState("all")
  const filteredSkills = skills
    .filter((skill) => activeCategory === "all" || skill.category === activeCategory)
    .sort((a, b) => (b.main ? 1 : 0) - (a.main ? 1 : 0))
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
                  "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {t(`skills.categories.${category}`)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-6 justify-center">
          <img src="/skills/Star.svg" alt={t("inMainStack")} className="w-4 h-4" />
          <span className="text-sm text-muted-foreground">{t("inMainStack")}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover relative">
              {skill.main && (
                <img title={t("inMainStack")} src="/skills/Star.svg" alt={t("inMainStack")} className="absolute top-2 right-2 w-4 h-4" />
              )}
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