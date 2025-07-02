import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import automationHero from '@/assets/images/blog/automation-hero.svg';

const AutomationArticle = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-r from-squad-primary to-squad-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="mb-4">
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors">
                  ← Voltar ao Blog
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Como a automação pode reduzir custos operacionais
              </h1>
              <div className="flex justify-center items-center gap-4 text-white/80">
                <span>10 de maio, 2025</span>
                <span>•</span>
                <span>Automação</span>
                <span>•</span>
                <span>Leitura de 5 min</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <div className="mb-12">
                <img 
                  src={automationHero} 
                  alt="Automação empresarial" 
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Article Text */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  A automação empresarial não é mais um luxo, mas uma necessidade para empresas que buscam permanecer competitivas no mercado atual. Com a <strong>Squad Soluções</strong>, você pode implementar soluções de automação que reduzem significativamente seus custos operacionais.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">O que é automação empresarial?</h2>
                
                <p className="mb-6">
                  A automação empresarial envolve o uso de tecnologia para executar tarefas repetitivas e processos de negócio com mínima intervenção humana. Isso inclui desde automação de processos administrativos até sistemas avançados de gestão de estoque e atendimento ao cliente.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Principais benefícios da automação</h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Redução de custos operacionais</h3>
                <p className="mb-6">
                  A automação pode reduzir custos operacionais em até 40% em algumas áreas. Isso ocorre através da:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Diminuição de erros humanos que geram retrabalho</li>
                  <li>Redução do tempo gasto em tarefas repetitivas</li>
                  <li>Otimização do uso de recursos</li>
                  <li>Menor necessidade de supervisão constante</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Aumento da produtividade</h3>
                <p className="mb-6">
                  Com processos automatizados, sua equipe pode focar em atividades estratégicas de maior valor agregado, aumentando a produtividade geral da empresa.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Melhoria na qualidade</h3>
                <p className="mb-6">
                  Sistemas automatizados seguem padrões rigorosos, garantindo consistência e qualidade superior em todos os processos.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Áreas prioritárias para automação</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-squad-light p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3">Processos Administrativos</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Emissão de relatórios</li>
                      <li>• Processamento de faturas</li>
                      <li>• Gestão de documentos</li>
                    </ul>
                  </div>
                  <div className="bg-squad-light p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3">Atendimento ao Cliente</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Chatbots inteligentes</li>
                      <li>• Sistemas de ticket</li>
                      <li>• Respostas automáticas</li>
                    </ul>
                  </div>
                  <div className="bg-squad-light p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3">Gestão de Estoque</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Controle automático</li>
                      <li>• Reposição inteligente</li>
                      <li>• Alertas de baixo estoque</li>
                    </ul>
                  </div>
                  <div className="bg-squad-light p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3">Marketing Digital</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Campanhas automáticas</li>
                      <li>• Segmentação de leads</li>
                      <li>• Nutrição de prospects</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Como implementar automação na sua empresa</h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Passo 1: Diagnóstico completo</h3>
                <p className="mb-6">
                  A <strong>Squad Soluções</strong> realiza uma análise detalhada dos seus processos atuais, identificando gargalos e oportunidades de automação com maior potencial de retorno sobre investimento.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Passo 2: Planejamento estratégico</h3>
                <p className="mb-6">
                  Desenvolvemos um plano de implementação faseado, priorizando processos que trarão resultados mais rápidos e significativos para sua empresa.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Passo 3: Implementação e treinamento</h3>
                <p className="mb-6">
                  Nossa equipe especializada implementa as soluções de automação e treina sua equipe para operá-las de forma eficiente.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Passo 4: Monitoramento e otimização</h3>
                <p className="mb-6">
                  Acompanhamos os resultados e fazemos ajustes contínuos para garantir máxima eficiência e retorno do investimento.
                </p>

                <div className="bg-gradient-to-r from-squad-primary to-squad-dark text-white p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4">Casos de sucesso da Squad Soluções</h3>
                  <p className="mb-4">
                    Nossos clientes têm alcançado resultados impressionantes com automação:
                  </p>
                  <ul className="space-y-2">
                    <li>• <strong>Empresa A:</strong> Reduziu 35% dos custos administrativos em 6 meses</li>
                    <li>• <strong>Empresa B:</strong> Aumentou produtividade em 50% com automação de processos</li>
                    <li>• <strong>Empresa C:</strong> Eliminou 90% dos erros manuais em faturamento</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">ROI da automação empresarial</h2>
                
                <p className="mb-6">
                  O retorno sobre investimento em automação é significativo. Empresas que investem em automação com a <strong>Squad Soluções</strong> geralmente veem:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center bg-squad-light p-6 rounded-lg">
                    <div className="text-3xl font-bold text-squad-primary mb-2">25-40%</div>
                    <div className="text-gray-700">Redução de custos operacionais</div>
                  </div>
                  <div className="text-center bg-squad-light p-6 rounded-lg">
                    <div className="text-3xl font-bold text-squad-primary mb-2">6-12</div>
                    <div className="text-gray-700">Meses para retorno do investimento</div>
                  </div>
                  <div className="text-center bg-squad-light p-6 rounded-lg">
                    <div className="text-3xl font-bold text-squad-primary mb-2">50-80%</div>
                    <div className="text-gray-700">Aumento na produtividade</div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Por que escolher a Squad Soluções?</h2>

                <p className="mb-6">
                  Com mais de <strong>9 anos no mercado</strong>, a Squad Soluções é especialista em transformação digital e automação empresarial. Oferecemos:
                </p>

                <ul className="list-disc list-inside mb-8 space-y-3">
                  <li><strong>Consultoria especializada:</strong> Análise detalhada dos seus processos atuais</li>
                  <li><strong>Soluções personalizadas:</strong> Desenvolvimento sob medida para suas necessidades</li>
                  <li><strong>Implementação gradual:</strong> Minimizamos riscos com implementação faseada</li>
                  <li><strong>Suporte contínuo:</strong> Acompanhamento completo pós-implementação</li>
                  <li><strong>Treinamento da equipe:</strong> Capacitação completa para uso das novas tecnologias</li>
                  <li><strong>ROI garantido:</strong> Foco em resultados mensuráveis e retorno do investimento</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusão</h2>

                <p className="mb-6">
                  A automação empresarial é fundamental para reduzir custos operacionais e manter a competitividade no mercado atual. Com a experiência e expertise da <strong>Squad Soluções</strong>, sua empresa pode implementar soluções de automação eficientes e obter resultados significativos em pouco tempo.
                </p>

                <p className="mb-8">
                  Não perca mais tempo com processos manuais custosos e ineficientes. Invista em automação e transforme sua operação com a Squad Soluções.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <section className="py-16 bg-squad-light">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="max-w-4xl mx-auto bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pronto para automatizar sua empresa?
                </h3>
                <p className="text-gray-600 mb-6">
                  Agende uma consultoria gratuita e descubra como a Squad Soluções pode reduzir seus custos operacionais com automação.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-squad-primary hover:bg-squad-dark"
                    onClick={() => window.open('https://wa.me/5585985100928?text=Olá! Gostaria de agendar uma consultoria gratuita sobre automação empresarial.', '_blank')}
                  >
                    Agendar Consultoria Gratuita
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://wa.me/5585985100928?text=Olá! Gostaria de falar com um especialista sobre automação empresarial.', '_blank')}
                  >
                    Falar com Especialista
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Artigos relacionados</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">
                      <Link to="/blog/2" className="hover:text-squad-primary transition-colors">
                        Melhores práticas para segurança de dados empresariais
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Proteja informações sensíveis da sua empresa com estratégias essenciais de segurança.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">
                      <Link to="/blog/3" className="hover:text-squad-primary transition-colors">
                        Transformação digital: por onde começar
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Um guia passo a passo para iniciar a jornada de transformação digital na sua empresa.
                    </p>
                  </CardContent>
                </Card>
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

export default AutomationArticle;
