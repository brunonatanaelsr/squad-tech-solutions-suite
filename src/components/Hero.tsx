
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
                <div className="text-squad-primary font-bold text-xl mb-1">6+</div>
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
              <div className="relative bg-white shadow-xl rounded-2xl p-6 animate-float">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-squad-light rounded-lg p-4">
                    <div className="h-8 w-8 rounded-full bg-squad-primary mb-2"></div>
                    <div className="h-2 w-3/4 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
                  </div>
                  <div className="bg-squad-light rounded-lg p-4">
                    <div className="h-8 w-8 rounded-full bg-squad-secondary mb-2"></div>
                    <div className="h-2 w-3/4 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
                  </div>
                  <div className="bg-squad-light rounded-lg p-4">
                    <div className="h-8 w-8 rounded-full bg-squad-dark mb-2"></div>
                    <div className="h-2 w-3/4 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
                  </div>
                  <div className="bg-squad-light rounded-lg p-4">
                    <div className="h-8 w-8 rounded-full bg-blue-400 mb-2"></div>
                    <div className="h-2 w-3/4 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="mt-4 bg-squad-gray h-32 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-squad-primary to-squad-secondary"></div>
                  <div className="p-3">
                    <div className="h-2 w-1/4 bg-white rounded mb-2"></div>
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-squad-primary rounded-full"></div>
                      <div className="h-2 w-2 bg-squad-secondary rounded-full"></div>
                      <div className="h-2 w-2 bg-squad-dark rounded-full"></div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-16 bg-white/40 rounded"></div>
                      <div className="h-16 bg-white/40 rounded"></div>
                      <div className="h-16 bg-white/40 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 bg-squad-primary text-white p-4 rounded-xl shadow-lg">
                <div className="h-6 w-6 rounded-full bg-white mb-2 mx-auto"></div>
                <div className="h-2 w-16 bg-white/50 rounded mx-auto"></div>
              </div>
              <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 bg-squad-secondary text-white p-3 rounded-lg shadow-lg">
                <div className="h-5 w-5 rounded-full bg-white mb-2 mx-auto"></div>
                <div className="h-2 w-12 bg-white/50 rounded mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
