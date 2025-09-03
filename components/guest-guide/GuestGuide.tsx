import React from 'react';
import { GUIDE_SECTIONS } from '../../guideConstants';
import { InstagramIcon, StarIcon } from './icons';
import GuideSection from './GuideSection';
import GuideAccordion from './GuideAccordion';

const GuestGuide: React.FC = () => {
    return (
        <div className="bg-background-beige min-h-screen font-sans text-dark-text app-guide-page">
            <header 
              className="h-64 bg-cover bg-center flex flex-col justify-end p-6 text-white"
              style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('https://i.imgur.com/uG9Gk3L.jpeg')" }} // Placeholder from PDF
            >
                <h1 className="text-sm font-bold tracking-widest uppercase">Guia de Boas-Vindas</h1>
                <h2 className="text-4xl font-serif font-bold mt-1">Pousada Recanto do Lago</h2>
                <p className="text-sm mt-2">Cabanas em área rural • simplicidade • conforto • natureza</p>
            </header>

            <main className="p-4 pb-20">
                <div className="space-y-4">
                    {GUIDE_SECTIONS.map((section) => {
                        if (section.isAccordion) {
                            return <GuideAccordion key={section.id} title={section.title} Icon={section.Icon} sections={section.content as any} />;
                        }
                        return <GuideSection key={section.id} section={section} />;
                    })}

                    {/* Final Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="flex justify-center text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-8 h-8"/>)}
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-primary-green mb-2">Sua avaliação é importante!</h3>
                        <p className="text-gray-600 mb-6">Esperamos que você tenha uma ótima estadia conosco! Ficaremos muito agradecidos se você puder deixar uma avaliação!</p>

                        <h3 className="text-2xl font-serif font-bold text-primary-green mb-4">Acompanhe-nos</h3>
                        <div className="flex flex-col items-center space-y-3">
                             <a href="https://www.instagram.com/pousadarecantodolago" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition-opacity">
                                <InstagramIcon className="w-5 h-5 mr-2" />
                                Siga @pousadarecantodolago
                            </a>
                            <p className="text-gray-600">Marque a hashtag <strong className="text-primary-green">#recantodolagopousada</strong></p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-4xl font-serif font-bold text-dark-text">Obrigado!</h3>
                            <p className="text-accent-gold font-serif text-lg">Volte em breve!</p>
                        </div>
                    </div>
                </div>
            </main>
             <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-3 text-center border-t border-gray-200">
                <p className="text-xs text-gray-500">
                    Pousada Recanto do Lago • Estrada da Reserva, 200, Rural, Cambará do Sul -RS
                </p>
            </footer>
        </div>
    );
};

export default GuestGuide;
