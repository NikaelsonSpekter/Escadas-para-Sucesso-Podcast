
import React from 'react';
import { BarChart3, Target, CheckCircle, MessageSquare } from 'lucide-react';

const MediaKit: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-brand-blue mb-6">Anuncie & Parcerias</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Conecte sua marca a um público altamente qualificado de engenheiros, arquitetos, gestores e empreendedores da construção civil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-black text-brand-blue mb-6 flex items-center gap-3">
                <BarChart3 className="text-brand-gold" /> Nossa Audiência
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-brand-light p-6 rounded-2xl">
                  <p className="text-3xl font-black text-brand-blue">85%</p>
                  <p className="text-sm text-gray-600">Público masculino (25-45 anos)</p>
                </div>
                <div className="bg-brand-light p-6 rounded-2xl">
                  <p className="text-3xl font-black text-brand-blue">70%</p>
                  <p className="text-sm text-gray-600">Engenheiros e Donos de Negócio</p>
                </div>
                <div className="bg-brand-light p-6 rounded-2xl">
                  <p className="text-3xl font-black text-brand-blue">15k+</p>
                  <p className="text-sm text-gray-600">Downloads mensais médios</p>
                </div>
                <div className="bg-brand-light p-6 rounded-2xl">
                  <p className="text-3xl font-black text-brand-blue">92%</p>
                  <p className="text-sm text-gray-600">Taxa de retenção (vêem até o fim)</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-brand-blue mb-6 flex items-center gap-3">
                <Target className="text-brand-gold" /> Formatos de Patrocínio
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Cota Master (Episódio Único)', desc: 'Menção de 60s no início + Logo no Thumbnail + Link na Descrição.' },
                  { title: 'Série de Episódios (4 Semanas)', desc: 'Presença garantida em 4 episódios com leitura de script personalizado.' },
                  { title: 'Branded Content', desc: 'Episódio temático focado na solução/tecnologia da sua empresa.' },
                  { title: 'Newsletter & Blog', desc: 'Banners e publieditoriais em nossos canais de texto.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white border border-brand-border p-6 rounded-2xl hover:border-brand-blue transition-all">
                    <CheckCircle className="text-brand-gold mt-1" />
                    <div>
                      <h4 className="font-bold text-brand-blue">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="bg-brand-light p-8 rounded-3xl border border-brand-border shadow-sm">
              <div className="flex items-center gap-3 mb-6 text-brand-blue">
                <MessageSquare className="text-brand-gold" />
                <h4 className="text-xl font-bold">Interesse Comercial</h4>
              </div>
              <p className="text-sm text-gray-600 mb-8">
                Preencha os dados abaixo para receber uma proposta personalizada para sua marca.
              </p>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Seu nome" 
                  className="w-full p-4 rounded-xl outline-none border border-gray-300 focus:border-brand-blue bg-white text-brand-neutral transition-all" 
                />
                <input 
                  type="email" 
                  placeholder="E-mail corporativo" 
                  className="w-full p-4 rounded-xl outline-none border border-gray-300 focus:border-brand-blue bg-white text-brand-neutral transition-all" 
                />
                <input 
                  type="text" 
                  placeholder="Sua empresa" 
                  className="w-full p-4 rounded-xl outline-none border border-gray-300 focus:border-brand-blue bg-white text-brand-neutral transition-all" 
                />
                <textarea 
                  placeholder="Como podemos ajudar sua marca?" 
                  className="w-full p-4 rounded-xl h-32 outline-none border border-gray-300 focus:border-brand-blue bg-white text-brand-neutral transition-all resize-none"
                ></textarea>
                <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all">Solicitar Proposta</button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MediaKit;
