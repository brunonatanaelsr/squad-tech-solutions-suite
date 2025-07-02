import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import digitalTransformationHero from '@/assets/images/blog/digital-transformation-hero.svg';

const DigitalTransformationArticle = () => {
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
                Transformação digital: por onde começar
              </h1>
              <div className="flex justify-center items-center gap-4 text-white/80">
                <span>15 de abril, 2025</span>
                <span>•</span>
                <span>Transformação Digital</span>
                <span>•</span>
                <span>Leitura de 7 min</span>
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
                  src={digitalTransformationHero} 
                  alt="Transformação digital empresarial" 
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Article Text */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  A transformação digital não é mais uma opção, é uma necessidade para empresas que querem permanecer competitivas. Com a <strong>Squad Soluções</strong>, sua empresa pode iniciar essa jornada de forma estratégica e eficiente, mesmo com recursos limitados.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">O que é transformação digital?</h2>
                
                <p className="mb-6">
                  Transformação digital é o processo de integração de tecnologias digitais em todas as áreas de um negócio, mudando fundamentalmente como você opera e entrega valor aos clientes. É também uma mudança cultural que exige que as organizações desafiem constantemente o status quo.
                </p>

                <div className="bg-squad-light p-8 rounded-lg mb-8">
                  <h4 className="text-xl font-semibold mb-4">Transformação digital vai além da tecnologia</h4>
                  <p className="mb-4">É uma mudança que envolve:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Cultura organizacional e mindset</li>
                    <li>Processos de negócio otimizados</li>
                    <li>Experiência do cliente aprimorada</li>
                    <li>Novos modelos de negócio</li>
                    <li>Tecnologias habilitadoras</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Por que sua empresa precisa se transformar?</h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dados que não mentem</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center bg-red-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">70%</div>
                    <div className="text-gray-700">das empresas que não se digitalizaram fecharam durante a pandemia</div>
                  </div>
                  <div className="text-center bg-green-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                    <div className="text-gray-700">aumento na produtividade com transformação digital</div>
                  </div>
                  <div className="text-center bg-blue-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                    <div className="text-gray-700">melhoria na satisfação do cliente</div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Benefícios da transformação digital</h3>
                <ul className="list-disc list-inside mb-8 space-y-3">
                  <li><strong>Maior eficiência operacional:</strong> Automação de processos reduz custos e tempo</li>
                  <li><strong>Melhor experiência do cliente:</strong> Atendimento mais rápido e personalizado</li>
                  <li><strong>Tomada de decisão baseada em dados:</strong> Insights precisos para estratégias</li>
                  <li><strong>Vantagem competitiva:</strong> Diferenciação no mercado através da inovação</li>
                  <li><strong>Escalabilidade:</strong> Crescimento sustentável com tecnologia</li>
                  <li><strong>Adaptabilidade:</strong> Resposta rápida a mudanças do mercado</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Passo a passo para iniciar a transformação</h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fase 1: Diagnóstico e planejamento estratégico</h3>
                
                <div className="bg-white border-l-4 border-squad-primary p-6 mb-6">
                  <h4 className="font-semibold mb-3">O que a Squad Soluções faz nesta fase:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Avaliação completa dos processos atuais</li>
                    <li>• Identificação de gargalos e oportunidades</li>
                    <li>• Definição de objetivos e KPIs</li>
                    <li>• Criação de roadmap personalizado</li>
                    <li>• Análise de recursos disponíveis</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fase 2: Implementação de fundamentos digitais</h3>

                <p className="mb-6">
                  Antes de avançar para soluções complexas, é essencial estabelecer uma base sólida:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-squad-light p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">Infraestrutura de TI</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Migração para nuvem</li>
                      <li>• Backup automatizado</li>
                      <li>• Segurança cibernética</li>
                      <li>• Conectividade confiável</li>
                    </ul>
                  </div>
                  <div className="bg-squad-light p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">Sistemas Básicos</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• ERP integrado</li>
                      <li>• CRM para clientes</li>
                      <li>• Ferramentas de comunicação</li>
                      <li>• Plataforma de e-commerce</li>
                    </ul>
                  </div>
                  <div className="bg-squad-light p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">Processos Digitais</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Documentação eletrônica</li>
                      <li>• Fluxos de aprovação</li>
                      <li>• Assinatura digital</li>
                      <li>• Controle de acesso</li>
                    </ul>
                  </div>
                  <div className="bg-squad-light p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">Capacitação</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Treinamento da equipe</li>
                      <li>• Suporte técnico</li>
                      <li>• Documentação de processos</li>
                      <li>• Change management</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fase 3: Automação de processos</h3>

                <p className="mb-6">
                  Com a base estabelecida, partimos para a automação de processos críticos:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-squad-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Processos Administrativos</h4>
                      <p className="text-gray-600">Automatização de faturamento, cobrança e relatórios</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-squad-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Atendimento ao Cliente</h4>
                      <p className="text-gray-600">Chatbots, ticketing e acompanhamento automatizado</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-squad-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Marketing Digital</h4>
                      <p className="text-gray-600">Campanhas automatizadas e nutrição de leads</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-squad-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Operações</h4>
                      <p className="text-gray-600">Gestão de estoque e logística automatizada</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fase 4: Analytics e inteligência artificial</h3>

                <p className="mb-6">
                  O estágio mais avançado envolve análise de dados e IA para insights estratégicos:
                </p>

                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>Dashboards executivos em tempo real</li>
                  <li>Análise preditiva de vendas</li>
                  <li>Personalização da experiência do cliente</li>
                  <li>Otimização de operações com IA</li>
                  <li>Detecção de padrões e tendências</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Superando os principais desafios</h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Desafio 1: Resistência à mudança</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-3 text-squad-primary">Solução da Squad:</h4>
                  <p className="mb-3">Implementamos um programa de change management que inclui:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Comunicação clara sobre benefícios</li>
                    <li>Treinamento gradual e suporte contínuo</li>
                    <li>Envolvimento de lideranças como embaixadores</li>
                    <li>Celebração de pequenas vitórias</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Desafio 2: Recursos limitados</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-3 text-squad-primary">Solução da Squad:</h4>
                  <p className="mb-3">Criamos planos escaláveis que se adequam ao seu orçamento:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Implementação faseada com ROI rápido</li>
                    <li>Opções de locação de equipamentos</li>
                    <li>Soluções em nuvem com pagamento por uso</li>
                    <li>Financiamento especializado para TI</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Desafio 3: Complexidade técnica</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h4 className="font-semibold mb-3 text-squad-primary">Solução da Squad:</h4>
                  <p className="mb-3">Nossa equipe especializada cuida de toda a complexidade:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Gestão completa de projetos</li>
                    <li>Integração de sistemas existentes</li>
                    <li>Suporte técnico 24/7</li>
                    <li>Manutenção preventiva e corretiva</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cases de sucesso Squad Soluções</h2>

                <div className="grid md:grid-cols-1 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg border border-green-200">
                    <h4 className="text-xl font-semibold text-green-800 mb-4">Indústria Metalúrgica - 150 funcionários</h4>
                    <p className="text-green-700 mb-4">
                      <strong>Desafio:</strong> Processos manuais, falta de controle de produção e alta rotatividade de informações.
                    </p>
                    <p className="text-green-700 mb-4">
                      <strong>Solução:</strong> ERP integrado, automação da produção e dashboards gerenciais.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">45%</div>
                        <div className="text-sm">Redução de custos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">60%</div>
                        <div className="text-sm">Aumento produtividade</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">8 meses</div>
                        <div className="text-sm">ROI completo</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
                    <h4 className="text-xl font-semibold text-blue-800 mb-4">Rede de Varejo - 8 lojas</h4>
                    <p className="text-blue-700 mb-4">
                      <strong>Desafio:</strong> Controle de estoque manual, vendas não integradas e falta de dados consolidados.
                    </p>
                    <p className="text-blue-700 mb-4">
                      <strong>Solução:</strong> Sistema PDV integrado, e-commerce e BI para análise de vendas.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">35%</div>
                        <div className="text-sm">Aumento vendas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">90%</div>
                        <div className="text-sm">Precisão estoque</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">6 meses</div>
                        <div className="text-sm">Tempo implementação</div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Metodologia Squad para transformação digital</h2>

                <div className="bg-gradient-to-r from-squad-primary to-squad-dark text-white p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-6">Nossa abordagem exclusiva</h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="bg-white text-squad-primary rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-3">1</div>
                      <h4 className="font-semibold mb-2">Descoberta</h4>
                      <p className="text-sm">Análise profunda do negócio e identificação de oportunidades</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white text-squad-primary rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-3">2</div>
                      <h4 className="font-semibold mb-2">Estratégia</h4>
                      <p className="text-sm">Desenvolvimento de roadmap personalizado e definição de prioridades</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white text-squad-primary rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-3">3</div>
                      <h4 className="font-semibold mb-2">Execução</h4>
                      <p className="text-sm">Implementação ágil com entregas incrementais e acompanhamento</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white text-squad-primary rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-3">4</div>
                      <h4 className="font-semibold mb-2">Evolução</h4>
                      <p className="text-sm">Monitoramento contínuo e otimização baseada em resultados</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Investimento e retorno</h2>

                <p className="mb-6">
                  A transformação digital é um investimento que se paga. Com a Squad Soluções, você tem:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-green-800 mb-4">Investimento Inteligente</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Planos a partir de R$ 3.500/mês</li>
                      <li>• Implementação faseada</li>
                      <li>• ROI em 6-12 meses</li>
                      <li>• Financiamento disponível</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-blue-800 mb-4">Retornos Garantidos</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• 30-50% redução custos operacionais</li>
                      <li>• 40-70% aumento produtividade</li>
                      <li>• 25-40% crescimento receita</li>
                      <li>• Vantagem competitiva sustentável</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusão</h2>

                <p className="mb-6">
                  A transformação digital não é mais uma questão de "se", mas de "quando" e "como". Empresas que adiam essa jornada correm o risco de ficarem obsoletas no mercado.
                </p>

                <p className="mb-6">
                  Com a <strong>Squad Soluções</strong> e nossos <strong>9+ anos de experiência</strong>, sua empresa pode iniciar a transformação digital de forma estruturada, minimizando riscos e maximizando resultados. Nossa abordagem gradual permite que você evolua no seu ritmo, sempre com suporte especializado.
                </p>

                <p className="mb-8">
                  O futuro é digital, e ele começa agora. Dê o primeiro passo na transformação da sua empresa com quem entende do assunto.
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
                  Comece sua transformação digital hoje
                </h3>
                <p className="text-gray-600 mb-6">
                  Agende uma consultoria gratuita e descubra como a Squad Soluções pode transformar digitalmente sua empresa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-squad-primary hover:bg-squad-dark"
                    onClick={() => window.open('https://wa.me/5585985100928?text=Olá! Gostaria de agendar um diagnóstico gratuito de transformação digital.', '_blank')}
                  >
                    Diagnóstico Gratuito
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://wa.me/5585985100928?text=Olá! Gostaria de falar com um especialista em transformação digital.', '_blank')}
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
                      <Link to="/blog/1" className="hover:text-squad-primary transition-colors">
                        Como a automação pode reduzir custos operacionais
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Descubra como implementar soluções de automação eficientes.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">
                      <Link to="/blog/5" className="hover:text-squad-primary transition-colors">
                        Como escolher o melhor sistema ERP para sua empresa
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Critérios essenciais para avaliar e selecionar a solução de ERP.
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

export default DigitalTransformationArticle;
