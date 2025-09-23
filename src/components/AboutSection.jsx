import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">Mí</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desarrollador apasionado con un enfoque en la calidad
            </h3>

            <p className="text-muted-foreground">
              Con experiencia en proyectos personales, como los que puede observar en mi portafolio. Me especializo en crear aplicaciones web modernas y eficientes. Además, me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente.
            </p>

            <p className="text-muted-foreground">
              Siempre estoy buscando nuevas oportunidades para aprender y colaborar con otros.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contactame
              </a>
              <a
                href="/public/CarlosDiazRomero_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desarrollo Backend</h4>
                  <p className="text-muted-foreground">
                    Desarrollo de APIs Restful y servicios escalables probando diferentes tecnologías, buscando la adecuada para cada proyecto.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desarrollo web</h4>
                  <p className="text-muted-foreground">
                    Diseño y desarrollo de aplicaciones web innovadoras y ágiles, utilizando las herramientas tecnológicas más idóneas según el contexto.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                  <h4 className="font-semibold text-lg">Filosofía al programar</h4>
                  <p className="text-muted-foreground">
                    Emplear buenas prácticas como los principios SOLID, el Clean Code y el código reutilizable son mis pilares fundamentales.
                  </p>
                </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}