
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-squad-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full h-full absolute -bottom-6 -right-6 border-2 border-squad-primary rounded-xl"></div>
              <div className="bg-white p-6 rounded-xl shadow-lg relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-squad-gray rounded-lg">
                    <div className="text-squad-primary mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">Missão</h4>
                    <p className="text-sm text-gray-600 mt-1">Oferecer soluções tecnológicas inovadoras e estratégicas.</p>
                  </div>
                  <div className="p-4 border border-squad-gray rounded-lg">
                    <div className="text-squad-primary mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">Visão</h4>
                    <p className="text-sm text-gray-600 mt-1">Ser referência nacional em soluções tecnológicas.</p>
                  </div>
                  <div className="col-span-2 p-4 border border-squad-gray rounded-lg">
                    <div className="text-squad-primary mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">Valores</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                      <span className="text-xs bg-squad-light text-squad-dark px-2 py-1 rounded-full">Inovação</span>
                      <span className="text-xs bg-squad-light text-squad-dark px-2 py-1 rounded-full">Compromisso</span>
                      <span className="text-xs bg-squad-light text-squad-dark px-2 py-1 rounded-full">Transparência</span>
                      <span className="text-xs bg-squad-light text-squad-dark px-2 py-1 rounded-full">Ética</span>
                      <span className="text-xs bg-squad-light text-squad-dark px-2 py-1 rounded-full">Qualidade</span>
                      <span className="text-xs bg-squad-light text-squad-dark px-2 py-1 rounded-full">Colaboração</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Quem Somos</h2>
            <p className="text-lg text-gray-700 mb-6">
              A <span className="font-semibold">Squad Soluções Tecnológicas e Consultoria</span> é uma empresa 
              especializada em oferecer soluções completas para empresas que buscam modernização, 
              produtividade e segurança em suas operações.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Unimos locação de equipamentos, desenvolvimento de sistemas, automação, cloud, 
              hospedagem e consultoria em uma única estrutura, com atendimento personalizado, 
              técnico e estratégico.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Nossa proposta é ser um parceiro de crescimento para negócios de todos os portes, 
              ajudando-os a atingir seus objetivos com tecnologia e inteligência de negócio.
            </p>
            <Button asChild className="bg-squad-primary hover:bg-squad-dark">
              <Link to="/sobre">Conheça nossa história</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
