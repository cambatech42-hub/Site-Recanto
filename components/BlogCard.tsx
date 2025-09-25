import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BlogPost } from '../types';
import { Calendar, Clock, Tag } from 'lucide-react';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    const { t } = useTranslation();

    // Função para obter traduções dos posts do blog
    const getBlogTranslation = (postId: string, field: 'title' | 'excerpt' | 'content') => {
        return t(`blogData.${postId}.${field}`, { defaultValue: '' });
    };
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'passeios':
                return 'bg-green-100 text-green-800';
            case 'dicas':
                return 'bg-blue-100 text-blue-800';
            case 'eventos':
                return 'bg-purple-100 text-purple-800';
            case 'curiosidades':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getCategoryLabel = (category: string) => {
        switch (category) {
            case 'passeios':
                return t('blog.categories.tours');
            case 'dicas':
                return t('blog.categories.tips');
            case 'eventos':
                return t('blog.categories.events');
            case 'curiosidades':
                return t('blog.categories.curiosities');
            default:
                return category;
        }
    };

    return (
        <Link to={`/blog/${post.id}`} className="block">
            <article 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
            <div className="relative overflow-hidden">
                <img 
                    src={post.image} 
                    alt={getBlogTranslation(post.id, 'title') || post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                        {getCategoryLabel(post.category)}
                    </span>
                </div>
            </div>
            
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                    {getBlogTranslation(post.id, 'title') || post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {getBlogTranslation(post.id, 'excerpt') || post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime} min de leitura</span>
                        </div>
                    </div>
                </div>
                
                {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center space-x-2">
                        <Tag className="w-4 h-4 text-gray-400" />
                        <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag, index) => (
                                <span 
                                    key={index}
                                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                                >
                                    {tag}
                                </span>
                            ))}
                            {post.tags.length > 3 && (
                                <span className="text-xs text-gray-500">
                                    +{post.tags.length - 3} mais
                                </span>
                            )}
                        </div>
                    </div>
                )}
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-green-600 font-medium text-sm group-hover:text-green-700 transition-colors duration-200">
                        Ler mais →
                    </span>
                </div>
            </div>
        </article>
    </Link>
);
};

export default BlogCard;