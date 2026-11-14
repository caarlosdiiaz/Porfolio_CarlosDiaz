import {
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { t } = useTranslation()
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
          {t("contact.title")}
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.subtitle")}
        </p>

        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {t("contact.info")}
            </h3>

            <div className="space-y-6 flex flex-col items-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> {t("contact.email")}</h4>
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
                  <h4 className="font-medium"> {t("contact.location")}</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    {t("contact.locationValue")}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col items-center">
              <h4 className="font-medium mb-4 text-center"> {t("contact.connect")}</h4>
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
