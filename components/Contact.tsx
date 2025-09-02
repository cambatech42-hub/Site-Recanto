
import React from 'react';

const ContactInfoItem: React.FC<{ icon: JSX.Element; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start mb-6">
        <div className="text-primary-green mr-4 mt-1">{icon}</div>
        <div>
            <h4 className="font-bold text-lg text-primary-green">{title}</h4>
            <div className="text-gray-600">{children}</div>
        </div>
    </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary-green">Entre em Contato</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Estamos ansiosos para receber você. Fale conosco e planeje sua viagem!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-background-beige p-8 md:p-12 rounded-lg shadow-lg">
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary-green mb-8">Informações de Contato</h3>
            <ContactInfoItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>} 
                title="Endereço">
                Estrada do Recanto, 123<br/>Cambará do Sul, RS, 95480-000
            </ContactInfoItem>
            <ContactInfoItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                title="Telefone / WhatsApp">
                <a href="tel:+5554999998888" className="hover:text-accent-gold">+55 (54) 99999-8888</a>
            </ContactInfoItem>
            <ContactInfoItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                title="Email">
                <a href="mailto:contato@recantodolago.com.br" className="hover:text-accent-gold">contato@recantodolago.com.br</a>
            </ContactInfoItem>
          </div>
          <div className="w-full h-80 lg:h-full bg-gray-300 rounded-lg shadow-inner overflow-hidden flex items-center justify-center text-gray-500">
             <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/map/800/600')"}}>
                <div className="w-full h-full bg-primary-green/30 flex items-center justify-center">
                    <span className="text-white bg-black/50 px-4 py-2 rounded">Carregando Mapa...</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
