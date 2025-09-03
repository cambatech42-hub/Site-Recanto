import React from 'react';
import { Accommodation, Activity, NavLink, Testimonial, LeisureActivity, FAQItem } from './types';

export const PHONE_NUMBER = '5554999300535';
export const EMAIL_ADDRESS = 'recantodolagopousada@hotmail.com';
export const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Gostaria de mais informações sobre a Pousada Recanto do Lago.');
export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${WHATSAPP_MESSAGE}`;
export const RESERVATION_URL = 'https://hotels.cloudbeds.com/reservas/HgoiJE';

export const NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '#home' },
  { name: 'A Pousada', href: '#about' },
  { name: 'Acomodações', href: '#accommodations' },
  { name: 'Lazer', href: '#leisure' },
  { name: 'Passeios', href: '#activities' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contact' },
];

export const ACCOMMODATIONS_DATA: Accommodation[] = [
  {
    name: 'Chalé Vista do Lago',
    description: 'Um refúgio romântico com vista deslumbrante para o lago, lareira e banheira de hidromassagem.',
    image: 'https://picsum.photos/seed/chale1/600/400',
    amenities: ['Wi-Fi', 'Lareira', 'Hidromassagem', 'Varanda'],
    details: 'Nosso chalé mais exclusivo, perfeito para casais em busca de privacidade e romance. Com 60m², possui uma cama king-size, lareira a lenha, banheira de hidromassagem dupla com vista panorâmica para o lago, e uma varanda privativa para apreciar o pôr do sol. O café da manhã pode ser servido diretamente no chalé mediante solicitação.',
    gallery: [
        'https://picsum.photos/seed/chale1-g1/800/600',
        'https://picsum.photos/seed/chale1-g2/800/600',
        'https://picsum.photos/seed/chale1-g3/800/600',
    ]
  },
  {
    name: 'Cabana da Floresta',
    description: 'Imersa na natureza, esta cabana oferece tranquilidade e conforto com um toque rústico e elegante.',
    image: 'https://picsum.photos/seed/chale2/600/400',
    amenities: ['Wi-Fi', 'Cozinha compacta', 'Deck', 'Ar Condicionado'],
    details: 'Ideal para quem busca uma conexão profunda com a natureza sem abrir mão do conforto. A cabana de 50m² está cercada por araucárias e possui um deck de madeira perfeito para observação de pássaros. Equipada com cozinha compacta, cama queen-size e ar condicionado quente e frio.',
    gallery: [
        'https://picsum.photos/seed/chale2-g1/800/600',
        'https://picsum.photos/seed/chale2-g2/800/600',
        'https://picsum.photos/seed/chale2-g3/800/600',
    ]
  },
  {
    name: 'Suíte Cânion',
    description: 'Espaçosa e moderna, nossa suíte principal é perfeita para famílias que buscam conforto e sofisticação.',
    image: 'https://picsum.photos/seed/chale3/600/400',
    amenities: ['Wi-Fi', 'TV a Cabo', 'Frigobar', 'Acessibilidade'],
    details: 'A Suíte Cânion é a nossa maior acomodação, com 70m² e capacidade para até 4 pessoas. Possui um quarto principal com cama king-size e uma sala de estar com um confortável sofá-cama. Totalmente acessível para cadeirantes, a suíte conta com TV a cabo, frigobar e uma ampla janela com vista para os campos da região.',
    gallery: [
        'https://picsum.photos/seed/chale3-g1/800/600',
        'https://picsum.photos/seed/chale3-g2/800/600',
        'https://picsum.photos/seed/chale3-g3/800/600',
    ]
  },
];

export const LEISURE_ACTIVITIES_DATA: LeisureActivity[] = [
    {
        name: 'Quadra de Tênis',
        description: 'Desafie seus amigos para uma partida emocionante em nossa quadra de tênis, cercada pela natureza exuberante da Serra Gaúcha.',
        image: 'https://picsum.photos/seed/tenis/600/400',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, 
            React.createElement('path', { 
                strokeLinecap: "round", 
                strokeLinejoin: "round", 
                strokeWidth: "2", 
                d: "M17 9a6 6 0 11-12 0 6 6 0 0112 0zM11 15l5 5M5 9h12M11 3v12" 
            })
        ),
        details: 'Nossa quadra de tênis de saibro está disponível para todos os hóspedes. O cenário natural proporciona uma experiência única para praticar o esporte. Agende seu horário na recepção. Raquetes e bolas podem ser alugadas.',
        gallery: [
            'https://picsum.photos/seed/tenis-g1/800/600',
            'https://picsum.photos/seed/tenis-g2/800/600',
        ],
    },
    {
        name: 'Lago para Pesca e Pedalinho',
        description: 'Relaxe com uma pescaria esportiva em nosso lago sereno ou divirtas-se em um passeio de pedalinho com a família.',
        image: 'https://picsum.photos/seed/lago-lazer/600/400',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 13l-4 4m0 0l4-4m-4 4h14m0 0l-4-4m4 4v-4m0 4h-4" })),
        details: 'O lago é o coração da nossa pousada. Oferecemos varas e iscas para pesca esportiva (pesque e solte) de espécies como tilápia e carpa. O pedalinho em formato de cisne é uma atração para as crianças e casais. Coletes salva-vidas são fornecidos.',
        gallery: [
            'https://picsum.photos/seed/lago-lazer-g1/800/600',
            'https://picsum.photos/seed/lago-lazer-g2/800/600',
            'https://picsum.photos/seed/lago-lazer-g3/800/600',
        ],
    },
    {
        name: 'Sala de Jogos',
        description: 'Diversão garantida para todas as idades com sinuca e pebolim (fla-flu) em nossa acolhedora sala de jogos.',
        image: 'https://picsum.photos/seed/jogos/600/400',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 2a10 10 0 100 20 10 10 0 000-20z" }), React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 12a3 3 0 100-6 3 3 0 000 6z" })),
        details: 'Nossa sala de jogos é o ponto de encontro perfeito para dias chuvosos ou para o lazer noturno. Conta com uma mesa de sinuca profissional, pebolim, e uma seleção de jogos de tabuleiro para toda a família.',
        gallery: [
            'https://picsum.photos/seed/jogos-g1/800/600',
            'https://picsum.photos/seed/jogos-g2/800/600',
        ],
    },
    {
        name: 'Cancha de Bocha',
        description: 'Aproveite um jogo tradicional e descontraído de bocha em nossa cancha profissional, um passatempo perfeito para a tarde.',
        image: 'https://picsum.photos/seed/bocha/600/400',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" }), React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M18 18c-3.314 0-6-2.686-6-6s2.686-6 6-6" })),
        details: 'Resgate a tradição italiana com uma partida de bocha em nossa cancha oficial. É um esporte que une gerações e garante boas risadas. As regras estão afixadas ao lado da cancha para quem quiser aprender.',
        gallery: [
            'https://picsum.photos/seed/bocha-g1/800/600',
        ],
    },
    {
        name: 'Espaço com Churrasqueira',
        description: 'Reúna seus amigos e família para um autêntico churrasco gaúcho em nosso espaço equipado e aconchegante.',
        image: 'https://picsum.photos/seed/churrasco/600/400',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }), React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 3v18" }), React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 3v18" }), React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 12h18" })),
        details: 'Um quiosque rústico com churrasqueira, mesas e todos os utensílios necessários para preparar um delicioso churrasco. O espaço deve ser reservado com antecedência e está sujeito a uma taxa de utilização. Nós podemos fornecer os cortes de carne locais, se desejado.',
        gallery: [
            'https://picsum.photos/seed/churrasco-g1/800/600',
            'https://picsum.photos/seed/churrasco-g2/800/600',
        ],
    },
];

export const ACTIVITIES_DATA: Activity[] = [
  {
    name: 'Voo de Balão',
    description: 'Desfrute de uma vista inesquecível dos cânions e da paisagem de Cambará do Sul em um voo de balão ao nascer do sol.',
    image: 'https://picsum.photos/seed/balao/600/400',
    details: 'Uma experiência que fica para a vida toda. O voo de balão sobre os aparados da serra oferece uma perspectiva única dos Cânions Itaimbezinho e Fortaleza. A atividade dura cerca de 1 hora e termina com um brinde de espumante. Realizado por parceiros certificados e experientes.',
    gallery: [
      'https://picsum.photos/seed/balao-g1/800/600',
      'https://picsum.photos/seed/balao-g2/800/600',
      'https://picsum.photos/seed/balao-g3/800/600',
    ],
  },
  {
    name: 'Cavalgadas',
    description: 'Explore trilhas exclusivas e campos verdejantes em uma cavalgada relaxante, conectando-se com a natureza local.',
    image: 'https://picsum.photos/seed/cavalo/600/400',
    details: 'Nossas cavalgadas são guiadas por um peão local e utilizam cavalos crioulos, dóceis e adaptados à região. Os passeios variam de 1 a 4 horas, passando por campos, matas de araucárias e riachos. Não é necessário ter experiência prévia.',
    gallery: [
      'https://picsum.photos/seed/cavalo-g1/800/600',
      'https://picsum.photos/seed/cavalo-g2/800/600',
    ],
  },
  {
    name: 'Trilhas nos Cânions',
    description: 'Aventure-se pelas bordas dos majestosos Cânions Itaimbezinho e Fortaleza com guias experientes.',
    image: 'https://picsum.photos/seed/canion/600/400',
    details: 'Organizamos passeios guiados para as principais trilhas do Parque Nacional de Aparados da Serra e do Parque Nacional da Serra Geral. As trilhas mais famosas são a do Vértice e a do Cotovelo (no Itaimbezinho) e a Trilha do Mirante e da Pedra do Segredo (no Fortaleza).',
    gallery: [
      'https://picsum.photos/seed/canion-g1/800/600',
      'https://picsum.photos/seed/canion-g2/800/600',
      'https://picsum.photos/seed/canion-g3/800/600',
    ],
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

export const FAQ_DATA: FAQItem[] = [
    {
        question: "Quais são os horários de check-in e check-out?",
        answer: "Nosso check-in é realizado a partir das 14h e o check-out até às 12h. Caso precise de horários flexíveis, por favor, entre em contato conosco para verificarmos a possibilidade."
    },
    {
        question: "O café da manhã está incluso?",
        answer: "Sim, um delicioso e completo café da manhã colonial está incluso na diária. Servimos produtos frescos e locais, como pães, bolos, queijos, frutas e sucos naturais, para você começar o dia com energia."
    },
    {
        question: "A pousada aceita animais de estimação?",
        answer: "Adoramos animais! Somos pet-friendly, mas pedimos que entre em contato conosco antes de fazer a reserva para conhecer nossa política e garantir que temos a acomodação ideal para você e seu pet."
    },
    {
        question: "Qual a distância da pousada para os cânions?",
        answer: "Estamos em uma localização privilegiada. A distância de carro até a entrada do Parque Nacional de Aparados da Serra (Cânion Itaimbezinho) é de aproximadamente 18 km. Já o Parque Nacional da Serra Geral (Cânion Fortaleza) fica a cerca de 23 km."
    },
    {
        question: "A pousada possui Wi-Fi?",
        answer: "Oferecemos Wi-Fi gratuito em todas as áreas comuns e nas acomodações. Por estarmos em uma área rural, o sinal pode apresentar instabilidades ocasionais, o que consideramos parte da experiência de se desconectar na natureza."
    },
    {
        question: "Qual é a política de cancelamento?",
        answer: "Para cancelamentos feitos com até 15 dias de antecedência da data de check-in, oferecemos reembolso total do valor pago. Para cancelamentos com menos de 15 dias, o valor pago fica como crédito para uma futura hospedagem (válido por 6 meses). Em caso de não comparecimento (no-show), não há reembolso ou crédito."
    }
];