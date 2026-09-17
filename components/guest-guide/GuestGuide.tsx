import React, { useState } from 'react';

// ── Ícones inline ────────────────────────────────────────────────────────────
const Icon = ({ d, d2 }: { d: string; d2?: string }) => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
    {d2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d2} />}
  </svg>
);

// ── Accordion ────────────────────────────────────────────────────────────────
interface AccordionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ icon, title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex items-center gap-3 text-primary-green font-semibold text-lg">
          <span className="text-accent-gold">{icon}</span>
          {title}
        </div>
        <svg
          className={`w-5 h-5 text-primary-green transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 py-5 bg-white border-t border-gray-100 text-gray-700 leading-relaxed space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};

// ── Info card rápido ─────────────────────────────────────────────────────────
const QuickCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
    <div className="text-accent-gold shrink-0">{icon}</div>
    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{label}</p>
      <p className="text-primary-green font-bold text-sm leading-tight">{value}</p>
    </div>
  </div>
);

// ── Componente principal ─────────────────────────────────────────────────────
const GuestGuide: React.FC = () => {
  const cardapio = [
    { item: 'Água', preco: 'R$ 5,00' },
    { item: 'Refrigerante', preco: 'R$ 7,00' },
    { item: 'Tônica', preco: 'R$ 7,00' },
    { item: 'Suco de uva (garrafa)', preco: 'R$ 15,00' },
    { item: 'Cerveja long neck', preco: 'R$ 12,00' },
    { item: 'Cerveja artesanal', preco: 'R$ 28,00' },
    { item: 'Vinho', preco: 'R$ 70,00' },
    { item: 'Espumante', preco: 'R$ 70,00' },
    { item: 'Chocolate', preco: 'R$ 6,00' },
    { item: 'Bolacha', preco: 'R$ 6,00' },
    { item: 'Salgadinho', preco: 'R$ 6,00' },
    { item: 'Chiclete', preco: 'R$ 5,00' },
  ];

  return (
    <div className="min-h-screen bg-background-beige">

      {/* ── Hero ── */}
      <div className="bg-primary-green text-white px-6 pt-32 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent-gold uppercase tracking-widest text-sm font-medium mb-3">Pousada Recanto do Lago</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Guia do Hóspede</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Tudo o que você precisa saber para aproveitar ao máximo sua estadia.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">

        {/* ── Quick cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickCard
            icon={<Icon d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />}
            label="Check-in"
            value="a partir das 15h"
          />
          <QuickCard
            icon={<Icon d="M17 16l4-4m0 0l-4-4m4 4H3m5 4v1a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />}
            label="Check-out"
            value="até as 12h"
          />
          <QuickCard
            icon={<Icon d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5m12-5l2 5M9 21h.01M15 21h.01" />}
            label="Café da manhã"
            value="8h às 10h"
          />
          <QuickCard
            icon={<Icon d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />}
            label="Wi-Fi — Senha"
            value="recantodolago"
          />
        </div>

        {/* ── Seções accordion ── */}
        <div className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-primary-green mb-5">Informações da Pousada</h2>

          <Accordion icon={<Icon d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />} title="Check-in e Check-out">
            <p><strong>Check-in:</strong> a partir das 15h.</p>
            <p><strong>Check-out:</strong> até as 12h.</p>
            <p>Horários especiais podem ser combinados com a recepção mediante disponibilidade.</p>
          </Accordion>

          <Accordion icon={<Icon d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5m12-5l2 5M9 21h.01M15 21h.01" />} title="Café da Manhã">
            <p>Servido <strong>das 8h às 10h</strong> no salão principal.</p>
            <p>Após este horário, favor combinar com a recepção com <strong>um dia de antecedência</strong>.</p>
            <p>Hóspedes podem solicitar <strong>ovos mexidos</strong> diretamente na cozinha.</p>
            <p>Clientes com <strong>intolerâncias ou alergias alimentares</strong> devem avisar com antecedência para que possamos preparar uma opção adequada.</p>
          </Accordion>

          <Accordion icon={<Icon d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />} title="Limpeza">
            <p>Hóspedes com <strong>mais de uma diária</strong> recebem uma plaquinha para deixar na porta:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Um lado:</strong> limpeza completa + troca de toalhas</li>
              <li><strong>Outro lado:</strong> apenas limpeza</li>
            </ul>
            <p>A limpeza é realizada sempre <strong>na parte da manhã</strong>.</p>
          </Accordion>

          <Accordion icon={<Icon d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />} title="Lençol Térmico">
            <p>Os lençóis térmicos possuem <strong>regulagem individual para cada lado da cama</strong>.</p>
            <p className="text-amber-700 font-medium">Atenção: não deixe o lençol ligado a noite inteira nem quando não estiver no quarto.</p>
          </Accordion>

          <Accordion icon={<Icon d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />} title="Ar Condicionado">
            <p>O ar condicionado possui funções de <strong>aquecer e gelar</strong>, configuradas pelo controle remoto usando o botão <strong>MODE</strong>.</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Aquecer:</strong> selecione a opção <code className="bg-gray-100 px-1 rounded">HEAT</code> ou o ícone de sol ☀️</li>
              <li><strong>Gelar:</strong> selecione a opção <code className="bg-gray-100 px-1 rounded">COOL</code> ou o ícone de floco de neve ❄️</li>
            </ul>
          </Accordion>

          <Accordion icon={<Icon d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />} title="Televisão">
            <p>São <strong>dois controles remotos</strong>: um para ligar a TV e outro para trocar os canais.</p>
            <p>Canais abertos disponíveis:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Canal 5</strong> — SBT</li>
              <li><strong>Canal 6</strong> — RedeTV</li>
              <li><strong>Canal 7</strong> — Record</li>
              <li><strong>Canal 8</strong> — Globo</li>
            </ul>
            <p>Para Netflix ou outros streamings, utilize <strong>sua conta particular</strong>.</p>
          </Accordion>

          <Accordion icon={<Icon d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />} title="Sanitários">
            <p>Por gentileza, <strong>não jogue papel higiênico, absorvente ou sabonete no vaso sanitário</strong>.</p>
            <p>Para o descarte desses itens, utilize a <strong>lixeira</strong> disponível no banheiro.</p>
          </Accordion>

          <Accordion icon={<Icon d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />} title="Lago — Pedalinho e Pesca">
            <p>O <strong>pedalinho</strong> está disponível para uso dos hóspedes.</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Máximo de <strong>2 pessoas</strong> por vez</li>
              <li>Ao retornar, certifique-se de que ele ficou <strong>preso junto ao deck</strong></li>
            </ul>
            <p>Permitimos <strong>pesca esportiva</strong>. Na recepção você pode solicitar um caniço.</p>
            <p className="text-gray-500 text-sm">Não fornecemos equipamento profissional nem iscas.</p>
          </Accordion>

          <Accordion icon={<Icon d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />} title="Animais de Estimação">
            <p>Bem-vindos os pets! Mas atenção às regras:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Animais <strong>não são permitidos nos parques</strong> nacionais — eles ficam na pousada</li>
              <li>Dejetos dentro ou fora da cabana devem ser <strong>recolhidos pelo hóspede</strong></li>
              <li>Taxa de limpeza adicional: <strong>R$ 70,00 por diária</strong> (quando necessário)</li>
              <li>Danos à propriedade serão cobrados conforme o valor do dano</li>
              <li><strong>Não utilize</strong> cobertores e mantas da cabana para os animais — em caso de uso será cobrada taxa adicional de lavanderia</li>
            </ul>
          </Accordion>
        </div>

        {/* ── Cardápio de consumo ── */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-primary-green mb-5">Cardápio de Consumo</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 bg-primary-green/5 border-b border-gray-100">
              <p className="text-primary-green font-semibold text-sm uppercase tracking-wide">
                Itens disponíveis na recepção
              </p>
            </div>
            <table className="w-full">
              <tbody>
                {cardapio.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-3 text-gray-800">{row.item}</td>
                    <td className="px-6 py-3 text-right font-semibold text-primary-green whitespace-nowrap">{row.preco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* PIX */}
            <div className="px-6 py-5 bg-primary-green/5 border-t border-gray-100">
              <p className="text-primary-green font-bold text-center text-lg mb-3">
                Vamos praticar a honestidade 🤝
              </p>
              <div className="text-center text-sm text-gray-700 space-y-1">
                <p className="font-semibold text-accent-gold text-base">Pague com PIX</p>
                <p><strong>Nome:</strong> Marcelo da S. Nazario</p>
                <p><strong>CNPJ:</strong> 31.039.953/0001-97</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Pizzaria parceira ── */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-start gap-4">
            <div className="text-accent-gold shrink-0 mt-1">
              <Icon d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" d2="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-serif font-bold text-primary-green mb-2">Pizzaria Parceira</h2>
              <p className="text-gray-700 mb-3">
                A pousada conta com uma pizzaria parceira. Você pode optar por <strong>tele entrega</strong> ou
                saborear no <strong>salão do café da manhã</strong>. Uma pizzaria clássica italiana com
                massas de fermentação natural e longa maturação.
              </p>
              <a
                href="https://wa.me/5454999966401"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp (54) 99996-6401
              </a>
            </div>
          </div>
        </div>

        {/* ── Ingressos ── */}
        <div className="rounded-xl overflow-hidden border-2 border-accent-gold">
          <div className="bg-accent-gold px-6 py-4 flex items-center gap-3">
            <span className="text-2xl">🎟️</span>
            <div>
              <p className="text-white font-bold text-lg leading-tight">DESCONTO EXCLUSIVO</p>
              <p className="text-white/90 text-sm">Ingressos dos Cânions</p>
            </div>
          </div>
          <div className="bg-white px-6 py-5">
            <p className="text-gray-700 mb-6">
              <strong>Itaimbezinho e Fortaleza</strong> — compre online com desconto e garanta sua vaga.
            </p>
            <ol className="space-y-4 mb-7">
              {[
                'Copie o cupom de desconto na faixa no topo da página',
                'Digite "cânions" na busca e selecione Itaimbezinho e Fortaleza',
                'Escolha a data e aplique o cupom antes de finalizar',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-accent-gold text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
            <a
              href="https://parksnet.com.br/destino/serra-gaucha?bookingAgency=6735"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-green hover:bg-green-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              🏔️ Comprar ingresso →
            </a>
          </div>
        </div>

        {/* ── Passeios ── */}
        <div className="bg-primary-green text-white rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="text-accent-gold shrink-0 mt-1">
              <Icon d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" d2="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold mb-2">Passeios e Atividades</h2>
              <p className="text-white/80 mb-4">
                A pousada conta com parceiros que realizam passeios e atividades de aventura em Cambará do Sul —
                trilhas, cânions, balonismo e muito mais.
              </p>
              <a
                href="https://wa.me/5554999300535?text=Ol%C3%A1!%20Estou%20hospedado%20no%20Recanto%20do%20Lago%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20passeios%20e%20atividades%20em%20Cambar%C3%A1%20do%20Sul."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fale conosco pelo WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ── Contato da recepção ── */}
        <div className="text-center py-4 text-gray-500 text-sm">
          <p>Dúvidas? A recepção está à disposição.</p>
          <a
            href="https://wa.me/5554999300535"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-green font-semibold hover:underline"
          >
            Fale conosco pelo WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
};

export default GuestGuide;
