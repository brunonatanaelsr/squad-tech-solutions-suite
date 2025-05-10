
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallToAction from '@/components/CallToAction';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: 'locacao',
      title: 'Locação de Equipamentos',
      description: 'Disponibilizamos notebooks, desktops, servidores, impressoras e infraestrutura completa para seu negócio, com suporte técnico especializado.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      ),
      features: [
        'Equipamentos de última geração',
        'Contratos flexíveis de 12 a 48 meses',
        'Suporte técnico incluso',
        'Manutenção preventiva e corretiva',
        'Substituição rápida em caso de falhas',
        'Gestão completa do parque tecnológico'
      ]
    },
    {
      id: 'software',
      title: 'Desenvolvimento de Software',
      description: 'Criamos sistemas sob encomenda, aplicativos, ERPs, plataformas SaaS, websites e soluções digitais personalizadas para suas necessidades específicas.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
      features: [
        'Desenvolvimento ágil e eficiente',
        'Interfaces intuitivas e responsivas',
        'Arquitetura escalável e robusta',
        'Integração com sistemas existentes',
        'Manutenção e suporte contínuos',
        'Documentação completa e treinamento'
      ]
    },
    {
      id: 'hospedagem',
      title: 'Hospedagem e Nuvem',
      description: 'Oferecemos servidores, bancos de dados, soluções IaaS, PaaS, SaaS e infraestrutura em nuvem segura, escalável e de alta disponibilidade.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
        </svg>
      ),
      features: [
        'Servidores dedicados e compartilhados',
        'Ambiente cloud em data centers certificados',
        'Backup automático e redundância',
        'Monitoramento 24x7',
        'Alta disponibilidade e performance',
        'Segurança avançada contra ameaças'
      ]
    },
    {
      id: 'automacao',
      title: 'Automação',
      description: 'Implementamos soluções para automação de processos internos, integrações entre sistemas e dispositivos IoT que aumentam a eficiência operacional.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      ),
      features: [
        'Automação de processos repetitivos',
        'Integração entre sistemas',
        'Redução de erros operacionais',
        'Aumento de produtividade',
        'Dashboards e relatórios em tempo real',
        'Soluções IoT para monitoramento'
      ]
    },
    {
      id: 'consultoria-gestao',
      title: 'Consultoria em Gestão Empresarial',
      description: 'Auxiliamos com estratégia, otimização de processos, inovação e eficiência para potencializar o crescimento sustentável do seu negócio.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
        </svg>
      ),
      features: [
        'Diagnóstico empresarial completo',
        'Mapeamento e otimização de processos',
        'Implementação de metodologias ágeis',
        'Gestão de mudanças organizacionais',
        'Desenvolvimento de planos estratégicos',
        'Mentoria para lideranças'
      ]
    },
    {
      id: 'consultoria-ti',
      title: 'Consultoria em TI',
      description: 'Orientamos sua transformação digital, segurança da informação, estrutura tecnológica e suporte para maximizar o valor da TI no seu negócio.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
      features: [
        'Avaliação de infraestrutura tecnológica',
        'Implementação de governança de TI',
        'Políticas de segurança da informação',
        'Transformação digital para empresas',
        'Gestão de projetos tecnológicos',
        'Conformidade com normas e regulamentos'
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-squad-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Nossos Serviços</h1>
              <p className="text-lg text-gray-600">
                Conheça todas as soluções tecnológicas e consultivas que oferecemos para transformar e potencializar seu negócio.
              </p>
              
              <div className="mt-10">
                <img 
                  src="/lovable-uploads/000a65a5-0341-4063-8990-c45877a140ad.png" 
                  alt="Equipe de profissionais trabalhando" 
                  className="mx-auto max-w-full md:max-w-3xl h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Details Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            {services.map((service, index) => (
              <div
                id={service.id}
                key={service.id}
                className={`py-16 ${index !== 0 && 'border-t border-gray-200'}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 ? 'order-1 lg:order-2' : ''}>
                    <div className="text-squad-primary mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h2>
                    <p className="text-lg text-gray-700 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-squad-primary mr-2 flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-squad-primary hover:bg-squad-dark">
                      <Link to="/contato">
                        Solicitar proposta
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 ? 'order-2 lg:order-1' : ''}>
                    <div className="bg-squad-light rounded-xl p-8 shadow-inner">
                      <div className="aspect-video bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                        {index % 3 === 0 ? (
                          <img 
                            src="/lovable-uploads/000a65a5-0341-4063-8990-c45877a140ad.png" 
                            alt={service.title}
                            className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                          />
                        ) : (
                          <div className="text-4xl text-squad-primary opacity-30">
                            {service.icon}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ServicesPage;
