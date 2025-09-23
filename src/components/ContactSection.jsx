import {
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
          Contacto
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Estaré encantado de recibir mensajes de cómo enfocar mi carrera, cosas a mejorar, ideas de proyectos...
        </p>

        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Datos de contacto
            </h3>

            <div className="space-y-6 flex flex-col items-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:diazromerocarlos0@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    diazromerocarlos0@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Ubicación</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Las Palmas de Gran Canaria, ES
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col items-center">
              <h4 className="font-medium mb-4 text-center"> Conéctate conmigo</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/carlos-d%C3%ADaz-romero-7429961b7/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://github.com/caarlosdiiaz">
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
