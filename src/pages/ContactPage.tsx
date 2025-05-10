
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
                      <p className="text-gray-600">(85) 9 8510-0928</p>
                      <p className="text-gray-600">(WhatsApp disponível)</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 bg-squad-light rounded-lg flex items-center justify-center">
                      <Mail className="text-squad-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">E-mail</h3>
                      <p className="text-gray-600">contato@squadsolucoes.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 bg-squad-light rounded-lg flex items-center justify-center">
                      <MapPin className="text-squad-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Escritório</h3>
                      <p className="text-gray-600">Av. Pe. José Holanda do Vale, 600</p>
                      <p className="text-gray-600">Fortaleza - CE</p>
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
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.073128970961!2d-38.50364162427696!3d-3.801213943757603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7462398d858f7%3A0xfec6d58a8ab96e9!2sAv.%20Padre%20Jos%C3%A9%20Holanda%20do%20Vale%2C%20600%20-%20Cidade%20dos%20Funcion%C3%A1rios%2C%20Fortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1706410437241!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
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
