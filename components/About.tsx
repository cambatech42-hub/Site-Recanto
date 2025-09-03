
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-80 md:h-full overflow-hidden rounded-lg shadow-xl">
            <img src="https://picsum.photos/seed/pousada-about/800/600" alt="Fachada da Pousada Recanto do Lago" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-primary-green mb-6">
              Nossa História123
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Aninhada no coração de Cambará do Sul, a Pousada Recanto do Lago nasceu do sonho de compartilhar a beleza estonteante da Serra Gaúcha. Oferecemos um refúgio de paz e conforto, onde cada detalhe é pensado para proporcionar uma experiência autêntica e inesquecível.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aqui, a hospitalidade calorosa se une à natureza exuberante. Nossos hóspedes podem relaxar à beira do lago, explorar paisagens de tirar o fôlego e criar memórias que durarão para sempre. Venha viver a magia dos cânions conosco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
