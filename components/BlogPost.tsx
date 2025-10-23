import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { BlogPost as BlogPostType } from '../types';
import { BLOG_POSTS } from '../constants';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import BlogCard from './BlogCard';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { t } = useTranslation();
    
    const post = BLOG_POSTS.find(p => p.id === id);

    // Função para obter traduções dos posts do blog
    const getBlogTranslation = (postId: string, field: 'title' | 'excerpt' | 'content') => {
        return t(`blogData.${postId}.${field}`, { defaultValue: '' });
    };

    // Scroll para o topo quando o componente é montado ou o ID muda
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    
    if (!post) {
        return (
            <div className="min-h-screen bg-background-beige">
                <Header />
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('blog.postNotFound')}</h1>
                    <p className="text-gray-600 mb-8">{t('blog.postNotFoundDescription')}</p>
                    <button 
                        onClick={() => navigate('/')}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                        {t('blog.backToHome')}
                    </button>
                </div>
                <Footer />
            </div>
        );
    }

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

    const handleShare = async () => {
        const url = window.location.href;
        const title = post.title;
        
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    url: url,
                });
            } catch (error) {
                // Fallback para copiar URL
                navigator.clipboard.writeText(url);
                alert(t('blog.linkCopied'));
            }
        } else {
            // Fallback para navegadores que não suportam Web Share API
            navigator.clipboard.writeText(url);
            alert(t('blog.linkCopied'));
        }
    };

    const handleViewAllPosts = () => {
        navigate('/');
        // Aguarda um pequeno delay para garantir que a navegação aconteça antes do scroll
        setTimeout(() => {
            document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="min-h-screen bg-background-beige">
            <Header />
            
            <article className="container mx-auto px-4 pt-28 md:pt-32 pb-8 max-w-4xl">
                {/* Botão Voltar */}
                <button 
                    onClick={() => navigate('/')}
                    className="flex items-center space-x-2 text-green-600 hover:text-green-700 mb-8 transition-colors duration-200"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>{t('blog.backToBlog')}</span>
                </button>

                {/* Cabeçalho do Post */}
                <header className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide ${getCategoryColor(post.category)}`}>
                            {getCategoryLabel(post.category)}
                        </span>
                        <button 
                            onClick={handleShare}
                            className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-200 bg-gray-50 px-4 py-2 rounded-full hover:bg-green-50"
                        >
                            <Share2 className="w-5 h-5" />
                            <span className="font-medium">{t('blog.share')}</span>
                        </button>
                    </div>
                    
                    <h1 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
                        {getBlogTranslation(post.id, 'title') || post.title}
                    </h1>
                    
                    <div className="flex items-center space-x-8 text-gray-600 mb-8 text-lg">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="font-medium">{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Clock className="w-5 h-5 text-blue-600" />
                            </div>
                            <span className="font-medium">{post.readTime} {t('blog.readTime')}</span>
                        </div>
                    </div>
                    
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                <Tag className="w-5 h-5 text-purple-600" />
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {post.tags.map((tag, index) => (
                                    <span 
                                        key={index}
                                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm rounded-full font-medium hover:from-green-100 hover:to-green-200 hover:text-green-800 transition-all duration-200"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </header>

                {/* Imagem Principal */}
                <div className="mb-12">
                    <img 
                        src={post.image} 
                        alt={getBlogTranslation(post.id, 'title') || post.title}
                        className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                    />
                </div>

                {/* Conteúdo do Post */}
                <article className="blog-content">
                    <div 
                        dangerouslySetInnerHTML={{ __html: getBlogTranslation(post.id, 'content') || post.content }}
                        className="blog-text"
                    />
                </article>

                <style>{`
                    .blog-content {
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        line-height: 1.8;
                        color: #374151;
                        max-width: none;
                    }

                    .blog-text :global(h1) {
                        font-size: 2.5rem;
                        font-weight: 800;
                        color: #111827;
                        margin: 3rem 0 1.5rem 0;
                        line-height: 1.2;
                        letter-spacing: -0.025em;
                    }

                    .blog-text :global(h2) {
                        font-size: 2rem;
                        font-weight: 700;
                        color: #1f2937;
                        margin: 2.5rem 0 1.25rem 0;
                        line-height: 1.3;
                        position: relative;
                        padding-left: 2rem;
                        counter-increment: section;
                    }

                    .blog-text :global(h2::before) {
                        content: counter(section, decimal);
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 1.5rem;
                        height: 1.5rem;
                        background: linear-gradient(135deg, #10b981, #059669);
                        color: white;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 0.875rem;
                        font-weight: 600;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    }

                    .blog-text :global(h3) {
                        font-size: 1.5rem;
                        font-weight: 600;
                        color: #374151;
                        margin: 2rem 0 1rem 0;
                        line-height: 1.4;
                    }

                    .blog-text :global(p) {
                        font-size: 1.125rem;
                        line-height: 1.8;
                        margin: 1.5rem 0;
                        color: #4b5563;
                        text-align: justify;
                    }

                    .blog-text :global(img) {
                        width: 100%;
                        height: auto;
                        border-radius: 1rem;
                        margin: 2.5rem 0;
                        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }

                    .blog-text :global(img:hover) {
                        transform: translateY(-4px);
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    }

                    .blog-text :global(ul), .blog-text :global(ol) {
                        margin: 1.5rem 0;
                        padding-left: 2rem;
                        font-size: 1.125rem;
                        line-height: 1.7;
                    }

                    .blog-text :global(li) {
                        margin: 0.75rem 0;
                        color: #4b5563;
                    }

                    .blog-text :global(ul li) {
                        position: relative;
                        list-style: none;
                        padding-left: 1.5rem;
                    }

                    .blog-text :global(ul li::before) {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0.75rem;
                        width: 0.375rem;
                        height: 0.375rem;
                        background: linear-gradient(135deg, #10b981, #059669);
                        border-radius: 50%;
                    }

                    .blog-text :global(blockquote) {
                        border-left: 4px solid #10b981;
                        background: linear-gradient(135deg, #f0fdf4, #ecfdf5);
                        padding: 1.5rem 2rem;
                        margin: 2rem 0;
                        font-style: italic;
                        font-size: 1.125rem;
                        line-height: 1.7;
                        color: #065f46;
                        border-radius: 0 0.75rem 0.75rem 0;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    }

                    .blog-text :global(strong) {
                        font-weight: 600;
                        color: #111827;
                    }

                    .blog-text :global(a) {
                        color: #10b981;
                        text-decoration: none;
                        font-weight: 500;
                        border-bottom: 1px solid transparent;
                        transition: all 0.2s ease;
                    }

                    .blog-text :global(a:hover) {
                        color: #059669;
                        border-bottom-color: #059669;
                    }

                    .blog-content {
                        counter-reset: section;
                    }
                `}</style>

                {/* Call to Action */}
                <div className="mt-16 mb-12">
                    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 border border-green-100 shadow-xl">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                Pronto para sua próxima aventura?
                            </h3>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Descubra as maravilhas de Cambará do Sul e crie memórias inesquecíveis no Recanto do Lago. 
                                Entre em contato conosco ou faça sua reserva agora mesmo!
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a
                                href="https://hotels.cloudbeds.com/reservas/HgoiJE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 min-w-[200px] justify-center"
                            >
                                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Reservar Agora</span>
                            </a>
                            
                            <a
                                href="https://wa.me/5554999300535"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 min-w-[200px] justify-center"
                            >
                                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                </svg>
                                <span>Fale Conosco</span>
                            </a>
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-green-200">
                            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="font-medium">Cancelamento gratuito</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-medium">{t('blog.instantConfirmation')}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <span className="font-medium">{t('blog.personalizedService')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rodapé do Post */}
                <footer className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                            {t('blog.publishedOn')} {formatDate(post.date)}
                        </div>
                        <button 
                            onClick={handleShare}
                            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                        >
                            <Share2 className="w-4 h-4" />
                            <span>{t('blog.share')}</span>
                        </button>
                    </div>
                </footer>
            </article>

            {/* Seção de Posts Relacionados */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                        {t('blog.continueReading')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('blog.continueReadingDescription')}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS
                        .filter(blogPost => blogPost.id !== post.id) // Exclui o post atual
                        .slice(0, 3) // Mostra apenas 3 posts relacionados
                        .map(blogPost => (
                            <BlogCard key={blogPost.id} post={blogPost} />
                        ))
                    }
                </div>
                
                <div className="text-center mt-12">
                    <button 
                        onClick={handleViewAllPosts}
                        className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold"
                    >
                        {t('blog.viewAllPosts')}
                    </button>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default BlogPost;