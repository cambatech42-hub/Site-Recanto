import React from 'react';
import { PhoneIcon, InstagramIcon, CarIcon, BusIcon, PlaneIcon, RulesIcon, BedIcon, CheckInIcon, TaxiIcon, BikeIcon, ParkingIcon, MapPinIcon, RestaurantIcon, ShoppingBagIcon, SparklesIcon, HeartIcon, QuestionMarkIcon, ChecklistIcon, StarIcon } from './components/guest-guide/icons';

export const GUIDE_SECTIONS = [
    {
      id: 'hosts',
      title: 'Conheça seus anfitriões',
      Icon: HeartIcon,
      content: {
        image: 'https://i.imgur.com/k2LV2k2.jpeg', // Placeholder from PDF
        text: [
          'Quem será responsável por sua estadia serão Marcelo e Paola. Que optaram sair do ritmo frenético da cidade grande para (voltar) o ritmo calmo interiorano. Amam a calma e a tranquilidade da cidade pequena, o verde da pousada e cantar dos pássaros! Sempre a postos para lhe atender e ajudar no que precisar!',
          'Em alguns dias também podem contar com a presença do filho do casal, Mark, que ama correr pela pousada com os cachorros e fazer fogueiras no final da tarde.',
          'Quando estivermos fora, quem irá recepcionar será o Senhor José, proprietário da pousada. Ele adora conversar, contar e conhecer histórias. Sempre disposto a mostrar todos os lugares da pousada!'
        ],
        contacts: [
          { text: '54 99930-0535', href: 'tel:54999300535', Icon: PhoneIcon },
          { text: '@pousadarecantodolago', href: 'https://www.instagram.com/pousadarecantodolago', Icon: InstagramIcon }
        ]
      }
    },
    {
      id: 'directions',
      title: 'Como chegar',
      Icon: MapPinIcon,
      content: [
        {
          title: 'Do Aeroporto',
          Icon: PlaneIcon,
          text: 'Saindo do aeroporto Salgado Filho, em Porto Alegre, sua melhor rota é indo pela BR-101 até Terra de Areia, subir a Rota do Sol pela RS-453, depois pegar a RS-020 até Cambara do Sul.'
        },
        {
          title: 'De Carro',
          Icon: CarIcon,
          text: 'Saindo de Porto Alegre, sua melhor rota é indo pela BR-101 até Terra de Areia, subir a Rota do Sol pela RS-453 e pegar a RS-020 até Cambara do Sul. Saindo de Caxias do Sul, sua rota é pela RS-453 e após pegar a RS-020 até Cambara do Sul.'
        },
        {
          title: 'De Ônibus',
          Icon: BusIcon,
          text: 'Para chegar a Cambará do Sul, através da linha de ônibus, nossos hóspedes devem confirmar o itinerário com a Rodoviária de Cambara do Sul, Caxias do Sul ou São Francisco de Paula.',
          contacts: [
            { name: 'Rodoviária Cambara do Sul', phone: '54 999343070' },
            { name: 'Rodoviária São Francisco de Paula', phone: '54 32442278' },
            { name: 'Rodoviária Caxias do Sul', phone: '54 32183000' }
          ]
        }
      ]
    },
    {
      id: 'rules',
      title: 'Regras da pousada',
      Icon: RulesIcon,
      content: [
        'PROIBIDO SOM ALTO',
        'AS CRIANÇAS DEVEM ESTAR SEMPRE ACOMPANHADAS DOS PAIS E/OU RESPONSAVEIS',
        'ANIMAIS DEVEM ESTAR SEMPRE ACOMPANHADOS DOS TUTORES E LEMBRE QUE SEU AMIGO PET TEM ENTRADA PROIBIDA NOS PARQUES NACIONAIS',
        'PROIBIDO FUMAR',
        'LEMBRE QUE TEMOS OUTROS HÓSPEDES NA PROPRIEDADE, BEBA COM RESPONSABILIDADE E CUIDADO COM BARULHO',
        'A LIMPEZA DOS QUARTOS SOMENTE SERÁ REALIZADA NA PARTE DA MANHÃ, APÓS A SAÍDA DOS HÓSPEDES DA CABANA.',
        {
          title: 'IMPORTANTE!',
          text: 'AMAMOS RECEBE-LOS COM ALEGRIA E SIMPATIA, MAS SE NECESSÁRIO SERÃO TOMADAS AS ATITUDES CABÍVEIS, HAJA SEMPRE COM RESPEITO AOS DEMAIS HÓSPEDES, PROPRIETÁRIOS, FUNCIONÁRIOS E COM OS ANIMAIS.'
        }
      ]
    },
    {
      id: 'linen',
      title: 'Roupa de cama & banho',
      Icon: BedIcon,
      content: [
        {
          title: 'ESTADIAS DE ATÉ 7 DIAS:',
          text: 'Será oferecida apenas um conjunto de roupa de cama, disponível desde o momento do seu check-in. Fornecemos uma plaqueta no check-in onde podem solicitar organização e troca de toalhas.\n\nIMPORTANTE: Limpeza sempre realizada no período da manhã, após o café e quando os hóspedes e/ou animal de estimação não estiverem nas acomodações. Não permitimos o uso das toalhas nos passeios.'
        },
        {
          title: 'ESTADIAS SUPERIORES A 7 DIAS:',
          text: 'Oferecemos troca das roupas de cama e banho na metade da estadia.'
        },
        {
          title: 'AVARIAS:',
          text: 'Todas as peças de cama e banho são cuidadosamente higienizadas e disponibilizadas para o uso dos hóspedes da pousada. Caso sejam verificadas avarias de qualquer natureza (furos, rasgos, manchas de qualquer tipo etc.), será cobrado o valor monetário da peça avariada a valor de mercado.'
        }
      ]
    },
    {
      id: 'checkin',
      title: 'Check-in & Check-out',
      Icon: CheckInIcon,
      content: [
        {
          title: 'CHECK-IN: 15:00',
          text: 'Nosso Check-in funciona à partir das 15h até às 21h. Caso seja necessário realizar entrada fora deste horário, por gentileza verificar com antecedência. Check-in antecipado está sujeito a disponibilidade e cobrança adicional, já para o check-in após o horário serão enviadas instruções para acesso a cabana.'
        },
        {
          title: 'CHECK-OUT: 12:00',
          text: 'Nosso Checkout funciona à partir das 8h até às 12h. Caso seja necessário realizar saída fora deste horário, por gentileza verificar com antecedência. Checkout após o horário está sujeito a disponibilidade e cobrança adicional.'
        }
      ]
    },
    {
      id: 'transport',
      title: 'Como se locomover',
      Icon: TaxiIcon,
      content: [
        {
          title: 'UBER/99',
          text: 'A cidade ainda não conta com os principais modelos de app de transporte, porém possui muitas empresas de turismo que oferecem serviço de transporte.'
        },
        {
          title: 'TÁXI',
          text: 'Cambará do Sul conta com um cadastro de Taxis. Abaixo link da prefeitura com os veículos cadastrados:',
          link: {
            text: 'Ver lista de táxis',
            href: 'https://www.cambaradosul.rs.gov.br/secao.php?pagina=16'
          }
        },
        {
          title: 'BICICLETA',
          Icon: BikeIcon,
          text: 'Algumas agências trabalham com a locação de bikes para turistas, vale a pena consultar antecipadamente. No Parque de Aparados da Serra, também é possível a locação das bicicletas para realizar as trilhas na parte superior do Cânion Itaimbezinho.'
        },
        {
          title: 'ESTACIONAMENTO',
          Icon: ParkingIcon,
          text: 'A pousada Recanto do Lago fica a 8km do centro, sua cabana tem vaga aberta ao lado da cabana. No centro não é cobrado valor para estacionar em vias públicas, mas para estacionar em propriedades privadas ou em alguns atrativos, pode se cobrar valor adicional.'
        }
      ]
    },
    {
      id: 'recommendations',
      title: 'Dicas Locais',
      Icon: StarIcon,
      isAccordion: true,
      content: [
        {
          title: 'Padarias & Lanchonetes',
          items: [
            { name: 'Padaria Dois Irmãos', description: 'Padaria e confeitaria, conta com diversas delícias, como bolos, tortas e salgados. Opções de lanches quentes.', address: 'Av. Getúlio Vargas, 1369 - Centro, Cambará do Sul - RS, 95480-000' },
            { name: 'Sabores da Querência', description: 'Deliciosas geleias, cafés e gelatos! Um espaço lindíssimo para desfrutar de um cafézinho especial!', address: 'Av. Getúlio Vargas, 1414 - Cambará do Sul, RS, 95480-000' },
            { name: 'Café Serra Verde', description: 'Um café com diversas delícias, como bolos, tortas e salgados. Opções de lanches quentes.', address: 'R. Tradição, 435 - Cambará do Sul, RS, 95480-000' },
            { name: 'Padaria Café e Cia', description: 'Doces, salgados e cafés! Se for levar algo para um piquenique, experimente o bolode aipim e o pão de milho.', address: 'R. Dom Pedro II, 261 - Cambará do Sul, RS, 95480-000' }
          ]
        },
        {
          title: 'Mercados & Açougues',
          items: [
            { name: 'Supermercado Brentano', description: 'Tradicional na cidade o mercado oferece grande variedade de produtos e também conta com uma padaria.', address: 'Av. Getúlio Vargas, 1197 - Centro, Cambará do Sul - RS, 95480-000' },
            { name: 'Fruteira do Tio Brisa', description: 'Tradicional na cidade a fruteira oferece grande variedade de produtos e também conta com um açougue. Não fecha ao meio dia.', address: 'Av. Getúlio Vargas, 1-97 - Cambará do Sul, RS, 95480-000' },
            { name: 'Casa de Carnes Ritter', description: 'Além das carnes, conta com itens indispensáveis para um bom churrasco.', address: 'Rua Antonio Raupp, N° 419 no bairro Centro em Cambará do Sul - RS, CEP 95480-000' },
            { name: 'Mercado da Familia', description: 'Mercado de uma vila, mais proximo a pousada do que os mercados no centro, porém a variedade de produtos é menor.', address: 'Avenida Senador Alberto Pasqualini, 1156, Vila Oswaldo Kroeff, Cambará do Sul-RS. CEP: 95480-000' }
          ]
        },
        {
          title: 'Lojas',
          items: [
            { name: 'Galochas', description: 'Calçados, pijamas e acessórios.', address: 'Av. Getúlio Vargas, 1140 - Sala 04 - Cambará do Sul, RS, 95480-000', social: '@galochasshoes' },
            { name: 'Mundo Verde', description: 'Alimentos saudáveis e para pessoas com restrição alimentar.', address: 'Rua João Francisco Ritter, 444 sala 1 - Cambará do Sul, RS, 95480-000', social: '@emporiomundoverde' },
            { name: 'Coisas da Serra', description: 'Artesanato, itens de decoração e aquela lembrancinha pra levar.', address: 'Av. Getúlio Vargas, 1249 - Cambará do Sul, RS, 95480-000', social: '@coisasdaserracambara' }
          ]
        },
        {
          title: 'Comida & Bebida',
          items: [
            { name: 'Pizzaria Recanto do Lago', description: 'Um pizzaiolo formado pela Scuola Italiana Pizzaioli. Oferece não apenas uma pizza, mas uma experiência gastronômica! Massa com 72h de fermentação e maturação com farinha italiana e ingrediente de alta qualidade. Com opção de saborear a pizza aqui na pousada, junto do salão de café da manhã, ou com entrega na cabana.', social: '@recantodapizzacambara' },
            { name: "Antonio's Serra Bar", description: 'Uma experiência gastronômica e cultural em Cambará do Sul. Chopp, cervejas artesanais e vinhos.', social: '@antonios.serrabar' },
            { name: 'Du Perau', description: 'Hamburgueres, baguetes, petiscos, Rock and Roll e cerveja artesanal', social: '@duperaupub' },
            { name: 'DeGusta Reataurante', description: 'Pratos feitos e elaborados pela Gastróloga Carolina Barbier num aconchegante e charmoso local.', social: '@degustapubrestaurante' },
            { name: 'Costaneira Restaurante', description: 'Carne de panela, feijão tropeiro, galinhada... são algumas das delícias locais que o restaurante serve.', social: '@familiacostaneira' },
            { name: 'O Casarão Restaurante', description: 'Comida estilo italiano, com massas, sopa de capeletti e galeto primo canto. Tambem tem opção de truta.', social: '@galeteriaocasarao' },
            { name: 'Vitrine da Truta', description: 'Pratos do cheff, preparados com tempero especial. Em noites especiais tem show da familia Barbieri ao som de arpa, piano e violino.', social: '@vitrinedatruta' },
          ]
        },
        {
          title: 'Atrações',
          items: [
            { name: 'Parques Nacionais', description: 'Cambará do Sul conta com dois parques nacionais, tambem declarados patrimonio geologico mundial pela UNESCO.' },
            { name: 'Quadriciclo', description: 'Adrenalina, aventura e muita diversão! Com guias experientes, você pilota!', social: '@quadrisull' },
            { name: '4x4', description: 'Mas nem só de cânion o turista vem a procura, roteiros 4x4 tem o coração dos nossos turistas. O mais famoso é o Circuito das Águas.' },
            { name: 'Voo de Balão', description: 'Um lindo voo sobre os campos de altitude ao nascer do sol! Não temos palavras para descrever a sensação de tocas as nuvens.', social: '@cambarabalonismo' },
            { name: 'Museu Municipal', description: 'Centro de Informações, Biblioteca, Museu Irmã Tarcila Afonso e mostra de artesanatos. Abre diariamente das 8h às 18h.' },
            { name: 'Igreja Matriz', description: 'Localizada no centro da cidade, com arquitetura no estilo barroco. Pinturas no interior feitaspelo assessor pessoal do ilustre Aldo Locatelli.' },
            { name: 'Sequoia Lunar', description: '300 sementes foram enviadas a lua, sob posse de Stuart Roosa, entre 31/01 e 09/02/1971, tempo que durou a expedição. Três destas estão no Brasil, sendo que duas no estado do Rio Grande do Sul. A de Cambará do Sul é a 76° árvore lunar mapeada no mundo.' },
          ]
        }
      ]
    },
    {
      id: 'must-see',
      title: 'Imperdíveis no destino',
      Icon: SparklesIcon,
      content: [
        {
          title: 'Parque Nacional Aparados da Serra',
          text: 'O parque conta com bicicletas para realizar as trilhas na borda superior do cânion, lanchonete, restaurante e tu ainda pode fazer um belissimo piquenique no gramado!',
          social: '@urbiacanionsverdes'
        },
        {
          title: 'Parque Nacional da Serra Geral',
          text: 'No Cânion Fortaleza, além das trilhas de suspirar e paisagens de tirar o fôlego, ainda conta com a maior tirolesa das Américas!',
          social: '@urbiacanionsverdes'
        },
        {
          title: 'Circuito das Águas',
          text: 'Duas travessias com 4X4 dentro da água e três cachoeiras que mais parecem cenário de novela... aliás, não só parecem como foram!'
        }
      ]
    },
    {
      id: 'faq',
      title: 'Perguntas Frequentes',
      Icon: QuestionMarkIcon,
      isAccordion: true,
      content: [
        {
          title: 'Tem estacionamento disponível no local?',
          text: 'Sim, a pousada oferece estacionamento aberto, com vaga ao lado da cabana para os hóspedes. Já para os visitantes, uma área ao lado do café possui vagas para estacionamento.'
        },
        {
          title: 'Posso levar meu pet?',
          text: 'Aceitamos seu pet com muito carinho, mas temos algumas regrinhas para recebê-los. Lembre-se também que eles nunca devem ficar soltos sem seu tutor e que a entrada deles nos parques nacionais não é permitida.'
        },
        {
          title: 'Tem roupa de cama e banho disponível?',
          text: 'Nós fornecemos roupa de cama, toalhas e para as cabanas com banheira fornecemos roupões e sais de banho.'
        },
        {
          title: 'Como posso me conectar à rede Wi-Fi?',
          text: 'Na propriedade existem vários pontos de rede wi-fi, basta conectar-se e caso alguma rede peça senha, basta utilizar “recantodolago” para se conectar.'
        },
        {
          title: 'Como funciona a lavanderia?',
          text: 'Não fornecemos serviço de lavanderia. Para isso deve utilizar uma lavanderia da cidade, com custo por conta do hóspede. Indicamos a Lavanderia Brilhante - contato da lavanderia: 54 99932 2764.'
        }
      ]
    },
    {
        id: 'before-you-go',
        title: 'Antes de ir, por favor',
        Icon: ChecklistIcon,
        content: [
            'Recolha o lixo comum e separe o lixo reciclável',
            'Desligue os aquecedores',
            'Verifique se não está esquecendo nenhum pertence pessoal',
            'Feche todas as janelas e portas',
            'Desligue o ar condicionado e apague todas as luzes',
            'Informe-nos se algum dano tiver acontecido',
            'Por favor, não esqueça de deixar a chave com a recepção.'
        ]
    }
];
