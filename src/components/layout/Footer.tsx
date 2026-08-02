import React from "react";
import { Car } from "lucide-react";
import Icon3D from "../ui/Icon3D";

export const Footer: React.FC = () => {
  // Tableau avec les vrais composants d'icônes
  // const socialIcons = [
  //   { icon: "Facebook", href: "#" },
  //   { icon: "Instagram", href: "#" },
  //   { icon: "Twitter", href: "#" },
  //   { icon: "Linkedin", href: "#" },
  // ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                <Car className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-white">
                IT<span className="text-orange-500">GES</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm">
              L'auto-école nouvelle génération. Des formations de qualité, un
              encadrement humain et une application en ligne dédiée.
            </p>
            <div className="flex gap-3 pt-2">
              <Icon3D />
            </div>
          </div>

          {/* Col 2 - Formations */}
          <div>
            <h4 className="text-white font-bold mb-4">Formations</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#courses"
                  className="hover:text-orange-400 transition-colors"
                >
                  Permis B
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-orange-400 transition-colors"
                >
                  Permis Moto A2
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-orange-400 transition-colors"
                >
                  Conduite Accompagnée
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-orange-400 transition-colors"
                >
                  Stage Accéléré
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 - Liens Utiles */}
          <div>
            <h4 className="text-white font-bold mb-4">Liens Utiles</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#why-us"
                  className="hover:text-orange-400 transition-colors"
                >
                  Pourquoi nous ?
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-orange-400 transition-colors"
                >
                  Notre méthode
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-orange-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 - Mentions */}
          <div>
            <h4 className="text-white font-bold mb-4">Légal</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/" className="hover:text-orange-400 transition-colors">
                  Mentions Légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Gestion des Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Agrément N° E12345678
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} DriveAcademy. Tous droits réservés.
          Designed with passion.
        </div>
      </div>
    </footer>
  );
};
