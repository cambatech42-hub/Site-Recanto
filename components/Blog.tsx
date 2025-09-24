import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import BlogCard from '@/components/BlogCard';
import Button from './ui/Button';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'passeios', name: 'Passeios' },
    { id: 'dicas', name: 'Dicas' },
    { id: 'eventos', name: 'Eventos' },
    { id: 'curiosidades', name: 'Curiosidades' }
  ];

  const filteredPosts = selectedCategory === 'todos' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      passeios: 'bg-blue-100 text-blue-800',
      dicas: 'bg-green-100 text-green-800',
      eventos: 'bg-purple-100 text-purple-800',
      curiosidades: 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog Recanto do Lago
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra as maravilhas de Cambará do Sul: dicas de passeios, eventos locais, 
            curiosidades da região e muito mais para tornar sua estadia inesquecível.
          </p>
        </div>

        {/* Filtros de categoria */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum post encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;