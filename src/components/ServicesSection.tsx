
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import das imagens SVG
import locacaoImg from '@/assets/images/locacao-equipamentos.svg';
import softwareImg from '@/assets/images/desenvolvimento-software.svg';
import hospedagemImg from '@/assets/images/hospedagem-nuvem.svg';
import automacaoImg from '@/assets/images/automacao.svg';
import consultoriaGestaoImg from '@/assets/images/consultoria-gestao.svg';
import consultoriaTiImg from '@/assets/images/consultoria-ti.svg';

const services = [
  {
    id: 'locacao',
    title: 'Locação de Equipamentos',
    description: 'Notebooks, desktops, servidores, impressoras e infraestrutura para seu negócio, com suporte técnico.',
    image: locacaoImg,
  },
  {
    id: 'software',
    title: 'Desenvolvimento de Software',
    description: 'Sistemas sob encomenda, apps, ERP, SaaS, sites e plataformas personalizadas para suas necessidades.',
    image: softwareImg,
  },
  {
    id: 'hospedagem',
    title: 'Hospedagem e Nuvem',
    description: 'Servidores, bancos de dados, soluções IaaS, PaaS, SaaS e infraestrutura segura e escalável.',
    image: hospedagemImg,
  },
  {
    id: 'automacao',
    title: 'Automação',
    description: 'Soluções para processos internos, integrações e IoT que aumentam a eficiência operacional.',
    image: automacaoImg,
  },
  {
    id: 'consultoria-gestao',
    title: 'Consultoria em Gestão',
    description: 'Estratégia, processos, inovação e eficiência para potencializar o crescimento do seu negócio.',
    image: consultoriaGestaoImg,
  },
  {
    id: 'consultoria-ti',
    title: 'Consultoria em TI',
    description: 'Transformação digital, segurança, estrutura tecnológica e suporte para sua empresa.',
    image: consultoriaTiImg,
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white" id="servicos">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nossos Serviços</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas para modernizar sua empresa e impulsionar seu crescimento com tecnologia e inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-shadow border border-gray-100">
              <CardHeader className="pb-2">
                <div className="h-24 mb-4 bg-squad-light/30 rounded-lg flex items-center justify-center p-4">
                  <img 
                    src={service.image} 
                    alt={`Ilustração de ${service.title}`} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">{service.description}</CardDescription>
                <Link 
                  to={`/servicos#${service.id}`} 
                  className="inline-flex items-center text-squad-primary hover:text-squad-dark transition-colors"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
