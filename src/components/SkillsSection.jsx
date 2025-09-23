import { useState } from "react"
import { cn } from "@/lib/utils"

const skills = [
  {name: "HTML", level: 80, category: "Frontend"},
  {name: "React", level: 90, category: "Frontend"},
  {name: "Angular", level: 30, category: "Frontend"},
  {name: "Tailwind", level: 60, category: "Frontend"},
  {name: "Bootstrap", level: 80, category: "Frontend"},

  {name: "SpringBoot", level: 50, category: "Backend"},
  {name: "Nest.js", level: 50, category: "Backend"},
  {name: "Python", level: 70, category: "Backend"},

  {name: "SQL", level: 90, category: "Bases de Datos"},
  {name: "MongoDB", level: 70, category: "Bases de Datos"},

  {name: "Git", level: 90, category: "Herramientas"},
  {name: "Postman", level: 100, category: "Herramientas"},
  {name: "Docker", level: 50, category: "Herramientas"},
]

const categories = ["Todas", "Frontend", "Backend", "Bases de Datos", "Herramientas"]

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todas")
  const filteredSkills = skills.filter((skill) => activeCategory === "Todas" || skill.category === activeCategory)
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mis <span className="text-primary">Habilidades</span>
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
              {category}
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

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}