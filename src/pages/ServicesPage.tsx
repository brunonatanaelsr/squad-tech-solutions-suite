
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallToAction from '@/components/CallToAction';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Import das imagens SVG para serviços
import locacaoEquipamentosImg from '@/assets/images/locacao-equipamentos.svg';
import desenvolvimentoSoftwareImg from '@/assets/images/desenvolvimento-software.svg';
import hospedagemNuvemImg from '@/assets/images/hospedagem-nuvem.svg';
import automacaoImg from '@/assets/images/automacao.svg';
import consultoriaGestaoImg from '@/assets/images/consultoria-gestao.svg';
import consultoriaTiImg from '@/assets/images/consultoria-ti.svg';

const ServicesPage = () => {
  const services = [
    {
      id: 'locacao',
      title: 'Locação de Equipamentos',
      description: 'Disponibilizamos notebooks, desktops, servidores, impressoras e infraestrutura completa para seu negócio, com suporte técnico especializado.',
      image: locacaoEquipamentosImg,
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
      image: desenvolvimentoSoftwareImg,
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
      image: hospedagemNuvemImg,
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
      image: automacaoImg,
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
      image: consultoriaGestaoImg,
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
      image: consultoriaTiImg,
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
                    <div className="bg-squad-light rounded-xl p-4 shadow-inner">
                      <div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-contain p-4" 
                        />
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
