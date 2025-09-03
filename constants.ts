
import { Accommodation, Activity, NavLink, Testimonial } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '#home' },
  { name: 'A Pousada', href: '#about' },
  { name: 'Acomodações', href: '#accommodations' },
  { name: 'Passeios', href: '#activities' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Contato', href: '#contact' },
];

export const ACCOMMODATIONS_DATA: Accommodation[] = [
  {
    name: 'Chalé Vista do Lago',
    description: 'Um refúgio romântico com vista deslumbrante para o lago, lareira e banheira de hidromassagem.',
    image: 'https://picsum.photos/seed/chale1/600/400',
    amenities: ['Wi-Fi', 'Lareira', 'Hidromassagem', 'Varanda'],
  },
  {
    name: 'Cabana da Floresta',
    description: 'Imersa na natureza, esta cabana oferece tranquilidade e conforto com um toque rústico e elegante.',
    image: 'https://picsum.photos/seed/chale2/600/400',
    amenities: ['Wi-Fi', 'Cozinha compacta', 'Deck', 'Ar Condicionado'],
  },
  {
    name: 'Suíte Cânion',
    description: 'Espaçosa e moderna, nossa suíte principal é perfeita para famílias que buscam conforto e sofisticação.',
    image: 'https://picsum.photos/seed/chale3/600/400',
    amenities: ['Wi-Fi', 'TV a Cabo', 'Frigobar', 'Acessibilidade'],
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
]
