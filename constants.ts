import React from 'react';
import { Accommodation, Activity, NavLink, Testimonial, LeisureActivity, FAQItem, BlogPost } from './types';

export const PHONE_NUMBER = '5554999300535';
export const EMAIL_ADDRESS = 'recantodolagopousada@hotmail.com';
export const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Gostaria de mais informações sobre a Pousada Recanto do Lago.');
export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${WHATSAPP_MESSAGE}`;
export const RESERVATION_URL = 'https://hotels.cloudbeds.com/reservas/HgoiJE';

export const NAV_LINKS = [
  { name: 'nav.home', href: '#home' },
  { name: 'nav.accommodations', href: '#accommodations' },
  { name: 'nav.breakfast', href: '#breakfast' },
  { name: 'nav.leisure', href: '#leisure' },
  { name: 'nav.activities', href: '#activities' },
  { name: 'nav.about', href: '#about' },
  { name: 'nav.blog', href: '#blog' },
  { name: 'nav.testimonials', href: '#testimonials' },
  { name: 'nav.faq', href: '#faq' },
  { name: 'nav.contact', href: '#contact' },
];

export const ACCOMMODATIONS_DATA: Accommodation[] = [
  {
    name: 'Chalé Deluxe',
    description: 'Acomoda até 3 pessoas com 1 cama de casal e opção de cama extra (solteiro). Perfeito para casais ou pequenas famílias.',
    image: '/deluxe/deluxe1.jpg',
    amenities: ['Ar condicionado', 'Wi-Fi', 'TV', 'Frigobar', 'Chaleira elétrica', 'Secador de cabelo'],
    details: 'Os chalés deluxe oferecem conforto e praticidade para até 3 pessoas. Equipados com ar-condicionado, Wi-Fi gratuito, televisão, frigobar, roupa de cama e banho incluídas, além de estacionamento privativo gratuito. O café da manhã é servido no galpão com um delicioso buffet colonial.',
    gallery: [
        '/deluxe/deluxe1.jpg',
        '/deluxe/deluxe3.jpg',
        '/deluxe/deluxe4.jpg',
        '/deluxe/deluxeentrada.jpg',
        '/deluxe/deluxeinterna.jpg'
    ]
  },
  {
    name: 'Chalé Standard',
    description: 'Ideal para famílias, acomoda até 4 pessoas com 1 cama de casal e 2 camas de solteiro.',
    image: '/deluxe/cabanasdeluxe.jpg',
    amenities: ['Ar condicionado', 'Wi-Fi', 'TV', 'Frigobar', 'Chaleira elétrica', 'Secador de cabelo'],
    details: 'Os Chalés Standard são perfeitos para famílias de até 4 pessoas. Possuem 1 cama de casal e 2 camas de solteiro, todos os quartos com ar-condicionado, Wi-Fi, televisão, frigobar, roupa de cama e banho incluídas, além de estacionamento privativo gratuito. O café da manhã é servido no galpão com um belo buffet.',
    gallery: [
        '/deluxe/cabanasdeluxe.jpg',
        '/deluxe/deluxeentrada1.jpg',
        '/deluxe/deluxeexterna.jpg',
        '/deluxe/deluxeneve.jpg'
    ]
  },
  {
    name: 'Chalé Master',
    description: 'Acomodação romântica para casais, com 1 cama de casal e chuveiro a gás para maior conforto.',
    image: '/master/master.jpg',
    amenities: ['Ar condicionado', 'Wi-Fi', 'TV', 'Frigobar', 'Chaleira elétrica', 'Chuveiro a gás'],
    details: 'Os chalés Master acomodam até 2 pessoas em 1 cama de casal confortável. Equipados com ar-condicionado, Wi-Fi, televisão, frigobar, roupa de cama e banho incluídas, chuveiro a gás e estacionamento privativo gratuito. O café da manhã é servido no galpão com um belo buffet.',
    gallery: [
        '/master/master.jpg',
        '/master/cabana7.jpg',
        '/master/cabana71.jpg',
        '/master/masterban.jpg',
        '/master/mastergeral.jpg'
    ]
  },
  {
    name: 'Chalé Master Luxo',
    description: 'Chalé premium para casais com banheira de hidromassagem e mini cozinha equipada com utensílios.',
    image: '/masterluxo/masterluxo1.jpg',
    amenities: ['Ar condicionado', 'Wi-Fi', 'TV', 'Frigobar', 'Hidromassagem', 'Mini cozinha'],
    details: 'Os chalés Master Luxo são nossa opção mais sofisticada para casais. Acomodam até 2 pessoas em 1 cama de casal e possuem banheira de hidromassagem e mini cozinha com utensílios. Incluem ar-condicionado, Wi-Fi, televisão, frigobar, roupa de cama e banho, chuveiro a gás e estacionamento privativo gratuito. O café da manhã é servido no galpão com um belo buffet.',
    gallery: [
        '/masterluxo/masterluxo1.jpg',
        '/masterluxo/masterluxo2.jpg',
        '/masterluxo/IMG_8978.JPG',
        '/masterluxo/IMG_8979.JPG',
        '/masterluxo/IMG_8980.JPG'
    ]
  },
  {
    name: 'Chalé Prime',
    description: 'Nossa acomodação mais exclusiva com banheira de hidromassagem e mini cozinha completa para uma experiência única.',
    image: '/Prime/prime1.jpg',
    amenities: ['Ar condicionado', 'Wi-Fi', 'TV', 'Frigobar', 'Hidromassagem', 'Mini cozinha'],
    details: 'Os chalés Prime representam o máximo em conforto e exclusividade. Acomodam até 2 pessoas em 1 cama de casal e oferecem banheira de hidromassagem e mini cozinha com utensílios completos. Equipados com ar-condicionado, Wi-Fi, televisão, frigobar, roupa de cama e banho, chuveiro a gás e estacionamento privativo gratuito. O café da manhã é servido no galpão com um belo buffet.',
    gallery: [
        '/Prime/prime1.jpg',
        '/Prime/primehidro.jpg',
        '/Prime/primemesa.jpg',
        '/Prime/primesofaecama.jpg',
        '/Prime/primevista.jpg'
    ]
  },
];

export const LEISURE_ACTIVITIES_DATA: LeisureActivity[] = [
    {
        id: 'tennisCourt',
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
        details: 'Nossa quadra de tênis está disponível para todos os hóspedes. O cenário natural proporciona uma experiência única para praticar o esporte. Agende seu horário na recepção.',
        gallery: [
            'https://picsum.photos/seed/tenis-g1/800/600',
            'https://picsum.photos/seed/tenis-g2/800/600',
        ],
    },
    {
        id: 'lakeFishing',
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
        id: 'gameRoom',
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
        id: 'bochaField',
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
        id: 'bbqArea',
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
    id: 'balloonFlight',
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
    id: 'horseRiding',
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
    id: 'atvTour',
    name: 'Passeio de Quadriciclo',
    description: 'Prepare-se para uma experiência única e emocionante! Nosso passeio de quadriciclo combina adrenalina e natureza em uma aventura inesquecível que leva você até uma das mais belas cachoeiras da região.',
    image: 'https://picsum.photos/seed/canion/600/400',
    details: 'Durante o percurso, você atravessará paisagens deslumbrantes até chegar ao destino final: uma cachoeira cristalina cercada por vegetação exuberante, perfeita para relaxar e se conectar com a natureza. Inclui: quadriciclo equipado, equipamentos de segurança e instrutor experiente. Venha viver esta aventura única conosco!',
    gallery: [
      'https://picsum.photos/seed/canion-g1/800/600',
      'https://picsum.photos/seed/canion-g2/800/600',
      'https://picsum.photos/seed/canion-g3/800/600',
    ],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        id: 'mariana',
        quote: "Uma experiência simplesmente mágica! A Pousada Recanto do Lago superou todas as nossas expectativas. O atendimento é impecável e a vista do chalé é de tirar o fôlego. Voltaremos com certeza!",
        author: "Mariana Costa",
        avatar: "https://picsum.photos/seed/avatar1/100/100",
    },
    {
        id: 'joao',
        quote: "Lugar perfeito para se desconectar e recarregar as energias. A paz que encontramos aqui é indescritível. Café da manhã delicioso e equipe muito atenciosa. Recomendo a todos!",
        author: "João Almeida",
        avatar: "https://picsum.photos/seed/avatar2/100/100",
    },
    {
        id: 'familia',
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
        answer: "Sim! Nosso café da manhã colonial completo está incluso na diária e é um dos nossos grandes diferenciais. Servimos uma mesa farta com produtos caseiros: pães frescos assados diariamente, bolos e cucas tradicionais, geleias artesanais, queijos e embutidos locais, frutas da estação, sucos naturais e muito mais. Uma verdadeira experiência gastronômica da Serra Gaúcha das 7h30 às 10h00."
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

export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        title: 'Cânion Itaimbezinho: Guia Completo para sua Visita',
        excerpt: 'Descubra tudo sobre o famoso Cânion Itaimbezinho, uma das principais atrações de Cambará do Sul. Dicas de trilhas, horários e como aproveitar ao máximo sua visita.',
        content: 'O Cânion Itaimbezinho é uma das maravilhas naturais mais impressionantes do Brasil, localizado no Parque Nacional de Aparados da Serra. Com seus 5,8 km de extensão e até 720 metros de profundidade, oferece vistas espetaculares que deixam qualquer visitante sem palavras.\n\nPara chegar ao cânion, você pode optar por diferentes trilhas. A Trilha do Vértice é a mais popular e acessível, com apenas 1,4 km de caminhada leve, ideal para toda a família. Já a Trilha da Cachoeira do Véu de Noiva oferece uma experiência mais aventureira, com 3 km de caminhada que leva até uma das cachoeiras mais bonitas da região.\n\nO parque funciona de terça a domingo, das 8h às 17h. Recomendamos chegar cedo para evitar multidões e aproveitar a melhor luz para fotografias. Não esqueça de levar água, protetor solar e usar calçados adequados para trilha.\n\nA entrada custa R$ 17 para adultos e é gratuita para crianças até 11 anos e idosos acima de 60 anos. O estacionamento é gratuito e fica a poucos metros da entrada do parque.',
        image: '/aereas/aerea1.jpg',
        category: 'passeios',
        date: '2024-01-15',
        readTime: 5,
        tags: ['cânion', 'trilha', 'natureza', 'aparados da serra']
    },
    {
        id: '2',
        title: 'Onde Comer em Cambará do Sul: Restaurantes Imperdíveis',
        excerpt: 'Conheça os melhores tipos de restaurantes de Cambará do Sul, desde a tradicional culinária gaúcha até opções vegetarianas. Sabores que complementam perfeitamente sua viagem.',
        content: 'A gastronomia de Cambará do Sul é um capítulo à parte na experiência de visitar a região. A cidade oferece desde restaurantes tradicionais gaúchos até opções mais contemporâneas, sempre valorizando ingredientes locais e da serra gaúcha.\n\n<img src="/cafe/cafe15.jpg" alt="Café colonial tradicional da serra gaúcha - Pousada Recanto do Lago Cambará do Sul" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nOs restaurantes especializados em churrasco tradicional são uma marca registrada da região. Você encontrará estabelecimentos que servem cordeiro assado, costela no fogo de chão e outras especialidades da culinária gaúcha. O ambiente rústico e acolhedor é característico desses locais.\n\n<img src="/cafe/cafe20.jpg" alt="Pratos típicos gaúchos - Culinária regional Cambará do Sul" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nPara quem busca uma experiência mais refinada, há restaurantes que oferecem pratos da culinária regional com toques contemporâneos. Muitos deles aproveitam a localização privilegiada para oferecer refeições com vista para as montanhas e cânions.\n\nOs vegetarianos e veganos também encontram boas opções na cidade. Vários estabelecimentos servem pratos naturais e orgânicos, além de oferecerem cafés coloniais tradicionais da região serrana.\n\n<img src="/cafe/cafe25.jpg" alt="Mesa de café colonial serra gaúcha - Hospedagem com café da manhã Cambará do Sul" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nNão esqueça de experimentar as especialidades locais como o pinhão (típico do inverno), queijos artesanais da região, mel silvestre e os vinhos produzidos na Serra Gaúcha. Muitos restaurantes oferecem degustações desses produtos típicos, especialmente durante o café colonial.',
        image: '/cafe/cafe1.jpg',
        category: 'dicas',
        date: '2024-01-10',
        readTime: 4,
        tags: ['gastronomia', 'restaurantes', 'culinária gaúcha', 'comida local']
    },
    {
        id: '3',
        title: 'Festival de Inverno de Cambará do Sul 2024',
        excerpt: 'O tradicional Festival de Inverno está chegando! Confira a programação completa com shows, gastronomia e atividades para toda a família durante o mês de julho.',
        content: 'O Festival de Inverno de Cambará do Sul é um dos eventos mais aguardados do ano na região. Durante todo o mês de julho, a cidade se transforma em um grande palco cultural, oferecendo uma programação diversificada para todos os gostos.\n\nEste ano, o festival contará com shows de artistas nacionais e regionais, apresentações de dança folclórica, exposições de arte local e uma feira gastronômica com o melhor da culinária serrana.\n\nEntre os destaques da programação estão os shows de música gaúcha no anfiteatro natural da cidade, as apresentações de dança alemã que celebram a herança cultural da região, e os workshops de artesanato local.\n\nA feira gastronômica funcionará todos os fins de semana do mês, oferecendo desde pratos típicos gaúchos até opções vegetarianas e veganas. Não perca a oportunidade de experimentar o famoso "quentão serrano" e os doces coloniais.\n\nPara as crianças, haverá atividades especiais como oficinas de pintura, contação de histórias e apresentações teatrais. O evento é gratuito e acontece em diversos pontos da cidade.\n\nRecomendamos fazer reservas antecipadas nas pousadas, pois julho é alta temporada na região devido ao festival e às férias de inverno.',
        image: '/geralexterna/entrada.jpg',
        category: 'eventos',
        date: '2024-01-08',
        readTime: 3,
        tags: ['festival', 'inverno', 'música', 'cultura', 'julho']
    },
    {
        id: '4',
        title: 'A História dos Cânions: Como se Formaram essas Maravilhas',
        excerpt: 'Entenda o processo geológico fascinante que deu origem aos cânions de Cambará do Sul há milhões de anos. Uma viagem no tempo através da ciência.',
        content: 'Os cânions de Cambará do Sul são resultado de um processo geológico fascinante que começou há mais de 130 milhões de anos. Sua formação está intimamente ligada à separação dos continentes sul-americano e africano.\n\nTudo começou durante o período Cretáceo, quando intensas atividades vulcânicas cobriram a região com espessas camadas de basalto. Essas rochas vulcânicas formaram o que hoje conhecemos como Planalto da Serra Geral.\n\nO processo de formação dos cânions propriamente dito iniciou-se há cerca de 10 milhões de anos, quando mudanças climáticas e tectônicas causaram o soerguimento da região. Os rios que antes corriam tranquilamente sobre o planalto começaram a escavar profundamente as rochas basálticas.\n\nA erosão diferencial foi fundamental neste processo. As camadas mais resistentes de basalto formaram as paredes verticais dos cânions, enquanto as rochas mais moles foram carregadas pelas águas, criando os vales profundos que vemos hoje.\n\nO Cânion Itaimbezinho, por exemplo, foi esculpido principalmente pelo Rio do Boi, que ao longo de milhões de anos cavou um desfiladeiro de até 720 metros de profundidade. As cachoeiras que vemos hoje são resultado deste processo contínuo de erosão.\n\nEsta formação geológica única torna os cânions de Cambará do Sul verdadeiros museus a céu aberto, onde podemos observar milhões de anos da história da Terra gravados nas rochas.',
        image: '/aereas/aerea5.jpg',
        category: 'curiosidades',
        date: '2024-01-05',
        readTime: 6,
        tags: ['geologia', 'formação', 'história', 'ciência', 'basalto']
    },
    {
        id: '5',
        title: 'Trilha da Cachoeira Véu de Noiva: Aventura Garantida',
        excerpt: 'Uma das trilhas mais bonitas da região leva até a impressionante Cachoeira Véu de Noiva. Saiba como se preparar para esta aventura inesquecível.',
        content: 'A Trilha da Cachoeira Véu de Noiva é considerada uma das mais belas e desafiadoras de Cambará do Sul. Com aproximadamente 3 km de extensão (ida), a trilha oferece paisagens espetaculares e termina em uma das cachoeiras mais impressionantes da região.\n\n<img src="/aereas/aerea8.jpg" alt="Vista aérea dos cânions Cambará do Sul - Turismo natureza perto da Pousada Recanto do Lago" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nA trilha tem início próximo ao centro da cidade e possui nível de dificuldade moderado. O percurso leva aproximadamente 2 horas para ser completado (ida), passando por diferentes tipos de vegetação típica da região serrana.\n\nDurante o caminho, você atravessará riachos cristalinos, caminhará por trechos de mata nativa e terá vistas panorâmicas dos campos e morros característicos da região. É importante usar calçados adequados para trilha, pois alguns trechos podem estar escorregadios, especialmente após chuvas.\n\n<img src="/lago/lago2.jpg" alt="Paisagem natural trilhas Cambará do Sul - Ecoturismo perto dos cânions" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nA Cachoeira Véu de Noiva possui uma queda impressionante e forma uma piscina natural na base, onde é possível se refrescar (quando as condições climáticas permitirem). O nome da cachoeira vem do formato de sua queda d\'água, que lembra um véu de noiva esvoaçante.\n\nRecomendações importantes: leve água suficiente, protetor solar, repelente e lanche. A trilha não possui estrutura de apoio ao longo do percurso, então é essencial estar bem preparado. Recomenda-se sempre informar alguém sobre seu roteiro e horário previsto de retorno.\n\n<img src="/lago/lago33.jpg" alt="Cachoeira Véu de Noiva Cambará do Sul - Trilhas e natureza perto da pousada" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nA melhor época para fazer a trilha é durante os meses mais secos (abril a setembro), quando as chances de chuva são menores e a visibilidade é melhor.',
        image: '/lago/lago1.jpg',
        category: 'passeios',
        date: '2024-01-03',
        readTime: 4,
        tags: ['trilha', 'cachoeira', 'aventura', 'natureza', 'véu de noiva']
    },
    {
        id: '6',
        title: 'Clima em Cambará do Sul: O que Esperar em Cada Estação',
        excerpt: 'Planeje sua viagem conhecendo o clima de Cambará do Sul ao longo do ano. Dicas de quando visitar e o que levar na mala para cada estação.',
        content: 'O clima de Cambará do Sul é subtropical úmido, com características bem definidas em cada estação do ano. Entender essas variações é fundamental para planejar sua viagem e aproveitar ao máximo a região.\n\nNo verão (dezembro a março), as temperaturas variam entre 15°C e 28°C. É a época mais chuvosa do ano, com chuvas frequentes à tarde. Apesar disso, é uma excelente época para visitar cachoeiras e fazer trilhas pela manhã. Leve roupas leves, capa de chuva e calçados impermeáveis.\n\nO outono (março a junho) é considerado uma das melhores épocas para visitar a região. As temperaturas ficam entre 8°C e 22°C, com menos chuvas e dias mais ensolarados. As cores da vegetação ficam especialmente bonitas nesta época. É ideal para todas as atividades ao ar livre.\n\nO inverno (junho a setembro) é a estação mais fria, com temperaturas entre 2°C e 18°C. Pode ocorrer geada e, em anos excepcionais, até neve. É a época mais seca do ano, perfeita para trilhas e passeios aos cânions. A visibilidade costuma ser excelente. Leve roupas bem quentes, incluindo casacos impermeáveis.\n\nA primavera (setembro a dezembro) traz o renascimento da natureza, com temperaturas entre 10°C e 25°C. As chuvas voltam gradualmente, mas ainda há muitos dias ensolarados. É uma época linda para fotografias, com flores silvestres colorindo a paisagem.\n\nIndependente da época, sempre leve protetor solar, pois a altitude (cerca de 1000m) intensifica os raios UV. Roupas em camadas são sempre uma boa opção devido às variações de temperatura.',
        image: '/neve/neve1.JPG',
        category: 'dicas',
        date: '2024-01-01',
        readTime: 5,
        tags: ['clima', 'estações', 'temperatura', 'planejamento', 'quando visitar']
    },
    {
        id: '7',
        title: 'Gastronomia Local: Sabores Únicos da Serra Gaúcha',
        excerpt: 'Descubra os pratos típicos e restaurantes imperdíveis de Cambará do Sul. Uma jornada gastronômica pelos sabores autênticos da região.',
        content: 'A gastronomia de Cambará do Sul reflete a rica herança cultural da região, combinando influências italiana, alemã e gaúcha em pratos únicos e saborosos.\n\n<img src="/cafe/cafe15.jpg" alt="Café da manhã colonial Cambará do Sul - Gastronomia regional pousada" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nO café colonial é uma tradição imperdível na região. Servido geralmente aos finais de semana, inclui pães caseiros, geleias artesanais, queijos coloniais, cucas, bolachas e muito mais. É uma experiência gastronômica completa que representa a hospitalidade serrana.\n\nEntre os pratos típicos, destaca-se o cordeiro assado, preparado de forma tradicional em fogo de chão. A carne de cordeiro da região é reconhecida pela qualidade excepcional, resultado da criação em campos nativos. Outros pratos tradicionais incluem o churrasco gaúcho, a paella de frutos do mar e pratos com truta, peixe muito comum nos rios da região.\n\n<img src="/cafe/cafe20.jpg" alt="Pratos típicos Cambará do Sul - Culinária regional serra gaúcha" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nA região também é famosa pelos seus doces caseiros, especialmente as cucas alemãs, strudels e tortas de frutas vermelhas. No inverno, não deixe de experimentar o quentão e o vinho quente, perfeitos para aquecer nas noites frias.\n\nPara uma experiência gastronômica completa, visite os restaurantes locais que servem pratos com ingredientes frescos da região. Muitos estabelecimentos oferecem vista panorâmica dos cânions, proporcionando uma refeição inesquecível.\n\n<img src="/cafe/cafe25.jpg" alt="Restaurante vista cânions Cambará do Sul - Gastronomia com paisagem" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nDica especial: experimente os produtos artesanais locais, como mel, geleias, queijos e embutidos. Muitos produtores oferecem degustação e venda direta, permitindo levar um pedacinho dos sabores da serra para casa.',
        image: '/cafe/cafe1.jpg',
        category: 'dicas',
        date: '2024-01-15',
        readTime: 6,
        tags: ['gastronomia', 'culinária', 'restaurantes', 'café colonial', 'pratos típicos']
    },
    {
        id: '8',
        title: 'Aventura de Quadriciclo pelos Campos de Cambará',
        excerpt: 'Explore a natureza selvagem de Cambará do Sul em uma emocionante aventura de quadriciclo. Paisagens incríveis e muita adrenalina te esperam.',
        content: 'O passeio de quadriciclo é uma das atividades mais emocionantes que você pode fazer em Cambará do Sul. Esta aventura combina adrenalina, natureza exuberante e paisagens de tirar o fôlego.\n\n<img src="/quadriciclo/quadri1.jpg" alt="Passeio quadriciclo Cambará do Sul - Aventura campos serra gaúcha" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nOs passeios são conduzidos por guias experientes que conhecem profundamente a região. O roteiro inclui trilhas pelos campos nativos, passagem por arroios cristalinos e paradas estratégicas para contemplar as vistas panorâmicas dos cânions.\n\nA atividade é adequada para iniciantes e experientes. Antes do passeio, você recebe todas as instruções de segurança e equipamentos necessários, incluindo capacete e óculos de proteção. Os quadriciclos são automáticos e fáceis de conduzir.\n\nDurante o percurso, você atravessará diferentes tipos de terreno: campos abertos, trilhas na mata, subidas e descidas suaves. A velocidade é controlada para garantir segurança e permitir que todos apreciem a paisagem. O passeio dura aproximadamente 2 horas.\n\n<img src="/aereas/aerea5.jpg" alt="Vista aérea campos Cambará do Sul - Paisagem quadriciclo aventura" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nUm dos pontos altos do passeio é a parada no mirante natural, onde você pode descer do quadriciclo e contemplar a imensidão dos campos sulinos. É o momento perfeito para fotos e para sentir a grandiosidade da natureza local.\n\nA fauna local também é um atrativo especial. Durante o passeio, é comum avistar diferentes espécies de aves, além de outros animais nativos da região. Os guias compartilham conhecimentos sobre a flora e fauna, tornando o passeio também educativo.\n\n<img src="/lago/lago30.jpg" alt="Natureza Cambará do Sul quadriciclo - Ecoturismo aventura serra" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nRecomendações: use roupas confortáveis que podem sujar, calçados fechados, protetor solar e leve uma garrafa de água. A atividade funciona em qualquer época do ano, mas é especialmente prazerosa nos dias ensolarados.',
        image: '/quadriciclo/IMG_8997.JPG',
        category: 'passeios',
        date: '2024-01-20',
        readTime: 5,
        tags: ['quadriciclo', 'aventura', 'campos', 'adrenalina', 'natureza']
    },
    {
        id: '9',
        title: 'Festival de Inverno: Cultura e Tradição em Cambará do Sul',
        excerpt: 'Conheça o tradicional Festival de Inverno de Cambará do Sul, um evento que celebra a cultura local com música, dança, gastronomia e muito mais.',
        content: 'O Festival de Inverno de Cambará do Sul é um dos eventos mais aguardados do ano na região. Realizado tradicionalmente em julho, o festival celebra a cultura local e atrai visitantes de todo o Brasil.\n\n<img src="/geralexterna/portico1.jpg" alt="Festival Inverno Cambará do Sul - Evento cultural serra gaúcha" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nO evento acontece no centro da cidade e conta com uma programação diversificada que inclui shows musicais, apresentações de dança tradicional gaúcha, exposições de artesanato local e uma feira gastronômica com pratos típicos da região.\n\nUma das principais atrações é o concurso de dança tradicionalista, onde grupos de diferentes cidades apresentam coreografias típicas do Rio Grande do Sul. As apresentações acontecem no palco principal e são sempre muito aplaudidas pelo público.\n\nA feira gastronômica é outro destaque do festival. Barracas espalhadas pela praça central oferecem desde o tradicional churrasco gaúcho até pratos mais elaborados da culinária italiana e alemã, herança dos imigrantes que colonizaram a região.\n\n<img src="/cafe/cafe30.jpg" alt="Feira gastronômica Festival Inverno - Culinária tradicional Cambará" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nO artesanato local ganha destaque especial durante o festival. Artesãos da região expõem e vendem seus trabalhos, incluindo peças em lã, madeira, couro e outros materiais típicos. É uma excelente oportunidade para adquirir lembranças autênticas da viagem.\n\nPara as crianças, há uma área especial com atividades recreativas, oficinas de artesanato e apresentações teatrais. O festival é verdadeiramente um evento para toda a família.\n\n<img src="/neve/neve30.jpg" alt="Inverno Cambará do Sul festival - Tradição cultura serra gaúcha" class="w-full h-64 object-cover rounded-lg my-6 shadow-lg">\n\nAlém da programação cultural, o festival também promove atividades esportivas, como torneios de bocha e competições de laço. Essas atividades reforçam as tradições gaúchas e proporcionam momentos de confraternização entre moradores e visitantes.\n\nO Festival de Inverno é gratuito e acontece durante três dias consecutivos. Para quem planeja visitar Cambará do Sul nesta época, é recomendável fazer reservas de hospedagem com antecedência, pois a cidade recebe muitos visitantes durante o evento.',
        image: '/neve/geada30.jpg',
        category: 'eventos',
        date: '2024-01-25',
        readTime: 4,
        tags: ['festival', 'inverno', 'cultura', 'tradição', 'música', 'gastronomia']
    }
];