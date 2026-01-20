
import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const whatsappUrl = "https://wa.me/5511988284715?text=Olá,%20gostaria%20de%20sugerir%20um%20convidado%20para%20o%20podcast%20Escadas%20para%20o%20Sucesso.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-brand-blue mb-6">Fale Conosco</h1>
            <p className="text-xl text-gray-600">Tem uma sugestão de convidado ou quer tirar uma dúvida? Nossa equipe responde rápido.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue mb-1">E-mail</h4>
                  <p className="text-gray-600">contato@escadasparasucesso.com.br</p>
                  <p className="text-xs text-gray-400 mt-1">Geral e parcerias</p>
                </div>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <MessageSquare />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue mb-1">WhatsApp</h4>
                  <p className="text-gray-600">(11) 98828-4715</p>
                  <p className="text-xs text-brand-gold font-bold mt-1 group-hover:underline">Falar com a assistente agora →</p>
                </div>
              </a>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue mb-1">Endereço</h4>
                  <p className="text-gray-600">
                    Edifício The Office - R. Alegre, 470<br />
                    7º Andar - Santa Paula<br />
                    São Caetano do Sul - SP
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Sede do Estúdio</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl border border-brand-border shadow-xl">
              {submitted ? (
                <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-blue mb-4">Mensagem Enviada!</h3>
                  <p className="text-gray-600">Obrigado pelo contato. O Aldo ou alguém da equipe responderá em breve.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-brand-blue font-bold underline">Enviar outra mensagem</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-brand-blue mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full p-4 rounded-xl border border-gray-300 bg-white text-brand-neutral outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all" 
                      placeholder="Como podemos te chamar?" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-blue mb-2">Seu E-mail</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full p-4 rounded-xl border border-gray-300 bg-white text-brand-neutral outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all" 
                      placeholder="ex: seu@email.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-blue mb-2">Assunto</label>
                    <select className="w-full p-4 rounded-xl border border-gray-300 bg-white text-brand-neutral outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all cursor-pointer">
                      <option>Dúvida Geral</option>
                      <option>Sugestão de Convidado</option>
                      <option>Patrocínio / Parceria</option>
                      <option>Imprensa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-blue mb-2">Mensagem</label>
                    <textarea 
                      required 
                      className="w-full p-4 rounded-xl border border-gray-300 bg-white text-brand-neutral outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all h-32 resize-none" 
                      placeholder="Escreva aqui sua mensagem..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold shadow-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                    Enviar Mensagem <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
