
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from './ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success message
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato com você em breve.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      interest: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome completo *
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="Digite seu nome"
            className="w-full"
            aria-required="true"
            aria-describedby="name-help"
          />
          <span id="name-help" className="sr-only">
            Campo obrigatório para identificação
          </span>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder="Digite seu e-mail"
            className="w-full"
            aria-required="true"
            aria-describedby="email-help"
          />
          <span id="email-help" className="sr-only">
            Campo obrigatório para contato por e-mail
          </span>
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Telefone *
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
            placeholder="(85) 90000-0000"
            className="w-full"
            aria-required="true"
            aria-describedby="phone-help"
          />
          <span id="phone-help" className="sr-only">
            Campo obrigatório para contato telefônico
          </span>
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Empresa
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            autoComplete="organization"
            placeholder="Nome da sua empresa"
            className="w-full"
            aria-describedby="company-help"
          />
          <span id="company-help" className="sr-only">
            Campo opcional para informar sua empresa
          </span>
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
          Interesse *
        </label>
        <Select 
          value={formData.interest} 
          onValueChange={handleSelectChange}
          required
        >
          <SelectTrigger className="w-full" aria-required="true" aria-describedby="interest-help">
            <SelectValue placeholder="Selecione um serviço" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="locacao">Locação de Equipamentos</SelectItem>
            <SelectItem value="software">Desenvolvimento de Software</SelectItem>
            <SelectItem value="hospedagem">Hospedagem e Nuvem</SelectItem>
            <SelectItem value="automacao">Automação</SelectItem>
            <SelectItem value="consultoria-gestao">Consultoria em Gestão</SelectItem>
            <SelectItem value="consultoria-ti">Consultoria em TI</SelectItem>
            <SelectItem value="outro">Outro</SelectItem>
          </SelectContent>
        </Select>
        <span id="interest-help" className="sr-only">
          Campo obrigatório para identificar seu interesse
        </span>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Mensagem *
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Descreva como podemos ajudar você"
          className="w-full min-h-[120px]"
          aria-required="true"
          aria-describedby="message-help"
          maxLength={1000}
        />
        <span id="message-help" className="text-xs text-gray-500">
          Campo obrigatório. Máximo 1000 caracteres.
        </span>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-squad-primary hover:bg-squad-dark focus:ring-2 focus:ring-squad-primary focus:ring-offset-2"
        disabled={isSubmitting}
        aria-describedby="submit-help"
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            Enviando...
          </>
        ) : (
          'Enviar mensagem'
        )}
      </Button>
      <span id="submit-help" className="sr-only">
        Clique para enviar o formulário de contato
      </span>
    </form>
  );
};

export default ContactForm;
