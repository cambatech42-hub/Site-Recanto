import React, { useState } from 'react';
import Button from './ui/Button';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionStatus({ type: 'error', message: 'Por favor, preencha todos os campos obrigatórios.' });
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    // Simulação de chamada de API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmissionStatus({ type: 'success', message: 'Obrigado! Sua mensagem foi enviada com sucesso.' });
    setFormData({ name: '', email: '', phone: '', message: '' });

    // Limpa a mensagem após 5 segundos
    setTimeout(() => setSubmissionStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary-green">Entre em Contato</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Estamos ansiosos para receber você. Fale conosco e planeje sua viagem!
          </p>
        </div>
        <div className="bg-background-beige p-8 md:p-12 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                    <a href="https://wa.me/5554999300535" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold">+55 (54) 9 9930-0535</a>
                </ContactInfoItem>
                <ContactInfoItem 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    title="Email">
                    <a href="mailto:contato@recantodolago.com.br" className="hover:text-accent-gold">contato@recantodolago.com.br</a>
                </ContactInfoItem>
            </div>
            <div>
                 <h3 className="text-3xl font-serif font-bold text-primary-green mb-8">Envie uma Mensagem</h3>
                 <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nome Completo</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold transition-shadow" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">E-mail</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold transition-shadow" required />
                    </div>
                     <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Telefone <span className="text-sm text-gray-500">(Opcional)</span></label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold transition-shadow" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Sua Mensagem</label>
                        <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold transition-shadow" required></textarea>
                    </div>
                    <div className="text-right">
                        <Button type="submit" variant="primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                        </Button>
                    </div>
                    {submissionStatus && (
                        <div className={`mt-4 text-center p-3 rounded-md ${submissionStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {submissionStatus.message}
                        </div>
                    )}
                 </form>
            </div>
            </div>
            <div className="mt-12 w-full h-80 lg:h-96 bg-gray-300 rounded-lg shadow-inner overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.289112932903!2d-50.0810182244874!3d-28.99986597548171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951f55910ef285a1%3A0xdcc7c88c97fd21d!2sPousada%20Recanto%20do%20Lago%20-%20Cambar%C3%A1%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1672856262451!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Pousada Recanto do Lago no Google Maps"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;