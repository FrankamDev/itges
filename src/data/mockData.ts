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
    id: "faq4",
    question: "Combien de temps faut-il pour obtenir le permis ?",
    answer:
      "La durée dépend de votre disponibilité et de votre progression. En moyenne, nos élèves obtiennent leur permis entre 2 et 6 mois.",
    category: "Général",
  },
  {
    id: "faq5",
    question: "Quels documents sont nécessaires pour l'inscription ?",
    answer:
      "Une pièce d'identité, un justificatif de domicile, une photo d'identité conforme et, selon votre situation, l'ASSR ou le certificat de participation à la JDC.",
    category: "Inscription",
  },
  {
    id: "faq6",
    question: "Peut-on payer en plusieurs fois ?",
    answer:
      "Oui, nous proposons plusieurs solutions de paiement échelonné afin de faciliter le financement de votre formation.",
    category: "Financement",
  },
  {
    id: "faq7",
    question: "Les heures de conduite sont-elles flexibles ?",
    answer:
      "Oui. Nous proposons des créneaux en semaine, le soir et le samedi selon les disponibilités de nos moniteurs.",
    category: "Conduite",
  },
  {
    id: "faq8",
    question: "Que se passe-t-il si je rate l'examen pratique ?",
    answer:
      "Nous analysons vos points d'amélioration avec votre moniteur et planifions rapidement une nouvelle présentation à l'examen.",
    category: "Examen",
  },
  {
    id: "faq9",
    question: "Combien d'heures de conduite sont obligatoires ?",
    answer:
      "La réglementation prévoit un minimum de 20 heures de conduite pour une formation sur boîte manuelle. Le nombre peut varier selon votre progression.",
    category: "Conduite",
  },
  {
    id: "faq10",
    question: "Proposez-vous des cours sur boîte automatique ?",
    answer:
      "Oui. Nous proposons des formations sur boîte automatique avec la possibilité de passer ensuite sur boîte manuelle selon la réglementation.",
    category: "Conduite",
  },
  {
    id: "faq11",
    question:
      "Puis-je changer d'auto-école et poursuivre ma formation chez vous ?",
    answer:
      "Oui. Nous pouvons reprendre votre dossier et évaluer votre niveau afin de poursuivre votre formation dans les meilleures conditions.",
    category: "Inscription",
  },
  {
    id: "faq12",
    question: "Les moniteurs sont-ils diplômés ?",
    answer:
      "Oui. Tous nos enseignants sont diplômés, expérimentés et agréés conformément à la réglementation en vigueur.",
    category: "Général",
  },
  {
    id: "faq13",
    question: "Comment réserver une leçon de conduite ?",
    answer:
      "Vous pouvez réserver directement auprès du secrétariat, par téléphone ou depuis votre espace élève selon votre formule.",
    category: "Conduite",
  },
  {
    id: "faq14",
    question: "Combien de temps dure une leçon de conduite ?",
    answer:
      "Une séance dure généralement entre 1 heure et 2 heures afin d'assurer un apprentissage efficace.",
    category: "Conduite",
  },
  {
    id: "faq15",
    question: "Puis-je commencer les leçons avant d'avoir obtenu le code ?",
    answer:
      "Oui, dans certains cas. Toutefois, l'examen pratique ne pourra être présenté qu'après l'obtention du code de la route.",
    category: "Code",
  },
  {
    id: "faq16",
    question: "Proposez-vous une formation accélérée ?",
    answer:
      "Oui. Nos stages intensifs permettent d'obtenir le permis dans un délai réduit selon les places disponibles.",
    category: "Formation",
  },
  {
    id: "faq17",
    question: "Les véhicules sont-ils récents ?",
    answer:
      "Oui. Notre flotte est composée de véhicules récents, entretenus régulièrement et équipés des dernières technologies de sécurité.",
    category: "Véhicules",
  },
  {
    id: "faq18",
    question: "Quels permis proposez-vous ?",
    answer:
      "Nous proposons notamment les formations au permis B, à la conduite accompagnée (AAC) ainsi que des formations sur boîte automatique.",
    category: "Formation",
  },
  {
    id: "faq19",
    question: "Puis-je suivre ma progression pendant la formation ?",
    answer:
      "Oui. Votre moniteur évalue régulièrement votre niveau et vous accompagne jusqu'à ce que vous soyez prêt pour l'examen.",
    category: "Formation",
  },
  {
    id: "faq20",
    question: "Organisez-vous des stages de récupération de points ?",
    answer:
      "Selon les périodes, nous proposons des stages de sensibilisation permettant de récupérer des points conformément à la réglementation.",
    category: "Points",
  },
  {
    id: "faq21",
    question: "Comment se déroule l'examen pratique ?",
    answer:
      "L'examen dure environ 32 minutes durant lesquelles l'inspecteur évalue votre maîtrise du véhicule, votre sécurité et votre respect du Code de la route.",
    category: "Examen",
  },
  {
    id: "faq22",
    question: "Combien coûte une heure de conduite supplémentaire ?",
    answer:
      "Le tarif varie selon la formule choisie. Contactez-nous pour obtenir un devis personnalisé et transparent.",
    category: "Tarifs",
  },
  {
    id: "faq23",
    question: "Pourquoi choisir votre auto-école ?",
    answer:
      "Nous mettons à votre disposition des moniteurs expérimentés, des véhicules récents, un accompagnement personnalisé et un excellent taux de réussite.",
    category: "Général",
  },
];
