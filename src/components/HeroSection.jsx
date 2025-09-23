import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6-xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hola, soy</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Carlos</span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2"> Díaz</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-4">
            Soy un desarrollador full-stack que ha enfocado su carrera en siempre crear código limpio y en utilizar los principios SOLID.
            Me encanta aprender y mejorar mis habilidades constantemente, y disfruto trabajando en proyectos desafiantes que me permiten crecer profesionalmente.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Ver mis proyectos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  )
}