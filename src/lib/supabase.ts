import { createClient } from '@supabase/supabase-js';

// Configurações do Supabase
// IMPORTANTE: Substitua pelas suas credenciais reais do Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://nvewukpxqbohwonymiyl.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52ZXd1a3B4cWJvaHdvbnltaXlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODgxODI2MywiZXhwIjoyMDc0Mzk0MjYzfQ.wqfjM1luCnZTXWLvjahPFlrj6Af22cWaaBkNN_MZ1cc';

// Debug: verificar se as variáveis estão sendo carregadas
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key exists:', !!supabaseAnonKey);

// Criar cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para a newsletter
export interface NewsletterSubscriber {
  id?: string;
  email: string;
  name?: string;
  phone?: string;
  interests?: string[];
  created_at?: string;
  is_active?: boolean;
}

// Função para inscrever na newsletter
export const subscribeToNewsletter = async (data: Omit<NewsletterSubscriber, 'id' | 'created_at' | 'is_active'>) => {
  try {
    const { data: result, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          ...data,
          is_active: true,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      // Se for erro de duplicata (email já existe)
      if (error.code === '23505') {
        throw new Error('Este email já está cadastrado em nossa newsletter.');
      }
      throw new Error(error.message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

// Função para verificar se email já existe
export const checkEmailExists = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('email', email)
      .eq('is_active', true)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw new Error(error.message);
    }

    return !!data;
  } catch (error) {
    return false;
  }
};