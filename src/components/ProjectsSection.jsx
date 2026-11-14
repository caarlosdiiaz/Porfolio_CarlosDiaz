import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { useTranslation } from "react-i18next"

const projects = [
  {
    id: 1,
    title: "Lomo Toilet",
    description: "Aplicación web hecha para manejar el uso de los baños de los institutos y crear estadísticas.",
    image: "/projects/lomoToilet.png",
    Tags: ["React", "Ionic", "Bootstrap", "Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/caarlosdiiaz/Proyecto_Final_Dam"
  },
  {
    id: 2,
    title: "Videojuego en React",
    description: "Videojuego interactivo con selección de personajes, donde cada uno tiene características únicas.",
    image: "/projects/videogame.jpg",
    Tags: ["React", "CSS", "JavaScript"],
    githubUrl: "https://github.com/caarlosdiiaz/Proyecto_Final_Dam"
  }
]

export const ProjectsSection = () => {
  const { t } = useTranslation()
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("projects.title")} <span className="text-primary">{t("projects.titleHighlight")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="py-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.Tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="px-2">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t(`projects.items.${project.id}.description`)}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 mb-4 ml-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/caarlosdiiaz"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            {t("projects.cta")} <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}