
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-squad-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Fale Conosco</h1>
              <p className="text-lg text-gray-600">
                Estamos prontos para atender às suas necessidades. Entre em contato e converse com nossos especialistas.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info and Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 bg-squad-light rounded-lg flex items-center justify-center">
                      <Phone className="text-squad-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Telefone</h3>
                      <p className="text-gray-600">(11) 99999-9999</p>
                      <p className="text-gray-600">(11) 5555-5555</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 bg-squad-light rounded-lg flex items-center justify-center">
                      <Mail className="text-squad-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">E-mail</h3>
                      <p className="text-gray-600">contato@squadsolucoes.com.br</p>
                      <p className="text-gray-600">suporte@squadsolucoes.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 bg-squad-light rounded-lg flex items-center justify-center">
                      <MapPin className="text-squad-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Escritório</h3>
                      <p className="text-gray-600">Av. Paulista, 1000</p>
                      <p className="text-gray-600">Bela Vista, São Paulo - SP</p>
                      <p className="text-gray-600">CEP: 01310-100</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Horário de Atendimento</h3>
                  <p className="text-gray-600">Segunda a sexta: 8h00 às 18h00</p>
                  <p className="text-gray-600">Sábado: 9h00 às 13h00</p>
                </div>
              </div>

              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie uma mensagem</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-10 bg-squad-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="h-96 bg-gray-300 rounded-lg shadow-inner w-full">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Mapa será carregado aqui</p>
                </div>
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

export default ContactPage;
