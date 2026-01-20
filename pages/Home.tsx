
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Mic, Star, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { EPISODES as MOCK_EPISODES, BLOG_POSTS, TESTIMONIALS } from '../constants';
import { Episode } from '../types';
import EpisodeCard from '../components/EpisodeCard';
import PostCard from '../components/PostCard';

const Home: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>(MOCK_EPISODES);
  
  useEffect(() => {
    const saved = localStorage.getItem('pod_episodes');
    if (saved) {
      const parsedSaved: Episode[] = JSON.parse(saved);
      const merged = [...MOCK_EPISODES];
      parsedSaved.forEach(savedEp => {
        if (!merged.find(m => m.id === savedEp.id)) {
          merged.push(savedEp);
        }
      });
      setEpisodes(merged);
    }
  }, []);

  const latestEpisode = episodes.find(e => e.id === 'kYbIRragW54') || episodes[0] || MOCK_EPISODES[0];
  const featuredEpisodes = episodes.slice(0, 6);
  const recentPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="space-y-24 pb-24">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <span className="inline-block bg-brand-light text-brand-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                🚀 O Podcast da Engenharia Prática
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-brand-blue leading-[1.1] mb-6">
                Estratégia, execução e visão viram <span className="text-brand-gold">resultado.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Aprenda o que não ensinam na faculdade: os bastidores de obras reais, gestão estratégica e o mindset para escalar sua carreira e negócios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={latestEpisode.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
                >
                  <Play size={20} fill="currentColor" /> Assistir último episódio
                </a>
                <Link to="/episodios" className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                  Ver todos episódios
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-light rounded-full blur-3xl opacity-60"></div>
              
              <Link to="/sobre" className="relative max-w-md mx-auto block group cursor-pointer" title="Saiba mais sobre Aldo Ramos">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-brand-gold/20">
                  <img 
                    src="https://iili.io/fUf301j.jpg" 
                    alt="Aldo Ramos - Escadas para o Sucesso" 
                    className="w-full h-auto object-cover transition-all duration-700 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="absolute bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl hidden md:block border border-brand-border animate-in slide-in-from-left duration-700 group-hover:-translate-y-2 transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white shadow-lg">
                      <Mic size={24} />
                    </div>
                    <div>
                      <p className="font-black text-brand-blue text-sm uppercase tracking-tight">Novos episódios</p>
                      <p className="text-xs text-brand-gold font-bold">Toda Quinta Feira às 19h</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-brand-gold text-white px-4 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  Conheça o Aldo
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST EPISODE HIGHLIGHT */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-brand-blue rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-video lg:aspect-auto">
            <img src={latestEpisode.coverImage} alt={latestEpisode.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-16 text-white flex flex-col justify-center">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">Último Lançamento</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">{latestEpisode.title}</h2>
            <div className="flex items-center gap-4 mb-6">
              <Link to="/sobre">
                <img src="https://iili.io/fUf301j.jpg" className="w-12 h-12 rounded-full border-2 border-brand-gold object-cover hover:scale-110 transition-transform cursor-pointer" alt={latestEpisode.guest} />
              </Link>
              <div>
                <p className="font-bold">{latestEpisode.guest}</p>
                <p className="text-xs text-white text-opacity-70">Convidado especial</p>
              </div>
            </div>
            <p className="text-white text-opacity-80 mb-8 leading-relaxed">
              {latestEpisode.shortDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={latestEpisode.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-blue px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
              >
                <Play size={20} fill="currentColor" /> Assistir agora no YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EPISODES */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-black text-brand-blue mb-2">Episódios Recentes</h2>
            <p className="text-gray-600">Conteúdo prático para transformar sua visão de mercado.</p>
          </div>
          <Link to="/episodios" className="text-brand-blue font-bold flex items-center gap-2 group">
            Ver todos episódios <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEpisodes.map(ep => (
            <EpisodeCard key={ep.id} episode={ep} />
          ))}
        </div>
      </section>

      {/* RECENT BLOG POSTS */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-black text-brand-blue mb-2">Insights do Blog</h2>
            <p className="text-gray-600">Leituras rápidas para quem não tem tempo a perder.</p>
          </div>
          <Link to="/blog" className="text-brand-blue font-bold flex items-center gap-2 group">
            Ir para o blog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-brand-light py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-brand-blue mb-4">O que dizem os ouvintes</h2>
            <p className="text-gray-600">A experiência de quem aplica os conhecimentos do podcast no dia a dia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm">
                <div className="flex gap-1 text-brand-gold mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xs uppercase">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-brand-blue text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-brand-blue rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Sua obra ou carreira precisa de um upgrade?</h2>
            <p className="text-white text-opacity-80 mb-10 text-lg">
              Junte-se a milhares de profissionais que recebem insights exclusivos diretamente no e-mail. Sem spam, apenas estratégia pura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-grow bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl px-6 py-4 outline-none focus:bg-opacity-20 transition-all text-white placeholder:text-white placeholder:text-opacity-50"
              />
              <button className="bg-brand-gold text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-all">
                Assinar agora
              </button>
            </div>
            <p className="mt-6 text-xs text-white text-opacity-50 flex items-center justify-center gap-2">
              <ShieldCheck size={14} /> Seus dados estão seguros conosco.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
