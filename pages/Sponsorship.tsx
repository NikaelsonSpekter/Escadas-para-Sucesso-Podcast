
import React from 'react';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  MessageSquare, 
  Zap, 
  Star,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const Sponsorship: React.FC = () => {
  const whatsappPatrocinioUrl = "https://wa.me/5511988284715?text=Olá!%20Tenho%20interesse%20em%20patrocinar%20o%20podcast%20Escadas%20para%20o%20Sucesso%20e%20gostaria%20de%20receber%20mais%20informações%20sobre%20as%20cotas%20disponíveis.";

  const metrics = [
    { icon: <BarChart3 className="text-brand-gold" size={24} />, label: "Alcance Mensal", value: "100k+", sub: "Visualizações totais" },
    { icon: <Users className="text-brand-gold" size={24} />, label: "Público Alvo", value: "85%", sub: "Poder de decisão (C-Level)" },
    { icon: <TrendingUp className="text-brand-gold" size={24} />, label: "Retenção", value: "92%", sub: "Audiência fiel" },
    { icon: <Zap className="text-brand-gold" size={24} />, label: "Engajamento", value: "High", sub: "Comunidade ativa" },
  ];

  const plans = [
    {
      name: "Cota Master",
      tag: "Máxima Visibilidade",
      features: [
        "Abertura de todos os episódios",
        "Logo fixo na tela (YouTube)",
        "Link na Bio e Descrições",
        "Post dedicado no Blog",
        "4 Publieditoriais por mês"
      ],
      highlight: true
    },
    {
      name: "Cota Episódio",
      tag: "Foco e Segmentação",
      features: [
        "Patrocínio de 1 episódio específico",
        "Menção de 60s no 'Mid-roll'",
        "Link na descrição do vídeo",
        "Destaque na Newsletter semanal",
        "Stories dedicado no Instagram"
      ],
      highlight: false
    },
    {
      name: "Branded Content",
      tag: "Autoridade Total",
      features: [
        "Episódio focado na sua solução",
        "Convidado da sua empresa",
        "Roteiro estratégico em conjunto",
        "Corte de vídeos para Ads",
        "Artigo técnico no Blog"
      ],
      highlight: false
    }
  ];

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-24 relative">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-light rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-brand-blue/5 text-brand-blue px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            💼 Parcerias Estratégicas
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-brand-blue mb-8 leading-[1.05]">
            Sua marca na maior vitrine de <span className="text-brand-gold">engenharia e negócios.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Não compre apenas cliques. Compre autoridade. Posicione sua solução para quem decide o destino das maiores obras do país.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={whatsappPatrocinioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-blue text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-all"
            >
              Falar com Comercial <MessageSquare size={22} />
            </a>
            <p className="text-sm font-bold text-gray-400">Resposta em até 24h úteis</p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-brand-blue py-20 mb-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <div key={i} className="text-center text-white animate-in fade-in slide-in-from-bottom duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {m.icon}
                </div>
                <h3 className="text-4xl font-black mb-2">{m.value}</h3>
                <p className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-1">{m.label}</p>
                <p className="text-xs text-white/50">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="container mx-auto px-4 md:px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black text-brand-blue mb-8">Por que patrocinar o Escadas para o Sucesso?</h2>
            <div className="space-y-8">
              {[
                { title: "Qualificação", desc: "Nossa audiência não é curiosa. São tomadores de decisão, engenheiros e donos de construtoras." },
                { title: "Longevidade", desc: "Seu patrocínio fica eternizado no YouTube e no Blog, gerando leads por anos." },
                { title: "Associação de Marca", desc: "Sua empresa ligada à imagem de autoridade e seriedade técnica do Aldo Ramos." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="text-brand-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue text-xl mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://img.youtube.com/vi/kYbIRragW54/maxresdefault.jpg" className="rounded-3xl shadow-lg border-4 border-white" alt="Showcase 1" />
              <div className="bg-brand-gold p-8 rounded-3xl text-white">
                <Star className="mb-4" />
                <p className="font-bold text-lg italic">"A maior conversão que já tive em canais digitais."</p>
                <p className="text-xs mt-4 opacity-70">— Parceiro Master</p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
               <div className="bg-brand-blue p-8 rounded-3xl text-white">
                <Users className="mb-4" />
                <p className="font-bold text-lg">Público Fiel</p>
                <p className="text-xs mt-4 opacity-70">Engajamento orgânico real.</p>
              </div>
              <img src="https://img.youtube.com/vi/E9wDDUe1JXE/maxresdefault.jpg" className="rounded-3xl shadow-lg border-4 border-white" alt="Showcase 2" />
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="container mx-auto px-4 md:px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-brand-blue mb-4">Escolha seu nível de impacto</h2>
          <p className="text-gray-600">Formatos pensados para cada objetivo de marketing.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-[40px] border flex flex-col h-full transition-all duration-500 hover:-translate-y-4 ${
                plan.highlight 
                ? 'bg-brand-blue text-white border-brand-blue shadow-2xl scale-105 z-10' 
                : 'bg-white text-brand-blue border-brand-border hover:shadow-xl'
              }`}
            >
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${plan.highlight ? 'text-brand-gold' : 'text-gray-400'}`}>
                {plan.tag}
              </span>
              <h3 className="text-3xl font-black mb-8">{plan.name}</h3>
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium">
                    <div className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? 'bg-brand-gold' : 'bg-brand-blue'}`}></div>
                    {f}
                  </li>
                ))}
              </ul>
              <a 
                href={whatsappPatrocinioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-2xl font-black text-center transition-all flex items-center justify-center gap-2 ${
                  plan.highlight 
                  ? 'bg-brand-gold text-white hover:brightness-110' 
                  : 'bg-brand-blue text-white hover:bg-opacity-90'
                }`}
              >
                Solicitar Cota <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-brand-light rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden border border-brand-border">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-brand-blue mb-8 leading-tight">
              Vamos construir o próximo degrau da sua marca juntos?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Temos um limite de cotas por semestre para garantir a exclusividade e o resultado de nossos parceiros. Não fique de fora.
            </p>
            <a 
              href={whatsappPatrocinioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue text-white px-12 py-6 rounded-2xl font-black text-xl inline-flex items-center gap-4 shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              Falar com Comercial <MessageSquare size={24} />
            </a>
            <div className="mt-12 flex items-center justify-center gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
               <span className="flex items-center gap-2"><ShieldCheck size={16} /> Parceiros Selecionados</span>
               <span className="flex items-center gap-2"><Zap size={16} /> Resultado Mensurável</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsorship;
