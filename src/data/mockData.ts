import type { Course, Stat, Testimonial, Vehicle, FAQItemData } from "../types";

export const COURSES_DATA: Course[] = [
  {
    id: "permis-b",
    title: "Permis B - Voiture",
    category: "B",
    description:
      "Formation complète théorique et pratique pour la conduite de véhicules légers.",
    duration: "20 à 30 Heures",
    price: 1190,
    features: [
      "Code en ligne illimité",
      "20h de conduite",
      "Évaluation initiale",
      "Présentation examen",
    ],
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
    badge: "Plus Populaire",
  },
  {
    id: "permis-a",
    title: "Permis A2 - Moto",
    category: "A",
    description:
      "Apprenez à maîtriser deux-roues en toute sécurité avec nos moniteurs expérimentés.",
    duration: "20 Heures",
    price: 890,
    features: [
      "Piste privée dédiée",
      "Équipement fourni au besoin",
      "Module sécurité routière",
    ],
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "conduite-accompagnee",
    title: "Conduite Accompagnée (AAC)",
    category: "B",
    description:
      "Dès 15 ans, gagnez en expérience et augmentez vos chances de réussite.",
    duration: "1 à 3 ans",
    price: 1290,
    features: [
      "Rendez-vous pédagogiques",
      "Suivi personnalisé",
      "Taux de réussite supérieur",
    ],
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800",
    badge: "Recommandé Jeunes",
  },
  {
    id: "formation-accelere",
    title: "Stage Accéléré",
    category: "Accelerated",
    description:
      "Obtenez votre permis en un temps record grâce à un stage intensif immersif.",
    duration: "2 Semaines",
    price: 1590,
    features: [
      "Planning prioritaire",
      "Cours théoriques intensifs",
      "Dates d’examen garanties",
    ],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
  },
];

export const STATS_DATA: Stat[] = [
  {
    id: "1",
    label: "Élèves Formés",
    value: 4500,
    suffix: "+",
    iconName: "Users",
  },
  {
    id: "2",
    label: "Taux de Réussite",
    value: 94,
    suffix: "%",
    iconName: "Award",
  },
  {
    id: "3",
    label: "Années d'Expérience",
    value: 15,
    suffix: " ans",
    iconName: "Calendar",
  },
  {
    id: "4",
    label: "Moniteurs Certifiés",
    value: 12,
    suffix: "",
    iconName: "ShieldCheck",
  },
];

export const VEHICLES_DATA: Vehicle[] = [
  {
    id: "v1",
    name: "Peugeot 208 GT",
    type: "Car",
    transmission: "Manuel",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "v2",
    name: "Renault Clio V Elec",
    type: "Car",
    transmission: "Automatique",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "v3",
    name: "Yamaha MT-07",
    type: "Motorcycle",
    transmission: "Manuel",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "v4",
    name: "Kawasaki Z650",
    type: "Motorcycle",
    transmission: "Manuel",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah L.",
    role: "Étudiante",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    content:
      "Permis obtenu du premier coup ! Les moniteurs sont d’une patience incroyable et les voitures sont neuves.",
    rating: 5,
    licenseType: "Permis B",
  },
  {
    id: "t2",
    name: "Marc D.",
    role: "Ingénieur",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    content:
      "J’ai fait la formation accélérée en 2 semaines. Organisation parfaite, un suivi rigoureux et professionnel.",
    rating: 5,
    licenseType: "Stage Accéléré",
  },
  {
    id: "t3",
    name: "Amélie K.",
    role: "Graphiste",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    content:
      "L’application en ligne pour le code et la réservation de créneaux simplify grandement la vie !",
    rating: 5,
    licenseType: "Permis A2",
  },
];

export const FAQ_DATA: FAQItemData[] = [
  {
    id: "faq1",
    question: "Quel est l’âge minimum pour commencer la conduite accompagnée ?",
    answer:
      "Vous pouvez vous inscrire à la conduite accompagnée (AAC) dès l’âge de 15 ans. L’examen pratique peut être passé à partir de 17 ans.",
    category: "Général",
  },
  {
    id: "faq2",
    question: "Proposez-vous le financement avec le CPF ?",
    answer:
      "Oui ! Notre auto-école est certifiée Qualiopi. Vous pouvez financer l’intégralité de votre permis B grâce à votre Compte Personnel de Formation.",
    category: "Financement",
  },
  {
    id: "faq3",
    question: "Puis-je réviser le code de la route depuis chez moi ?",
    answer:
      "Absolument. Nous vous donnons accès à une plateforme en ligne accessible 24/7 comprenant des cours, des séries thématiques et des examens blancs.",
    category: "Code",
  },
];
