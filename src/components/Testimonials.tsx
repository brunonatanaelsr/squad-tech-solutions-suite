
import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "A Squad transformou nossa infraestrutura de TI com soluções inovadoras. Reduzimos custos e aumentamos significativamente nossa produtividade.",
    author: "Carlos Silva",
    position: "Diretor de Tecnologia, TechCorp"
  },
  {
    id: 2,
    text: "O sistema desenvolvido pela Squad automatizou nossos processos internos e nos ajudou a crescer mais de 30% no último ano.",
    author: "Mariana Oliveira",
    position: "CEO, Inovabiz"
  },
  {
    id: 3,
    text: "A consultoria estratégica da Squad foi fundamental para nossa transformação digital. Recomendo seus serviços sem hesitação.",
    author: "Ricardo Mendes",
    position: "Gerente de Projetos, Global Solutions"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">O que nossos clientes dizem</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça a experiência de quem já transformou seu negócio com nossas soluções.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-squad-light rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-4">"{testimonial.text}"</blockquote>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-squad-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
