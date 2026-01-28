import imagePortrait from "../assets/img3.jpg";
import type { Profil } from "../Types/data";

export const profil: Profil = {
  name: "ELIPS",
  image: imagePortrait,
  description:
    "Drag queer bordelaise. Révélée par Drag Race France, Elips façonne elle-même ses costumes, ses masques, ses mondes. Inspirée par Bowie, Almodovar et les figures androgynes qui ont osé avant elle, elle transforme chaque scène en manifeste : on peut être feu et douceur, force et vulnérabilité, tout à la fois. Miss Sympathie au grand cœur, elle rassemble autour d'elle la Familips et nous rappelle que le drag, c'est aussi — surtout — de l'amour.",

  infoCard: [
    { title: "Nationalité", value: "Française" },
    { title: "Métier", value: "Drag Queen" },
    { title: "Titre", value: "Miss Sympathie" },
    { title: "Signe Astrologique", value: "Taureau" },
    { title: "Date de naissance", value: "16 mai 1997" },
  ],
  timeline: [
    { year: 1997, description: "Naissance d'Ély Méchain" },
    {
      year: 2017,
      description: " Découvre l'art du Drag et l'émission RuPaul's Drag Race",
    },
    { year: 2021, description: "Remporte le Drag Games" },
    { year: 2022, description: "Participe à la Saison 1 de Drag Race France" },
    {
      year: 2025,
      description:
        "Participe à la Saison Drag Race All Stars France et finie deuxième",
    },
  ],

  quotes: [
    {
      text: "Grand-mère c'est moi, Anastasia!",
      source: "Son entrée dans l'atelier, épisode 1, saison 1 Drag Race France",
    },
    {
      text: "Si vous voulez mon avis, dans un bocal de couillon, c'est pas elle qui fait le couvercle.",
      source: "Quand elle roast Misty Phoenix, épisode 7, saison All Star",
    },
    {
      text: "Adolescent, j’ai dû faire des concessions sur mon avenir. J’ai beaucoup hésité entre le théâtre et les arts plastiques, et le drag permet de réunir tout ça avec d’autres domaines comme le chant, la danse. C’est ce qui m’a tout de suite attiré.",
      source: "interview magazine Stratégies",
    },
    {
      text: "C’est une personnalité engagée qui veut faire passer des messages à travers ses performances et ses tenues. Souvent, on la qualifie d’intense et mystérieuse. C’est une extension de moi-même qui me permet de faire des choses que je ne ferais pas en Eli, et où je me sens plus fort.",
      source: "interview magazine Stratégies",
    },
  ],
};
