import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import rentalHero from '@/assets/images/blog/rental-hero.svg';

const RentalArticle = () => {
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
                Vantagens da locação de equipamentos vs. compra
              </h1>
              <div className="flex justify-center items-center gap-4 text-white/80">
                <span>3 de abril, 2025</span>
                <span>•</span>
                <span>Locação</span>
                <span>•</span>
                <span>Leitura de 6 min</span>
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
                  src={rentalHero} 
                  alt="Locação de equipamentos de TI" 
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Article Text */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  A decisão entre alugar ou comprar equipamentos de TI pode impactar significativamente o fluxo de caixa e a competitividade da sua empresa. Com a <strong>Squad Soluções</strong>, você tem acesso a equipamentos de última geração através da locação, otimizando seus recursos financeiros.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">O cenário atual do mercado de TI</h2>
                
                <p className="mb-6">
                  O mercado de tecnologia evolui rapidamente. Equipamentos considerados top de linha hoje podem se tornar obsoletos em 2-3 anos. Essa velocidade de evolução torna a locação uma estratégia inteligente para manter sua empresa sempre atualizada.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">Dados do mercado:</h4>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• 73% das empresas brasileiras usam equipamentos com mais de 4 anos</li>
                    <li>• Produtividade cai 35% com hardware desatualizado</li>
                    <li>• Custo de manutenção aumenta 150% após 3 anos de uso</li>
                    <li>• 89% das empresas que alugam equipamentos reportam maior flexibilidade</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Vantagens da locação de equipamentos</h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Preservação do capital de giro</h3>
                <p className="mb-6">
                  A locação libera recursos financeiros que podem ser investidos no core business da empresa. Em vez de imobilizar grandes valores em equipamentos, você paga parcelas mensais que cabem no seu orçamento operacional.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                    <h4 className="text-lg font-semibold text-red-800 mb-3">Compra Tradicional</h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• Investimento inicial alto</li>
                      <li>• Capital imobilizado</li>
                      <li>• Risco de obsolescência</li>
                      <li>• Manutenção por conta própria</li>
                      <li>• Depreciação contínua</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Locação Squad</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Parcelas mensais baixas</li>
                      <li>• Capital liberado para investimento</li>
                      <li>• Tecnologia sempre atualizada</li>
                      <li>• Manutenção incluída</li>
                      <li>• Benefícios fiscais</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Tecnologia sempre atualizada</h3>
                <p className="mb-6">
                  Com a Squad Soluções, sua empresa sempre terá acesso aos equipamentos mais modernos. Nossos contratos permitem upgrades periódicos, garantindo que sua equipe trabalhe com o que há de melhor em tecnologia.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Suporte técnico especializado</h3>
                <p className="mb-6">
                  Todos os equipamentos locados incluem suporte técnico completo. Problemas de hardware são resolvidos rapidamente, sem impacto na produtividade da sua equipe.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Benefícios fiscais</h3>
                <p className="mb-6">
                  As parcelas de locação são 100% dedutíveis como despesa operacional, reduzindo a carga tributária da empresa. Na compra, a depreciação ocorre ao longo de vários anos.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Custos ocultos da compra tradicional</h2>

                <div className="bg-red-50 p-8 rounded-lg mb-8 border-2 border-red-200">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Prejuízos financeiros da compra tradicional</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Custos diretos:</h4>
                      <ul className="space-y-2 text-red-700">
                        <li>• Alto investimento inicial imobilizado</li>
                        <li>• Custos de manutenção não previstos</li>
                        <li>• Seguros e proteção contra roubo</li>
                        <li>• Depreciação acelerada de equipamentos</li>
                        <li>• Custos de atualização/upgrade</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Custos indiretos:</h4>
                      <ul className="space-y-2 text-red-700">
                        <li>• Perda de oportunidades de investimento</li>
                        <li>• Risco de obsolescência tecnológica</li>
                        <li>• Tempo perdido com problemas técnicos</li>
                        <li>• Necessidade de equipe técnica interna</li>
                        <li>• Dificuldade de planejamento financeiro</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Vantagens financeiras da locação</h2>

                <div className="bg-squad-light p-8 rounded-lg mb-8">
                  <h4 className="text-xl font-semibold mb-4">Benefícios econômicos comprovados</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-3">Fluxo de caixa:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Zero investimento inicial</li>
                        <li>• Parcelas mensais previsíveis</li>
                        <li>• Capital liberado para core business</li>
                        <li>• Melhor controle orçamentário</li>
                        <li>• Proteção contra inflação</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Benefícios tributários:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li>• 100% dedutível como despesa</li>
                        <li>• Redução da base de cálculo de impostos</li>
                        <li>• Não impacta no ativo imobilizado</li>
                        <li>• Simplifica a contabilidade</li>
                        <li>• Melhora indicadores financeiros</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg text-center">
                    <p className="text-gray-800 font-semibold">
                      💡 <strong>Simulação personalizada:</strong> Solicite uma análise financeira gratuita para descobrir quanto sua empresa pode economizar com a locação.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tipos de equipamentos disponíveis</h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-squad-light p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">Computadores</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Desktops empresariais</li>
                      <li>• Notebooks profissionais</li>
                      <li>• Workstations gráficas</li>
                      <li>• All-in-one</li>
                    </ul>
                  </div>
                  <div className="bg-squad-light p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">Servidores</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Servidores de arquivos</li>
                      <li>• Servidores de aplicação</li>
                      <li>• Servidores de banco de dados</li>
                      <li>• Appliances de backup</li>
                    </ul>
                  </div>
                  <div className="bg-squad-light p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">Rede e Infraestrutura</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Switches gerenciáveis</li>
                      <li>• Roteadores empresariais</li>
                      <li>• Firewalls de segurança</li>
                      <li>• Access points wi-fi</li>
                    </ul>
                  </div>
                  <div className="bg-squad-light p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">Periféricos</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Monitores profissionais</li>
                      <li>• Impressoras multifuncionais</li>
                      <li>• Projetores</li>
                      <li>• Equipamentos de teleconferência</li>
                    </ul>
                  </div>
                  <div className="bg-squad-light p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">Segurança</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Câmeras IP</li>
                      <li>• DVRs e NVRs</li>
                      <li>• Sistemas de alarme</li>
                      <li>• Controle de acesso</li>
                    </ul>
                  </div>
                  <div className="bg-squad-light p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">Software</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Licenças Microsoft</li>
                      <li>• Sistemas ERP</li>
                      <li>• Softwares de segurança</li>
                      <li>• Ferramentas colaborativas</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Modalidades de locação Squad</h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Locação Operacional</h3>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <p className="mb-3"><strong>Melhor para:</strong> Empresas que querem máxima flexibilidade</p>
                  <ul className="list-disc list-inside space-y-2 text-blue-700">
                    <li>Contratos de 12 a 48 meses</li>
                    <li>Manutenção e suporte incluídos</li>
                    <li>Upgrade de equipamentos disponível</li>
                    <li>100% dedutível como despesa</li>
                    <li>Não impacta o balanço patrimonial</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leasing Financeiro</h3>
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <p className="mb-3"><strong>Melhor para:</strong> Empresas que querem adquirir ao final</p>
                  <ul className="list-disc list-inside space-y-2 text-green-700">
                    <li>Opção de compra ao final do contrato</li>
                    <li>Valor residual garantido baixo</li>
                    <li>Contratos flexíveis</li>
                    <li>Parcelas adequadas ao fluxo de caixa</li>
                    <li>Benefícios fiscais disponíveis</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Renting Completo</h3>
                <div className="bg-purple-50 p-6 rounded-lg mb-8">
                  <p className="mb-3"><strong>Melhor para:</strong> Empresas que querem solução completa</p>
                  <ul className="list-disc list-inside space-y-2 text-purple-700">
                    <li>Inclui equipamentos, software e serviços</li>
                    <li>Gestão completa de TI terceirizada</li>
                    <li>SLA garantido para todos os serviços</li>
                    <li>Monitoramento 24/7</li>
                    <li>Consultoria estratégica incluída</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cases de sucesso na locação</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
                    <h4 className="text-xl font-semibold text-blue-800 mb-4">Escritório de Advocacia - 50 funcionários</h4>
                    <p className="text-blue-700 mb-4">
                      <strong>Desafio:</strong> Equipamentos antigos causavam lentidão e perda de produtividade. Alto investimento necessário para renovação completa.
                    </p>
                    <p className="text-blue-700 mb-4">
                      <strong>Solução Squad:</strong> Locação de 50 computadores, servidores e sistema de backup em nuvem.
                    </p>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">Zero</div>
                        <div className="text-sm">Investimento inicial</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">40%</div>
                        <div className="text-sm">Aumento produtividade</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">Alto</div>
                        <div className="text-sm">Capital liberado</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">100%</div>
                        <div className="text-sm">Satisfação equipe</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg border border-green-200">
                    <h4 className="text-xl font-semibold text-green-800 mb-4">Construtora - 80 funcionários</h4>
                    <p className="text-green-700 mb-4">
                      <strong>Desafio:</strong> Necessidade de equipamentos robustos para projetos, mas com flexibilidade para expandir ou reduzir conforme demanda.
                    </p>
                    <p className="text-green-700 mb-4">
                      <strong>Solução Squad:</strong> Locação flexível com workstations CAD, notebooks móveis e infraestrutura de rede.
                    </p>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">60%</div>
                        <div className="text-sm">Redução custos TI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">24/7</div>
                        <div className="text-sm">Suporte disponível</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">50%</div>
                        <div className="text-sm">Menos tempo parado</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">100%</div>
                        <div className="text-sm">Flexibilidade</div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Quando escolher cada opção?</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                    <h4 className="text-xl font-semibold text-green-800 mb-4">Escolha LOCAÇÃO quando:</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>✓ Quer preservar capital de giro</li>
                      <li>✓ Precisa de flexibilidade</li>
                      <li>✓ Quer tecnologia sempre atualizada</li>
                      <li>✓ Prefere suporte incluído</li>
                      <li>✓ Busca benefícios fiscais</li>
                      <li>✓ Tem demanda variável</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                    <h4 className="text-xl font-semibold text-blue-800 mb-4">Escolha COMPRA quando:</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>✓ Tem capital disponível</li>
                      <li>✓ Uso intensivo por muitos anos</li>
                      <li>✓ Equipamentos com baixa obsolescência</li>
                      <li>✓ Tem equipe técnica interna</li>
                      <li>✓ Demanda estável e previsível</li>
                      <li>✓ Controle total sobre o ativo</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Por que escolher a Squad Soluções?</h2>

                <div className="bg-gradient-to-r from-squad-primary to-squad-dark text-white p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-6">Diferenciais Squad na locação</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">🏆 Experiência comprovada</h4>
                      <p className="text-sm mb-4">9+ anos no mercado com centenas de clientes satisfeitos</p>
                      
                      <h4 className="font-semibold mb-3">🔧 Suporte especializado</h4>
                      <p className="text-sm mb-4">Equipe técnica certificada disponível 24/7</p>
                      
                      <h4 className="font-semibold mb-3">💰 Condições flexíveis</h4>
                      <p className="text-sm">Contratos personalizados para cada necessidade</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">📱 Tecnologia de ponta</h4>
                      <p className="text-sm mb-4">Parceria com principais fabricantes mundiais</p>
                      
                      <h4 className="font-semibold mb-3">🎯 Consultoria incluída</h4>
                      <p className="text-sm mb-4">Análise técnica para otimizar sua infraestrutura</p>
                      
                      <h4 className="font-semibold mb-3">🚀 Entrega rápida</h4>
                      <p className="text-sm">Implementação em até 5 dias úteis</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusão</h2>

                <p className="mb-6">
                  A locação de equipamentos de TI oferece vantagens significativas para a maioria das empresas, especialmente em um mercado onde a tecnologia evolui rapidamente e o capital de giro é precioso.
                </p>

                <p className="mb-6">
                  Com a <strong>Squad Soluções</strong>, você tem acesso a equipamentos de última geração, suporte especializado e flexibilidade contratual, tudo isso preservando seu capital para investir no crescimento do negócio.
                </p>

                <p className="mb-8">
                  Nossa experiência de <strong>9+ anos no mercado</strong> nos permite oferecer as melhores condições e soluções personalizadas para cada tipo de empresa. Faça a escolha inteligente: alugue com quem entende do assunto.
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
                  Simule agora a locação dos seus equipamentos
                </h3>
                <p className="text-gray-600 mb-6">
                  Receba uma proposta personalizada e descubra quanto você pode economizar com a locação Squad.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-squad-primary hover:bg-squad-dark"
                    onClick={() => window.open('https://wa.me/5585985100928?text=Olá! Gostaria de simular uma locação de equipamentos gratuita.', '_blank')}
                  >
                    Simular Locação Gratuita
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://wa.me/5585985100928?text=Olá! Gostaria de falar com um consultor sobre locação de equipamentos.', '_blank')}
                  >
                    Falar com Consultor
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
                      <Link to="/blog/3" className="hover:text-squad-primary transition-colors">
                        Transformação digital: por onde começar
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Um guia passo a passo para iniciar a jornada de transformação digital.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">
                      <Link to="/blog/6" className="hover:text-squad-primary transition-colors">
                        Infraestrutura em nuvem: desmistificando conceitos
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Entenda os principais conceitos de computação em nuvem.
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

export default RentalArticle;
