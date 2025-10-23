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
        image: '/lago/lago.jpg',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 13l-4 4m0 0l4-4m-4 4h14m0 0l-4-4m4 4v-4m0 4h-4" })),
        details: 'O lago é o coração da nossa pousada. Oferecemos varas e iscas para pesca esportiva (pesque e solte) de espécies como tilápia e carpa. O pedalinho em formato de cisne é uma atração para as crianças e casais. Coletes salva-vidas são fornecidos.',
        gallery: [
            '/lago/lago.jpg',
            '/lago/lago1.jpg',
            '/lago/IMG_8991.JPG',
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
        image: '/bocha/bocha1.jpg',
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
    image: '/balao/balaocidade.JPG',
    details: 'Uma experiência que fica para a vida toda. O voo de balão sobre os aparados da serra oferece uma perspectiva única dos Cânions Itaimbezinho e Fortaleza. A atividade dura cerca de 1 hora e termina com um brinde de espumante. Realizado por parceiros certificados e experientes.',
    gallery: [
      '/balao/balaocidade.JPG',
    ],
  },

  {
    id: 'atvTour',
    name: 'Passeio de Quadriciclo',
    description: 'Prepare-se para uma experiência única e emocionante! Nosso passeio de quadriciclo combina adrenalina e natureza em uma aventura inesquecível que leva você até uma das mais belas cachoeiras da região.',
    image: '/quadriciclo/IMG_8997.JPG',
    details: 'Durante o percurso, você atravessará paisagens deslumbrantes até chegar ao destino final: uma cachoeira cristalina cercada por vegetação exuberante, perfeita para relaxar e se conectar com a natureza. Inclui: quadriciclo equipado, equipamentos de segurança e instrutor experiente. Venha viver esta aventura única conosco!',
    gallery: [
      '/quadriciclo/IMG_8997.JPG',
      '/quadriciclo/quadri1.jpg',
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
        title: 'Cânion Itaimbezinho – Parque Nacional Aparados da Serra.',
        excerpt: 'Descubra tudo sobre o famoso Cânion Itaimbezinho, uma das principais atrações de Cambará do Sul. Dicas de trilhas, horários e como aproveitar ao máximo sua visita.',
        content: '<p>A charmosa cidade de Cambará do Sul, no Rio Grande do Sul, é o principal ponto de partida para quem deseja conhecer o imponente Cânion Itaimbezinho, situado no Parque Nacional de Aparados da Serra, a cerca de 18 km do centro da cidade.</p>\n\n<p>Entre os mais de sessenta cânions existentes na região, o Itaimbezinho é o mais conhecido e único com paredes retilíneas e extremamente íngremes, o que dá a impressão de terem sido cortadas a faca. A origem do nome vem do tupi-guarani, em que “Ita” significa pedra e “Aimbé” quer dizer afiada ou cortante — um nome que descreve com perfeição o visual impressionante do local.</p>\n\n<h3>Trilhas e Experiências</h3>\n<p>Na parte superior do cânion, o visitante pode escolher entre duas trilhas:</p>\n<ul>\n  <li><strong>Trilha do Vértice (2 km)</strong> – percurso curto, com mirantes e vistas panorâmicas incríveis.</li>\n  <li><strong>Trilha do Cotovelo (6 km)</strong> – trajeto mais longo e envolvente, ideal para cerca de 3 horas de caminhada leve.</li>\n</ul>\n<p>Já na parte inferior, há a desafiadora <strong>Trilha do Rio do Boi</strong>, com 8 km de extensão, que acompanha o leito do rio entre os paredões. Por segurança, essa atividade só pode ser realizada com o acompanhamento de um guia e é recomendada apenas para quem tem bom preparo físico.</p>\n\n<h3>Características do Cânion Itaimbezinho</h3>\n<ul>\n  <li><strong>Extensão:</strong> 5,8 km</li>\n  <li><strong>Largura:</strong> 600 metros</li>\n  <li><strong>Altitude:</strong> cerca de 900 metros</li>\n</ul>\n\n<h3>Horário de Funcionamento</h3>\n<ul>\n  <li><strong>Itaimbezinho:</strong> de terça-feira a domingo, das 8h às 17h (fechado às segundas-feiras).</li>\n  <li><strong>Cânion Fortaleza:</strong> de quarta a segunda-feira, das 8h às 17h (fechado às terças-feiras).</li>\n</ul>\n\n<h3>Valores dos Ingressos (Urbia Cânions Verdes)</h3>\n<p>O ingresso dá acesso aos dois cânions – Itaimbezinho e Fortaleza – e é válido por 7 dias, permitindo até 3 acessos dentro desse período.</p>\n<p><strong>⚠️ Atenção:</strong> o ingresso não inclui a Trilha do Rio do Boi, que é cobrada separadamente e deve ser feita com guia credenciado.</p>\n\n<h4>Valores</h4>\n<ul>\n  <li><strong>Inteiro:</strong> R$ 107,00 – valor padrão de acesso ao parque.</li>\n  <li><strong>Melhor Idade:</strong> R$ 75,00 – para visitantes com 60 anos ou mais, mediante apresentação de documento (RG, CPF ou CNH).</li>\n  <li><strong>Crianças até 6 anos:</strong> entrada gratuita, com apresentação obrigatória de documento (identidade ou certidão de nascimento).</li>\n</ul>\n\n<h4>Política de Ingressos</h4>\n<ul>\n  <li>Ingressos nominais e intransferíveis.</li>\n  <li>É obrigatória a apresentação do documento de identificação junto ao ingresso.</li>\n  <li>Após a utilização, não há reembolso ou estorno.</li>\n  <li>Isenção também para guias e condutores cadastrados junto à Urbia Cânions Verdes.</li>\n</ul>\n\n<h3>Estacionamento (por acesso)</h3>\n<ul>\n  <li><strong>Moto:</strong> R$ 13,00</li>\n  <li><strong>Carro:</strong> R$ 20,00</li>\n  <li><strong>Van / Motorhome:</strong> R$ 34,00</li>\n  <li><strong>Ônibus:</strong> R$ 78,00</li>\n</ul>\n\n<h3>O que Levar para Fazer as Trilhas</h3>\n<p>Por se tratar de uma região de serra, o clima muda rapidamente e o terreno pode ser irregular.</p>\n<ul>\n  <li><strong>Roupas adequadas:</strong> leve jaquetas corta-vento e impermeáveis.</li>\n  <li><strong>Calçados apropriados:</strong> tênis ou botas de caminhada com boa aderência.</li>\n  <li><strong>Água e lanches:</strong> mantenha-se hidratado e energizado.</li>\n  <li><strong>Protetor solar e chapéu:</strong> proteção contra a exposição ao sol.</li>\n  <li><strong>Repelente:</strong> para afastar insetos, especialmente na parte inferior.</li>\n  <li><strong>Mochila:</strong> confortável para carregar os itens.</li>\n  <li><strong>Câmera:</strong> para capturar as paisagens deslumbrantes com segurança.</li>\n</ul>',
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
        title: 'Cânion Fortaleza – Parque Nacional da Serra Geral',
        excerpt: 'Descubra o Cânion Fortaleza: características, curiosidades, ingressos e o que levar.',
        content: '<p>O Cânion Fortaleza é considerado um dos atrativos naturais mais exuberantes da região. Juntamente com o Cânion Itaimbezinho, está entre os principais pontos turísticos do Estado. Localizado no Parque Nacional da Serra Geral, a aproximadamente 23 km do centro de Cambará do Sul, seu nome remete ao formato dos rochedos, que lembram as muralhas de um forte gigante.</p>\n\n<p>A vegetação agarrada às rochas apresenta uma tonalidade de verde mais escura e é composta por folhas de <em>gunnera manicata</em> (urtigão), que podem chegar a 1,5 metro de diâmetro.</p>\n\n<h3>Características</h3>\n<ul>\n  <li><strong>Extensão:</strong> 7,5 km</li>\n  <li><strong>Largura:</strong> 2.000 metros</li>\n  <li><strong>Altitude:</strong> 1.240 metros</li>\n</ul>\n\n<h3>Importante</h3>\n<p>Os dias de visitação são de quarta-feira a segunda-feira. Na terça-feira, o parque permanece fechado para visitação.</p>\n\n<h3>Curiosidade</h3>\n<p>No Cânion Fortaleza, um dos pontos de visitação mais interessantes é a Pedra do Segredo: um bloco de rocha de 5 metros de altura, que pesa cerca de 30 toneladas e está equilibrado sobre uma base de apenas 50 centímetros.</p>\n\n<h3>Valores dos Ingressos (Urbia Cânions Verdes)</h3>\n<p>O ingresso dá acesso aos dois cânions – Itaimbezinho e Fortaleza – e é válido por 7 dias, permitindo até 3 acessos dentro desse período.</p>\n<p><strong>⚠️ Atenção:</strong> o ingresso não inclui a Trilha do Rio do Boi, que é cobrada separadamente e deve ser feita com guia credenciado.</p>\n\n<h4>Valores</h4>\n<ul>\n  <li><strong>Inteiro:</strong> R$ 107,00</li>\n  <li><strong>Melhor Idade:</strong> R$ 75,00 (60+ mediante documento)</li>\n  <li><strong>Crianças até 6 anos:</strong> entrada gratuita (com documento)</li>\n</ul>\n\n<h4>Política de Ingressos</h4>\n<ul>\n  <li>Ingressos nominais e intransferíveis.</li>\n  <li>Apresentação de documento de identificação é obrigatória.</li>\n  <li>Após a utilização, não há reembolso ou estorno.</li>\n  <li>Isenção para guias e condutores cadastrados na Urbia Cânions Verdes.</li>\n</ul>\n\n<h3>Estacionamento (por acesso)</h3>\n<ul>\n  <li><strong>Moto:</strong> R$ 13,00</li>\n  <li><strong>Carro:</strong> R$ 20,00</li>\n  <li><strong>Van / Motorhome:</strong> R$ 34,00</li>\n  <li><strong>Ônibus:</strong> R$ 78,00</li>\n</ul>\n\n<h3>O que Levar para Fazer as Trilhas</h3>\n<p>Por se tratar de uma região de serra, o clima muda rapidamente e o terreno pode ser irregular.</p>\n<ul>\n  <li><strong>Roupas adequadas:</strong> jaquetas corta-vento e impermeáveis.</li>\n  <li><strong>Calçados apropriados:</strong> tênis ou botas de caminhada com boa aderência.</li>\n  <li><strong>Água e lanches:</strong> mantenha-se hidratado e energizado.</li>\n  <li><strong>Protetor solar e chapéu:</strong> proteção contra o sol.</li>\n  <li><strong>Repelente:</strong> especialmente para áreas inferiores.</li>\n  <li><strong>Mochila:</strong> confortável para carregar itens.</li>\n  <li><strong>Câmera:</strong> para registrar as paisagens com segurança.</li>\n</ul>',
        image: '/Fortaleza/fortaleza11.jpg',
        category: 'passeios',
        date: '2024-01-08',
        readTime: 4,
        tags: ['cânion', 'fortaleza', 'trilha', 'serra geral']
    }
];