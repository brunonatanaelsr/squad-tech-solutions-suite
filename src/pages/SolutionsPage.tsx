
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

// Import das imagens SVG para soluções
import infraestruturaImg from '@/assets/images/infraestrutura-servico.svg';
import softwareCorporativoImg from '@/assets/images/software-corporativo.svg';
import transformacaoDigitalImg from '@/assets/images/transformacao-digital.svg';
import nuvemHibridaImg from '@/assets/images/nuvem-hibrida.svg';
import gestaoTecnologicaImg from '@/assets/images/gestao-tecnologica.svg';
import segurancaDadosImg from '@/assets/images/seguranca-dados.svg';

const SolutionsPage = () => {
  const solutions = [
    {
      id: 'infraestrutura',
      title: 'Infraestrutura como Serviço',
      description: 'Locação de equipamentos e serviços gerenciados de TI para empresas de todos os tamanhos, reduzindo custos de capital e garantindo tecnologia sempre atualizada.',
      benefits: [
        'Transforme despesas de capital em despesas operacionais',
        'Equipamentos sempre atualizados tecnologicamente',
        'Escalabilidade conforme o crescimento da empresa',
        'Suporte técnico especializado incluído',
        'Redução de custos operacionais'
      ],
      image: infraestruturaImg
    },
    {
      id: 'software-corporativo',
      title: 'Software Corporativo Personalizado',
      description: 'Sistemas corporativos desenvolvidos sob medida para atender às necessidades específicas do seu negócio, integrando processos e aumentando a produtividade.',
      benefits: [
        'Processos otimizados para seu modelo de negócio',
        'Integração com sistemas legados',
        'Automação de tarefas repetitivas',
        'Acesso a dados em tempo real',
        'Interfaces intuitivas e fáceis de usar'
      ],
      image: softwareCorporativoImg
    },
    {
      id: 'transformacao-digital',
      title: 'Transformação Digital',
      description: 'Estratégias e implementação de digitalização completa de processos e operações, preparando sua empresa para a nova economia digital.',
      benefits: [
        'Modernização de processos de negócio',
        'Cultura digital na empresa',
        'Aumento da competitividade no mercado',
        'Melhor experiência para clientes',
        'Decisões baseadas em dados'
      ],
      image: transformacaoDigitalImg
    },
    {
      id: 'nuvem-hibrida',
      title: 'Nuvem Híbrida',
      description: 'Soluções de infraestrutura que combinam recursos locais e em nuvem para máxima flexibilidade, segurança e otimização de custos.',
      benefits: [
        'Melhor aproveitamento dos recursos existentes',
        'Alta disponibilidade para aplicações críticas',
        'Segurança de dados aprimorada',
        'Escalabilidade conforme demanda',
        'Recuperação de desastres robusta'
      ],
      image: nuvemHibridaImg
    },
    {
      id: 'gestao-tecnologica',
      title: 'Gestão Tecnológica',
      description: 'Consultoria estratégica e operacional para otimizar os recursos de TI, alinhando tecnologia aos objetivos de negócio e maximizando o retorno sobre investimento.',
      benefits: [
        'Alinhamento de TI com objetivos de negócio',
        'Redução de riscos tecnológicos',
        'Otimização de investimentos em tecnologia',
        'Governança de TI estruturada',
        'Planejamento estratégico de tecnologia'
      ],
      image: gestaoTecnologicaImg
    },
    {
      id: 'seguranca-dados',
      title: 'Segurança de Dados',
      description: 'Proteção completa para dados e sistemas críticos do seu negócio, incluindo firewalls, antivírus, monitoramento, backup e planos de recuperação.',
      benefits: [
        'Proteção contra ameaças cibernéticas',
        'Conformidade com leis e regulamentos',
        'Redução de riscos de violações de dados',
        'Continuidade de negócios garantida',
        'Resposta rápida a incidentes'
      ],
      image: segurancaDadosImg
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Nossas Soluções</h1>
              <p className="text-lg text-gray-600">
                Combinações estratégicas dos nossos serviços para resolver desafios específicos do seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <Card 
                  key={solution.id} 
                  className="hover:shadow-lg transition-shadow border-none shadow-md h-full flex flex-col"
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="h-32 mb-6 bg-squad-light rounded-lg flex items-center justify-center">
                      {typeof solution.image === 'string' ? (
                        <img 
                          src={solution.image} 
                          alt={solution.title}
                          className="h-24 w-24 object-contain"
                        />
                      ) : (
                        solution.image
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <div className="mt-auto">
                      <h4 className="font-semibold text-squad-primary mb-2">Principais benefícios:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-squad-primary mr-2 flex-shrink-0">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75" />
                            </svg>
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Não encontrou uma solução específica para seu desafio? Entre em contato para desenvolvermos uma estratégia personalizada.
              </p>
              <Button asChild className="bg-squad-primary hover:bg-squad-dark">
                <Link to="/contato">Consultoria Personalizada</Link>
              </Button>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default SolutionsPage;
