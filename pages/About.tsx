
import React from 'react';
import { CheckCircle2, Award, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-brand-blue mb-8 leading-tight">
              A conversa é de obra: <br />
              <span className="text-brand-gold">ou sustenta ou cai.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              O podcast "Escadas para o Sucesso" nasceu de uma necessidade clara: o mercado de engenharia e construção no Brasil é gigante, mas carece de compartilhamento real de experiências de gestão e negócios.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Aqui não falamos de teorias abstratas. Falamos de cimento, de aço, de gente, de impostos, de negociação e de como construir uma carreira sólida em um setor que não perdoa erros amadores.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-brand-light p-6 rounded-2xl border border-brand-border">
                <p className="text-3xl font-black text-brand-blue mb-1">100k+</p>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Views</p>
              </div>
              <div className="bg-brand-light p-6 rounded-2xl border border-brand-border">
                <p className="text-3xl font-black text-brand-blue mb-1">50+</p>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Episódios</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://iili.io/fUf301j.jpg" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]" alt="Aldo Ramos" />
            <div className="absolute -bottom-8 -right-8 bg-brand-gold p-10 rounded-2xl shadow-xl text-white max-w-xs hidden md:block">
              <p className="font-bold text-xl italic mb-4">"Nossa missão é formar engenheiros que são verdadeiros donos de negócio."</p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">— Aldo Ramos</p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-brand-blue mb-4">Nossos Pilares Editoriais</h2>
            <p className="text-gray-600">O que guia cada conversa e cada artigo produzido por nossa equipe.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Engenharia Aplicada', desc: 'Nada de fórmulas sem contexto. O foco é como a técnica resolve problemas reais.', icon: <Award className="text-brand-gold" /> },
              { title: 'Obras e Execução', desc: 'Os bastidores do canteiro, logística, segurança e controle de qualidade.', icon: <CheckCircle2 className="text-brand-gold" /> },
              { title: 'Negócios e Crescimento', desc: 'Vendas, marketing para construtoras, gestão financeira e escala.', icon: <Zap className="text-brand-gold" /> },
              { title: 'Carreira e Bastidores', desc: 'O mindset e as soft skills necessárias para chegar ao topo da pirâmide.', icon: <Users className="text-brand-gold" /> }
            ].map((p, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-brand-border hover:border-brand-blue transition-all">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h4 className="font-bold text-brand-blue mb-4">{p.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
