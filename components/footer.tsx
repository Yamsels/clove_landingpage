import Link from "next/link";
import { Clover, Linkedin, Github, Twitter, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border text-muted-foreground py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center space-x-2 text-foreground"
            >
              <Image
                src="/logo_fhd_png.png"
                alt="Clove Logo"
                width={100}
                height={100}
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-bold tracking-tight">Clove</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Transformando negocios a través de la automatización inteligente.
              Soluciones personalizadas con IA y n8n.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Automatización para PYMES
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Workflows Personalizados
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Agentes de IA
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Consultoría Enterprise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">Recursos</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="#cases"
                  className="hover:text-primary transition-colors"
                >
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Blog de Automatización
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Guías Gratuitas
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>cloveautomationsxyz@gmail.com</span>
              </li>
              <li>
                <p>Panamá, Centroamérica</p>
              </li>
              <li>
                <p>Lunes - Viernes: 9:00 - 18:00</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Clove Automations. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacidad
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Términos
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
          <p className="text-muted-foreground">
            Hecho con ❤️ y automatizado con n8n
          </p>
        </div>
      </div>
    </footer>
  );
}
