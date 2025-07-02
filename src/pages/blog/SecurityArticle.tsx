import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import securityHero from '@/assets/images/blog/security-hero.svg';

const SecurityArticle = () => {
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
                Melhores práticas para segurança de dados empresariais
              </h1>
              <div className="flex justify-center items-center gap-4 text-white/80">
                <span>28 de abril, 2025</span>
                <span>•</span>
                <span>Segurança</span>
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
                  src={securityHero} 
                  alt="Segurança de dados empresariais" 
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Article Text */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  A segurança de dados nunca foi tão crítica para o sucesso empresarial. Com a <strong>Squad Soluções</strong>, sua empresa pode implementar as melhores práticas de segurança para proteger informações sensíveis e manter a confiança dos clientes.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Por que a segurança de dados é fundamental?</h2>
                
                <p className="mb-6">
                  Em 2024, ataques cibernéticos causaram prejuízos de mais de R$ 45 bilhões para empresas brasileiras. A proteção adequada de dados não é apenas uma necessidade técnica, mas um diferencial competitivo e requisito legal.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                  <h4 className="text-lg font-semibold text-red-800 mb-2">Estatísticas alarmantes:</h4>
                  <ul className="text-red-700 space-y-1">
                    <li>• 83% das pequenas empresas não estão preparadas para ataques cibernéticos</li>
                    <li>• Custo médio de um vazamento de dados: R$ 4,8 milhões</li>
                    <li>• 60% das pequenas empresas fecham após um ataque cibernético</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Principais ameaças à segurança empresarial</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3 text-red-600">Ransomware</h4>
                    <p className="text-gray-700">
                      Malware que criptografa arquivos e exige pagamento para liberação. Pode paralisar completamente uma empresa.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3 text-red-600">Phishing</h4>
                    <p className="text-gray-700">
                      Emails fraudulentos que capturam credenciais e informações sensíveis dos funcionários.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3 text-red-600">Vazamento de dados</h4>
                    <p className="text-gray-700">
                      Exposição não autorizada de informações confidenciais de clientes e da empresa.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3 text-red-600">Ataques internos</h4>
                    <p className="text-gray-700">
                      Funcionários mal-intencionados ou negligentes que comprometem a segurança.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Melhores práticas de segurança</h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Implementação de firewall avançado</h3>
                <p className="mb-6">
                  A <strong>Squad Soluções</strong> configura firewalls de nova geração que monitoram e filtram todo o tráfego de rede, bloqueando ameaças antes que entrem no seu sistema.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Autenticação multifator (MFA)</h3>
                <p className="mb-6">
                  Implementamos sistemas de autenticação em múltiplas camadas, reduzindo em 99,9% o risco de acesso não autorizado mesmo com credenciais comprometidas.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Backup e recuperação de desastres</h3>
                <p className="mb-6">
                  Configuramos sistemas automatizados de backup com múltiplas cópias em locais seguros, garantindo recuperação rápida em caso de incidentes.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Criptografia de dados</h3>
                <p className="mb-6">
                  Todos os dados sensíveis são criptografados em trânsito e em repouso, tornando-os inúteis mesmo se interceptados.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">5. Monitoramento 24/7</h3>
                <p className="mb-6">
                  Nossos sistemas de monitoramento identificam atividades suspeitas em tempo real, permitindo resposta imediata a ameaças.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conformidade com LGPD</h2>

                <p className="mb-6">
                  A Lei Geral de Proteção de Dados (LGPD) exige que empresas protejam adequadamente dados pessoais. A Squad Soluções ajuda sua empresa a:
                </p>

                <ul className="list-disc list-inside mb-8 space-y-3">
                  <li><strong>Mapear dados pessoais:</strong> Identificamos todos os pontos onde dados são coletados e armazenados</li>
                  <li><strong>Implementar controles:</strong> Criamos políticas e procedimentos para proteção de dados</li>
                  <li><strong>Treinar equipe:</strong> Capacitamos funcionários sobre práticas seguras</li>
                  <li><strong>Documentar processos:</strong> Mantemos registros necessários para conformidade</li>
                  <li><strong>Monitorar continuamente:</strong> Garantimos conformidade contínua com a legislação</li>
                </ul>

                <div className="bg-gradient-to-r from-squad-primary to-squad-dark text-white p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4">Soluções Squad para segurança empresarial</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Proteção Perimetral</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Firewall de nova geração</li>
                        <li>• Sistema de detecção de intrusão</li>
                        <li>• Filtro de conteúdo web</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Proteção de Endpoints</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Antivírus empresarial</li>
                        <li>• Controle de dispositivos</li>
                        <li>• Monitoramento comportamental</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Gestão de Identidades</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Autenticação multifator</li>
                        <li>• Controle de acesso</li>
                        <li>• Gestão de privilégios</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Backup e Recuperação</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Backup automatizado</li>
                        <li>• Replicação de dados</li>
                        <li>• Plano de continuidade</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Treinamento e conscientização</h2>

                <p className="mb-6">
                  95% dos incidentes de segurança envolvem erro humano. Por isso, a Squad Soluções oferece programa completo de treinamento:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-squad-light p-6 rounded-lg text-center">
                    <h4 className="text-lg font-semibold mb-3">Phishing Simulation</h4>
                    <p className="text-sm text-gray-700">Testes práticos para identificar vulnerabilidades comportamentais</p>
                  </div>
                  <div className="bg-squad-light p-6 rounded-lg text-center">
                    <h4 className="text-lg font-semibold mb-3">Workshops Presenciais</h4>
                    <p className="text-sm text-gray-700">Treinamentos interativos sobre melhores práticas de segurança</p>
                  </div>
                  <div className="bg-squad-light p-6 rounded-lg text-center">
                    <h4 className="text-lg font-semibold mb-3">Material Educativo</h4>
                    <p className="text-sm text-gray-700">Guias e políticas personalizadas para sua empresa</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Plano de resposta a incidentes</h2>

                <p className="mb-6">
                  Mesmo com todas as proteções, incidentes podem ocorrer. A Squad Soluções desenvolve planos de resposta que incluem:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-squad-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Detecção rápida</h4>
                      <p className="text-gray-600">Sistemas automatizados identificam ameaças em tempo real</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-squad-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Contenção imediata</h4>
                      <p className="text-gray-600">Isolamento da ameaça para evitar propagação</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-squad-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Análise forense</h4>
                      <p className="text-gray-600">Investigação detalhada para entender o incidente</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-squad-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Recuperação completa</h4>
                      <p className="text-gray-600">Restauração segura de sistemas e dados</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Investimento em segurança vs. custo de incidentes</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                    <h4 className="text-xl font-semibold text-green-800 mb-4">Investimento em Segurança</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• R$ 2.000 - R$ 5.000/mês</li>
                      <li>• Proteção 24/7</li>
                      <li>• Conformidade garantida</li>
                      <li>• Tranquilidade operacional</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                    <h4 className="text-xl font-semibold text-red-800 mb-4">Custo de um Incidente</h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• R$ 500.000 - R$ 5.000.000</li>
                      <li>• Perda de dados críticos</li>
                      <li>• Multas por não conformidade</li>
                      <li>• Danos à reputação</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Por que escolher a Squad Soluções?</h2>

                <p className="mb-6">
                  Com <strong>9+ anos de experiência</strong> em segurança empresarial, a Squad Soluções oferece:
                </p>

                <ul className="list-disc list-inside mb-8 space-y-3">
                  <li><strong>Expertise comprovada:</strong> Certificações internacionais em segurança cibernética</li>
                  <li><strong>Soluções integradas:</strong> Proteção completa em todas as camadas</li>
                  <li><strong>Suporte 24/7:</strong> Monitoramento e resposta contínuos</li>
                  <li><strong>Conformidade LGPD:</strong> Adequação completa à legislação brasileira</li>
                  <li><strong>Treinamento especializado:</strong> Capacitação da sua equipe</li>
                  <li><strong>ROI comprovado:</strong> Proteção eficiente com custo-benefício</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusão</h2>

                <p className="mb-6">
                  A segurança de dados empresariais não é opcional no ambiente digital atual. Com as ameaças crescendo em frequência e sofisticação, investir em proteção adequada é fundamental para a continuidade do negócio.
                </p>

                <p className="mb-8">
                  A <strong>Squad Soluções</strong> oferece as ferramentas, expertise e suporte necessários para manter sua empresa protegida contra todas as ameaças cibernéticas. Não espere um incidente acontecer - proteja seu negócio hoje mesmo.
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
                  Proteja sua empresa agora mesmo
                </h3>
                <p className="text-gray-600 mb-6">
                  Agende uma avaliação gratuita de segurança e descubra as vulnerabilidades da sua empresa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-squad-primary hover:bg-squad-dark"
                    onClick={() => window.open('https://wa.me/5585985100928?text=Olá! Gostaria de agendar uma avaliação gratuita de segurança empresarial.', '_blank')}
                  >
                    Avaliação Gratuita de Segurança
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://wa.me/5585985100928?text=Olá! Gostaria de falar com um especialista em segurança de dados.', '_blank')}
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

export default SecurityArticle;
