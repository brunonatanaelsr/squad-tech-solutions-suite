
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Import das imagens SVG para blog
import automationHero from '@/assets/images/blog/automation-hero.svg';
import securityHero from '@/assets/images/blog/security-hero.svg';
import digitalTransformationHero from '@/assets/images/blog/digital-transformation-hero.svg';
import rentalHero from '@/assets/images/blog/rental-hero.svg';
import erpHero from '@/assets/images/blog/erp-hero.svg';
import cloudHero from '@/assets/images/blog/cloud-hero.svg';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Como a automação pode reduzir custos operacionais',
      excerpt: 'Descubra como implementar soluções de automação que podem reduzir significativamente os custos operacionais da sua empresa.',
      date: '10 de maio, 2025',
      category: 'Automação',
      image: <img src={automationHero} alt="Automação" className="w-full h-48 object-cover rounded-t-lg" />
    },
    {
      id: 2,
      title: 'Melhores práticas para segurança de dados empresariais',
      excerpt: 'Proteja informações sensíveis da sua empresa com estas estratégias essenciais de segurança de dados para pequenas e médias empresas.',
      date: '28 de abril, 2025',
      category: 'Segurança',
      image: <img src={securityHero} alt="Segurança" className="w-full h-48 object-cover rounded-t-lg" />
    },
    {
      id: 3,
      title: 'Transformação digital: por onde começar',
      excerpt: 'Um guia passo a passo para iniciar a jornada de transformação digital na sua empresa, mesmo com recursos limitados.',
      date: '15 de abril, 2025',
      category: 'Transformação Digital',
      image: <img src={digitalTransformationHero} alt="Transformação Digital" className="w-full h-48 object-cover rounded-t-lg" />
    },
    {
      id: 4,
      title: 'Vantagens da locação de equipamentos vs. compra',
      excerpt: 'Uma análise detalhada dos prós e contras entre alugar ou comprar equipamentos de TI para o seu negócio.',
      date: '3 de abril, 2025',
      category: 'Locação',
      image: <img src={rentalHero} alt="Locação" className="w-full h-48 object-cover rounded-t-lg" />
    },
    {
      id: 5,
      title: 'Como escolher o melhor sistema ERP para sua empresa',
      excerpt: 'Critérios essenciais para avaliar e selecionar a solução de ERP mais adequada às necessidades do seu negócio.',
      date: '25 de março, 2025',
      category: 'Software',
      image: <img src={erpHero} alt="Software ERP" className="w-full h-48 object-cover rounded-t-lg" />
    },
    {
      id: 6,
      title: 'Infraestrutura em nuvem: desmistificando conceitos',
      excerpt: 'Entenda de forma simplificada os principais conceitos de computação em nuvem e como aplicá-los no seu negócio.',
      date: '12 de março, 2025',
      category: 'Cloud',
      image: <img src={cloudHero} alt="Cloud Computing" className="w-full h-48 object-cover rounded-t-lg" />
    }
  ];

  const categories = [
    'Todos', 'Automação', 'Segurança', 'Transformação Digital', 'Locação', 'Software', 'Cloud'
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-squad-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Blog</h1>
              <p className="text-lg text-gray-600">
                Artigos, notícias e insights sobre tecnologia, gestão e inovação para seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-6 overflow-x-auto">
            <div className="flex space-x-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-squad-primary hover:bg-squad-dark" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md">
                  {post.image}
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-squad-primary font-medium">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="inline-flex items-center text-squad-primary hover:text-squad-dark transition-colors"
                    >
                      <span>Ler mais</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-squad-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Receba novos conteúdos</h2>
              <p className="text-lg text-gray-700 mb-8">
                Inscreva-se para receber artigos, dicas e novidades sobre tecnologia empresarial diretamente no seu e-mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="flex-grow rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-squad-primary"
                />
                <Button className="bg-squad-primary hover:bg-squad-dark">
                  Inscrever-se
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BlogPage;
