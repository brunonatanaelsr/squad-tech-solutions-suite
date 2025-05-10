
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-squad-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Squad<span className="text-squad-secondary">Soluções</span>
            </h3>
            <p className="mb-4 text-gray-300">
              Oferecemos soluções tecnológicas inovadoras e estratégicas, que otimizem a operação, 
              gestão e performance dos nossos clientes.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-squad-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-squad-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-squad-secondary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-squad-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-squad-secondary transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-squad-secondary transition-colors">Serviços</Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-gray-300 hover:text-squad-secondary transition-colors">Soluções</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-squad-secondary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-squad-secondary transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos#locacao" className="text-gray-300 hover:text-squad-secondary transition-colors">Locação de Equipamentos</Link>
              </li>
              <li>
                <Link to="/servicos#software" className="text-gray-300 hover:text-squad-secondary transition-colors">Desenvolvimento de Software</Link>
              </li>
              <li>
                <Link to="/servicos#hospedagem" className="text-gray-300 hover:text-squad-secondary transition-colors">Hospedagem e Nuvem</Link>
              </li>
              <li>
                <Link to="/servicos#automacao" className="text-gray-300 hover:text-squad-secondary transition-colors">Automação</Link>
              </li>
              <li>
                <Link to="/servicos#consultoria-gestao" className="text-gray-300 hover:text-squad-secondary transition-colors">Consultoria em Gestão</Link>
              </li>
              <li>
                <Link to="/servicos#consultoria-ti" className="text-gray-300 hover:text-squad-secondary transition-colors">Consultoria em TI</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>contato@squadsolucoes.com.br</span>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://api.whatsapp.com/send?phone=5511999999999&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Squad%20Soluções!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center justify-center w-full"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Squad Soluções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
