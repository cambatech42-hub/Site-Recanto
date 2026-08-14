import React from 'react';

const PARKSNET_URL =
  'https://parksnet.com.br/destino/serra-gaucha?bookingAgency=6735';

const steps = [
  {
    number: '1',
    text: 'Copie o cupom de desconto na faixa no topo da página',
  },
  {
    number: '2',
    text: 'Digite "cânions" na busca e selecione Itaimbezinho e Fortaleza',
  },
  {
    number: '3',
    text: 'Escolha a data e aplique o cupom antes de finalizar',
  },
];

const Ingressos: React.FC = () => {
  return (
    <section
      id="ingressos"
      className="bg-primary-green py-16 px-4 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block bg-accent-gold text-white text-xs font-sans font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          🎟️ Desconto Exclusivo
        </span>

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
          Ingressos dos Cânions
        </h2>
        <p className="font-sans text-white/75 text-base md:text-lg mb-10">
          Itaimbezinho e Fortaleza — compre online com desconto.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-4 bg-white/10 rounded-lg p-5"
            >
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-accent-gold text-white font-bold font-sans text-sm flex items-center justify-center">
                {step.number}
              </span>
              <p className="font-sans text-white/90 text-sm leading-relaxed mt-1">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={PARKSNET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent-gold hover:bg-yellow-600 text-white font-sans font-bold text-base px-8 py-4 rounded-md shadow-lg transition-all duration-300 hover:scale-105"
        >
          Comprar ingresso
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>

        {/* Info complementar */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Atenção */}
          <div className="bg-white/10 rounded-lg p-5 border-l-4 border-accent-gold">
            <p className="font-sans text-xs font-bold uppercase tracking-wide text-accent-gold mb-1">
              Atenção
            </p>
            <p className="font-sans text-white/85 text-sm leading-relaxed">
              Este ingresso <strong>não permite acesso</strong> à Trilha do Rio
              do Boi.
            </p>
            <p className="font-sans text-white/85 text-sm leading-relaxed mt-2">
              Válido para <strong>3 acessos únicos</strong> em 7 dias a partir
              do primeiro acesso.
            </p>
          </div>

          {/* Horários */}
          <div className="bg-white/10 rounded-lg p-5">
            <p className="font-sans text-xs font-bold uppercase tracking-wide text-accent-gold mb-2">
              Horário de funcionamento
            </p>
            <ul className="font-sans text-white/85 text-sm leading-relaxed space-y-2">
              <li>
                <span className="font-semibold text-white">Itaimbezinho</span>
                <br />
                Diariamente 8h–17h
                <br />
                <span className="text-white/60 text-xs">
                  Fechado às segundas-feiras
                </span>
              </li>
              <li>
                <span className="font-semibold text-white">Fortaleza</span>
                <br />
                Diariamente 8h–17h
                <br />
                <span className="text-white/60 text-xs">
                  Fechado às terças-feiras
                </span>
              </li>
            </ul>
          </div>

          {/* Isenções */}
          <div className="bg-white/10 rounded-lg p-5">
            <p className="font-sans text-xs font-bold uppercase tracking-wide text-accent-gold mb-2">
              Isenções de ingresso
            </p>
            <ul className="font-sans text-white/85 text-sm leading-relaxed list-disc list-inside space-y-1">
              <li>Crianças até 6 anos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingressos;
