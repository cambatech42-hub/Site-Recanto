import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { subscribeToNewsletter, checkEmailExists } from '../src/lib/supabase';

interface NewsletterProps {
  className?: string;
}

const Newsletter: React.FC<NewsletterProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const formatPhone = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara (XX) XXXXX-XXXX
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage(t('newsletter.emailRequired'));
      setMessageType('error');
      return;
    }

    if (!validateEmail(email)) {
      setMessage(t('newsletter.emailInvalid'));
      setMessageType('error');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Verificar se email já existe
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        setMessage(t('newsletter.emailExists'));
        setMessageType('error');
        return;
      }

      // Inscrever na newsletter
      await subscribeToNewsletter({
        email: email.trim(),
        name: name.trim() || undefined,
        phone: phone.trim() || undefined,
      });

      setMessage(t('newsletter.success'));
      setMessageType('success');
      setEmail('');
      setName('');
      setPhone('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setMessage(error instanceof Error ? error.message : t('newsletter.error'));
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${className}`}>
      <h4 className="font-bold text-lg mb-4">{t('newsletter.title')}</h4>
      <p className="text-background-beige/80 text-sm mb-4">
        {t('newsletter.description')}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            placeholder={t('newsletter.namePlaceholder')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-background-beige/10 border border-background-beige/30 rounded-md text-background-beige placeholder-background-beige/60 focus:outline-none focus:border-background-beige/60 focus:bg-background-beige/20 transition-colors text-sm"
          />
        </div>
        
        <div>
          <input
            type="tel"
            placeholder={t('newsletter.phonePlaceholder')}
            value={phone}
            onChange={handlePhoneChange}
            className="w-full px-3 py-2 bg-background-beige/10 border border-background-beige/30 rounded-md text-background-beige placeholder-background-beige/60 focus:outline-none focus:border-background-beige/60 focus:bg-background-beige/20 transition-colors text-sm"
          />
        </div>
        
        <div>
          <input
            type="email"
            placeholder={t('newsletter.emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 bg-background-beige/10 border border-background-beige/30 rounded-md text-background-beige placeholder-background-beige/60 focus:outline-none focus:border-background-beige/60 focus:bg-background-beige/20 transition-colors text-sm"
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-accent-orange hover:bg-accent-orange/90 disabled:bg-accent-orange/50 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-accent-orange hover:border-orange-400"
        >
          {isLoading ? t('newsletter.subscribing') : t('newsletter.subscribe')}
        </button>
      </form>

      {message && (
        <div className={`mt-3 text-sm ${
          messageType === 'success' 
            ? 'text-green-300' 
            : 'text-red-300'
        }`}>
          {message}
        </div>
      )}

      <p className="text-xs text-background-beige/60 mt-3">
        {t('newsletter.privacy')}
      </p>
    </div>
  );
};

export default Newsletter;