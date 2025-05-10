
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallToAction from '@/components/CallToAction';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  const values = [
    {
      title: "Inovação com propósito",
      description: "Tecnologia não é o fim, é o meio para gerar valor real.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      title: "Compromisso com resultados",
      description: "Atuamos lado a lado com nossos clientes, com foco em performance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Transparência e ética",
      description: "Relações sustentáveis começam com confiança e responsabilidade.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
      )
    },
    {
      title: "Crescimento contínuo",
      description: "Evoluímos com o mercado, investimos em pessoas e inovação.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      )
    },
    {
      title: "Agilidade com qualidade",
      description: "Rapidez e excelência caminham juntas nos nossos projetos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      title: "Colaboração",
      description: "Construímos soluções com escuta ativa, co-criação e trabalho em equipe.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-squad-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Sobre Nós</h1>
              <p className="text-lg text-gray-600">
                Conheça nossa história, nossa missão e como trabalhamos para transformar empresas através da tecnologia.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Quem Somos</h2>
                <p className="text-lg text-gray-700 mb-4">
                  A <span className="font-semibold">Squad Soluções Tecnológicas e Consultoria</span> é uma empresa 
                  especializada em oferecer soluções completas para empresas que buscam modernização, 
                  produtividade e segurança em suas operações.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Fundada por profissionais com mais de 15 anos de experiência no mercado de tecnologia,
                  nascemos da percepção de que muitas empresas precisam de um parceiro completo e confiável
                  para sua jornada tecnológica.
                </p>
                <p className="text-lg text-gray-700">
                  Nosso time multidisciplinar reúne especialistas em infraestrutura, desenvolvimento, 
                  segurança, gestão e negócios, proporcionando uma visão holística para cada desafio.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-squad-primary opacity-10 rounded-full blur-3xl"></div>
                <div className="bg-white rounded-xl shadow-xl p-8 relative">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-squad-dark mb-2">Nossa Missão</h3>
                    <p className="text-gray-700">
                      Oferecer soluções tecnológicas inovadoras e estratégicas, que otimizem a operação, 
                      gestão e performance dos nossos clientes, promovendo eficiência, crescimento sustentável 
                      e transformação digital por meio da locação de equipamentos, desenvolvimento de sistemas, 
                      automação e consultorias personalizadas.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-squad-dark mb-2">Nossa Visão</h3>
                    <p className="text-gray-700">
                      Ser reconhecida nacionalmente como referência em soluções tecnológicas integradas e 
                      consultoria de alto impacto, sendo parceira estratégica das empresas na jornada de 
                      inovação, digitalização e modernização de seus negócios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-squad-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nossos Valores</h2>
              <p className="text-lg text-gray-700">
                Os princípios que guiam nossas ações e decisões em todos os projetos e relações.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-squad-primary mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Brief summary */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nossa Equipe</h2>
              <p className="text-lg text-gray-700">
                Contamos com profissionais experientes e apaixonados por tecnologia, 
                focados em entregar as melhores soluções para nossos clientes.
              </p>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-squad-gray rounded-full mb-4"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 w-24 bg-gray-100 rounded"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-squad-gray rounded-full mb-4"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 w-24 bg-gray-100 rounded"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-squad-gray rounded-full mb-4"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 w-24 bg-gray-100 rounded"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-squad-gray rounded-full mb-4"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 w-24 bg-gray-100 rounded"></div>
                </div>
              </div>
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

export default AboutPage;
