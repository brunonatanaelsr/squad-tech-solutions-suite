
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

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
      image: (
        <div className="flex items-center justify-center h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-squad-primary opacity-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
          </svg>
        </div>
      )
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
      image: (
        <div className="flex items-center justify-center h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-squad-primary opacity-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        </div>
      )
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
      image: (
        <div className="flex items-center justify-center h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-squad-primary opacity-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
          </svg>
        </div>
      )
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
      image: (
        <div className="flex items-center justify-center h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-squad-primary opacity-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
          </svg>
        </div>
      )
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
      image: (
        <div className="flex items-center justify-center h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-squad-primary opacity-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
      )
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
      image: (
        <div className="flex items-center justify-center h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-squad-primary opacity-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
        </div>
      )
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
                      {solution.image}
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
