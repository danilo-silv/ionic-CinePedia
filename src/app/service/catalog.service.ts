import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private banners = [
    {
      image: 'https://i.imgur.com/KBH13ag.jpg',
    },
    {
      image: 'https://i.imgur.com/lnnou4s.jpg',
    },
    {
      image: 'https://i.imgur.com/n7OKI77.jpg',
    },
  ];

  private cardsMovie = [
    {
      image: 'https://i.imgur.com/8K4YMHw.png',
      title: 'WandaVision (2021)',
      description:
        'Wanda Maximoff e Visão, um casal de super-heróis com uma vida perfeita, que começa a suspeitar que nem tudo é o que parece.',
      producer: 'Marvel Studios',
    },
    {
      image: 'https://i.imgur.com/JmnLH4L.png',
      title: 'The Mandalorian',
      description:
        'O Mandaloriano está cercado por poderosos inimigos, incluindo um que sabe sobre seu passado, e está disposto a garantir que ele não tenha futuro.',
      producer: 'LucasFilm',
    },
    {
      image: 'https://i.imgur.com/rxh0oLH.jpg',
      title: 'Soul',
      description:
        'Nesta animação da Pixar, Joe Gardner é um professor de música que recebe a chance de tocar na melhor casa de jazz da cidade.',
      producer: 'Walt Disney Animation - PIXAR',
    },
    {
      image: 'https://i.imgur.com/1r7ocY0.jpg',
      title: 'Mulher Maravilha 1984',
      description:
        'Na década de 1980, a Mulher-Maravilha enfrenta dois novos inimigos: Max Lord e Mulher-Leopardo.',
      producer: 'DC Comics',
    },
    {
      image: 'https://i.imgur.com/n633Iqf.jpg',
      title: 'Vingadores Ultimato',
      description:
        'No final épico da Saga do Infinito, os Vingadores enfrentam Thanos. Quando eventos devastadores eliminam metade da população mundial e dividem suas fileiras, o resto dos heróis lutam para avançar.',
      producer: 'Marvel Studios',
    },
    {
      image: 'https://i.imgur.com/7s96oCF.jpg',
      title: 'Raya e o Último Dragão',
      description:
        'Muito tempo atrás, humanos e dragões viviam juntos em harmonia no mundo de Kumandra. Mas a ameaça de uma força do mal fez com que os dragões se sacrificassem para salvar a humanidade.',
      producer: 'Walt Walt Disney Animation Animation',
    },
    {
      image: 'https://i.imgur.com/QT8mlBr.png',
      title: 'Liga da Justiça de Zack Snyder',
      description:
        'Impulsionado pela restauração de sua fé na humanidade e inspirado pelo ato altruísta do Superman, Bruce Wayne convoca sua nova aliada Diana Prince para o combate contra um inimigo ainda maior, recém-despertado.',
      producer: 'Warner Bros',
    },
    {
      image: 'https://i.imgur.com/6D58oNg.png',
      title: 'Um Príncipe em Nova York 2',
      description:
        'Akeem e Semmi estão de volta! No exuberante e majestoso país de Zamunda, o recém-coroado Rei Akeem (Eddie Murphy) e seu fiel confidente Semmi (Arsenio Hall) embarcam em uma nova e hilária aventura.',
      producer: 'Paramount Pictures',
    },
  ];

  constructor() {}

  getBanners() {
    return this.banners;
  }

  getCardsMovie() {
    return this.cardsMovie;
  }
}
