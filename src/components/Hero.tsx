
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white to-squad-light min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transformação Digital para o seu <span className="text-squad-primary">Negócio</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Oferecemos soluções tecnológicas inovadoras e estratégicas, que otimizem a 
                operação, gestão e performance dos nossos clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-squad-primary hover:bg-squad-dark">
                  <Link to="/contato">
                    Fale com um especialista
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-squad-primary text-squad-primary hover:bg-squad-light">
                  <Link to="/servicos">
                    Conheça nossos serviços
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-squad-primary font-bold text-xl mb-1">7+</div>
                <div className="text-gray-600 text-sm">Anos no mercado</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-squad-primary font-bold text-xl mb-1">200+</div>
                <div className="text-gray-600 text-sm">Clientes atendidos</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-squad-primary font-bold text-xl mb-1">98%</div>
                <div className="text-gray-600 text-sm">Satisfação</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-squad-secondary opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Tecnologia moderna" 
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="Desenvolvimento de software" 
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                    alt="Soluções tecnológicas" 
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                    alt="Consultoria empresarial" 
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 bg-squad-primary text-white p-4 rounded-xl shadow-lg">
                <div className="text-lg font-bold">7+ anos</div>
                <div className="text-sm">de experiência</div>
              </div>
              <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 bg-squad-secondary text-white p-3 rounded-lg shadow-lg">
                <div className="text-lg font-bold">Inovação</div>
                <div className="text-xs">& Tecnologia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
