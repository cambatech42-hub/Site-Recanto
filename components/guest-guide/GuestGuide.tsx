import React from 'react';

const GuestGuide: React.FC = () => {
  return (
    <section id="guest-guide" className="py-20 bg-background-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-green mb-4">
            Guia do Hóspede
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informações essenciais para tornar sua estadia ainda mais especial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Check-in/Check-out */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-primary-green mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-green mb-3">
              Check-in / Check-out
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Check-in:</strong> 15h00</li>
              <li><strong>Check-out:</strong> 12h00</li>
              <li><strong>Recepção:</strong> 24 horas</li>
            </ul>
          </div>

          {/* Café da Manhã */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-primary-green mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-green mb-3">
              Café da Manhã
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Horário:</strong> 7h30 às 10h00</li>
              <li><strong>Local:</strong> Salão principal</li>
              <li><strong>Incluso:</strong> Produtos regionais</li>
              <li><strong>Especial:</strong> Pães caseiros</li>
            </ul>
          </div>

          {/* Wi-Fi */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-primary-green mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-green mb-3">
              Internet Wi-Fi
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Rede:</strong> Recanto_Lago</li>
              <li><strong>Senha:</strong> recanto2024</li>
              <li><strong>Cobertura:</strong> Todas as áreas</li>
              <li><strong>Velocidade:</strong> Alta velocidade</li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-primary-green mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-green mb-3">
              Serviços Disponíveis
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Lavanderia (taxa adicional)</li>
              <li>• Estacionamento gratuito</li>
              <li>• Cofre na recepção</li>
              <li>• Informações turísticas</li>
            </ul>
          </div>

          {/* Contatos de Emergência */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-primary-green mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-green mb-3">
              Contatos Importantes
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Recepção:</strong> (54) 9999-0000</li>
              <li><strong>Emergência:</strong> 192 / 193</li>
              <li><strong>Hospital:</strong> (54) 3251-1234</li>
              <li><strong>Polícia:</strong> 190</li>
            </ul>
          </div>

          {/* Dicas Locais */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-primary-green mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-green mb-3">
              Dicas da Região
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Melhor época: Março a Junho</li>
              <li>• Leve roupas de frio</li>
              <li>• Cânions: 30 min de carro</li>
              <li>• Centro: 10 min caminhando</li>
            </ul>
          </div>
        </div>

        {/* Regras da Casa */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-serif font-bold text-primary-green mb-6 text-center">
            Regras da Casa
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-primary-green mb-3">Permitido:</h4>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Animais de estimação (consulte condições)</li>
                <li>✓ Fumar apenas em áreas externas</li>
                <li>✓ Música ambiente até 22h</li>
                <li>✓ Uso das áreas comuns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary-green mb-3">Não Permitido:</h4>
              <ul className="text-gray-700 space-y-2">
                <li>✗ Festas ou eventos</li>
                <li>✗ Fumar dentro das acomodações</li>
                <li>✗ Barulho excessivo após 22h</li>
                <li>✗ Visitas sem autorização</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestGuide;