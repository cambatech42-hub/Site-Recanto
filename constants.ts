import React from 'react';
import { Accommodation, Activity, NavLink, Testimonial, LeisureActivity } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '#home' },
  { name: 'A Pousada', href: '#about' },
  { name: 'Lazer', href: '#leisure' },
  { name: 'Acomodações', href: '#accommodations' },
  { name: 'Passeios', href: '#activities' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Contato', href: '#contact' },
];

export const ACCOMMODATIONS_DATA: Accommodation[] = [
  {
    name: 'Chalé Vista do Lago',
    description: 'Um refúgio romântico com vista deslumbrante para o lago, lareira e banheira de hidromassagem.',
    image: 'https://picsum.photos/seed/chale1-main/600/400',
    amenities: ['Wi-Fi', 'Lareira', 'Hidromassagem', 'Varanda'],
    gallery: [
        'https://picsum.photos/seed/chale1-gallery1/800/600',
        'https://picsum.photos/seed/chale1-gallery2/800/600',
        'https://picsum.photos/seed/chale1-gallery3/800/600',
        'https://picsum.photos/seed/chale1-gallery4/800/600',
    ],
  },
  {
    name: 'Cabana da Floresta',
    description: 'Imersa na natureza, esta cabana oferece tranquilidade e conforto com um toque rústico e elegante.',
    image: 'https://picsum.photos/seed/chale2-main/600/400',
    amenities: ['Wi-Fi', 'Cozinha compacta', 'Deck', 'Ar Condicionado'],
    gallery: [
        'https://picsum.photos/seed/chale2-gallery1/800/600',
        'https://picsum.photos/seed/chale2-gallery2/800/600',
        'https://picsum.photos/seed/chale2-gallery3/800/600',
    ],
  },
  {
    name: 'Suíte Cânion',
    description: 'Espaçosa e moderna, nossa suíte principal é perfeita para famílias que buscam conforto e sofisticação.',
    image: 'https://picsum.photos/seed/chale3-main/600/400',
    amenities: ['Wi-Fi', 'TV a Cabo', 'Frigobar', 'Acessibilidade'],
    gallery: [
        'https://picsum.photos/seed/chale3-gallery1/800/600',
        'https://picsum.photos/seed/chale3-gallery2/800/600',
        'https://picsum.photos/seed/chale3-gallery3/800/600',
        'https://picsum.photos/seed/chale3-gallery4/800/600',
    ],
  },
];

export const ACTIVITIES_DATA: Activity[] = [
  {
    name: 'Voo de Balão',
    description: 'Desfrute de uma vista inesquecível dos cânions e da paisagem de Cambará do Sul em um voo de balão ao nascer do sol.',
    image: 'https://picsum.photos/seed/balao/600/400',
  },
  {
    name: 'Cavalgadas',
    description: 'Explore trilhas exclusivas e campos verdejantes em uma cavalgada relaxante, conectando-se com a natureza local.',
    image: 'https://picsum.photos/seed/cavalo/600/400',
  },
  {
    name: 'Trilhas nos Cânions',
    description: 'Aventure-se pelas bordas dos majestosos Cânions Itaimbezinho e Fortaleza com guias experientes.',
    image: 'https://picsum.photos/seed/canion/600/400',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        quote: "Uma experiência simplesmente mágica! A Pousada Recanto do Lago superou todas as nossas expectativas. O atendimento é impecável e a vista do chalé é de tirar o fôlego. Voltaremos com certeza!",
        author: "Mariana Costa",
        avatar: "https://picsum.photos/seed/avatar1/100/100",
    },
    {
        quote: "Lugar perfeito para se desconectar e recarregar as energias. A paz que encontramos aqui é indescritível. Café da manhã delicioso e equipe muito atenciosa. Recomendo a todos!",
        author: "João Almeida",
        avatar: "https://picsum.photos/seed/avatar2/100/100",
    },
    {
        quote: "A localização é privilegiada, bem no coração de paisagens incríveis. Fizemos o passeio de balão e foi inesquecível. A pousada oferece todo o conforto necessário para uma estadia perfeita.",
        author: "Família Oliveira",
        avatar: "https://picsum.photos/seed/avatar3/100/100",
    }
];

export const LEISURE_DATA: LeisureActivity[] = [
    {
        name: 'Quadra de Tênis',
        description: 'Desafie seus amigos para uma partida emocionante em nossa quadra de tênis oficial, cercada pela natureza.',
        image: 'https://picsum.photos/seed/tenis-main/600/400',
        gallery: [
            'https://picsum.photos/seed/tenis-gallery1/800/600',
            'https://picsum.photos/seed/tenis-gallery2/800/600',
            'https://picsum.photos/seed/tenis-gallery3/800/600',
        ]
    },
    {
        name: 'Salão de Jogos',
        description: 'Diversão garantida com sinuca, pebolim e um espaço com churrasqueira para confraternizar com a família e amigos.',
        image: 'https://picsum.photos/seed/jogos-main/600/400',
        gallery: [
            'https://picsum.photos/seed/jogos-gallery1/800/600',
            'https://picsum.photos/seed/jogos-gallery2/800/600',
            'https://picsum.photos/seed/jogos-gallery3/800/600',
            'https://picsum.photos/seed/jogos-gallery4/800/600',
        ]
    },
    {
        name: 'Cancha de Bocha',
        description: 'Resgate tradições e divirta-se em nossa cancha de bocha profissional, perfeita para um final de tarde descontraído.',
        image: 'https://picsum.photos/seed/bocha-main/600/400',
        gallery: [
            'https://picsum.photos/seed/bocha-gallery1/800/600',
            'https://picsum.photos/seed/bocha-gallery2/800/600',
        ]
    },
    {
        name: 'Pesca Esportiva',
        description: 'Relaxe e conecte-se com a natureza em nosso lago privativo, ideal para a prática da pesca esportiva.',
        image: 'https://picsum.photos/seed/pesca-main/600/400',
        gallery: [
            'https://picsum.photos/seed/pesca-gallery1/800/600',
            'https://picsum.photos/seed/pesca-gallery2/800/600',
            'https://picsum.photos/seed/pesca-gallery3/800/600',
        ]
    },
    {
        name: 'Pedalinho no Lago',
        description: 'Explore as águas calmas do nosso lago com um passeio de pedalinho. Uma atividade divertida para todas as idades.',
        image: 'https://picsum.photos/seed/pedalinho-main/600/400',
        gallery: [
            'https://picsum.photos/seed/pedalinho-gallery1/800/600',
            'https://picsum.photos/seed/pedalinho-gallery2/800/600',
        ]
    }
];