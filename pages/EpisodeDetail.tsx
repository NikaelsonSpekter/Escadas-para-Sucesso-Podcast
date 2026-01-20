
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Share2, ArrowLeft, Play, Youtube } from 'lucide-react';
import { EPISODES as MOCK_EPISODES } from '../constants';
import { Episode } from '../types';
import EpisodeCard from '../components/EpisodeCard';

const EpisodeDetail: React.FC = () => {
  const { slug } = useParams();
  const [episode, setEpisode] = useState<Episode | undefined>(undefined);
  const [allEpisodes, setAllEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('pod_episodes');
    let source = [...MOCK_EPISODES];
    
    if (saved) {
      const parsedSaved: Episode[] = JSON.parse(saved);
      parsedSaved.forEach(savedEp => {
        const isAlreadyInMock = MOCK_EPISODES.find(m => m.id === savedEp.id);
        if (!isAlreadyInMock) {
          source.push(savedEp);
        } else {
          const index = source.findIndex(s => s.id === savedEp.id);
          if (index !== -1) source[index] = MOCK_EPISODES.find(m => m.id === savedEp.id)!;
        }
      });
    }
    
    setAllEpisodes(source);
    const found = source.find((e: Episode) => e.slug === slug);
    setEpisode(found);
  }, [slug]);

  if (!episode) return <div className="pt-40 text-center">Episódio não encontrado.</div>;

  const relatedEpisodes = allEpisodes.filter(e => e.id !== episode.id).slice(0, 3);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/episodios" className="inline-flex items-center gap-2 text-brand-blue font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> Voltar para episódios
        </Link>

        {/* Player Section */}
        <div className="mb-12">
          {episode.youtubeUrl ? (
            <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-black border-4 border-brand-blue border-opacity-10 relative">
              <iframe 
                width="100%" 
                height="100%" 
                src={episode.youtubeUrl} 
                title="YouTube video player"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          ) : (
            <div className="bg-brand-light aspect-video rounded-3xl flex items-center justify-center">
               <p className="text-gray-400">Embed do player não disponível.</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2 mb-6">
              {episode.categories.map(cat => (
                <span key={cat} className="bg-brand-light text-brand-blue px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-brand-blue mb-6 leading-tight">
              {episode.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-brand-border pb-8 mb-8">
              <span className="flex items-center gap-2 font-bold text-brand-blue text-lg"><User size={20} /> {episode.guest}</span>
              <button className="flex items-center gap-2 ml-auto text-brand-gold hover:underline"><Share2 size={18} /> Compartilhar</button>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12">
              <h3 className="text-xl font-bold text-brand-blue mb-4">Sobre este episódio</h3>
              <p className="mb-6">{episode.fullDesc || episode.shortDesc}</p>
              
              <h3 className="text-xl font-bold text-brand-blue mb-4">Notas do Show</h3>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>O mindset de crescimento para o engenheiro moderno.</li>
                <li>A importância de entender de negócios para escalar na carreira.</li>
                <li>Estratégias reais aplicadas no mercado brasileiro.</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-blue mb-4">Links e referências</h3>
              <ul className="space-y-1">
                <li><a href={`https://www.youtube.com/watch?v=${episode.id}`} target="_blank" rel="noopener noreferrer" className="text-brand-blue underline font-bold">Assistir no YouTube</a></li>
                <li><a href="https://www.youtube.com/@escadasparaosucessopodcast" target="_blank" rel="noopener noreferrer" className="text-brand-blue underline">Canal Oficial do Podcast</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-brand-light p-8 rounded-2xl border border-brand-border">
              <h4 className="font-bold text-brand-blue mb-6">Assista e Ouça</h4>
              <div className="space-y-3">
                <a href="https://www.youtube.com/@escadasparaosucessopodcast" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-brand-border hover:border-brand-blue transition-all group">
                  <span className="font-bold text-sm flex items-center gap-2 text-brand-blue">
                    <Youtube size={18} /> YouTube Oficial
                  </span>
                  <Play size={16} className="text-brand-blue opacity-100 transition-opacity" />
                </a>
                <a href="#" className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-brand-border hover:border-brand-blue transition-all group opacity-60">
                  <span className="font-bold text-sm">YouTube Music</span>
                  <Play size={16} className="text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            <div className="bg-brand-blue p-8 rounded-2xl text-white">
              <h4 className="font-bold mb-4">Gostou deste episódio?</h4>
              <p className="text-sm text-white text-opacity-80 mb-6">Assine nossa newsletter para não perder os próximos insights.</p>
              <input type="email" placeholder="E-mail" className="w-full p-3 rounded-lg text-brand-neutral mb-4 outline-none" />
              <button className="w-full bg-brand-gold py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all">Assinar</button>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-24">
          <h2 className="text-2xl font-black text-brand-blue mb-8">Outros Episódios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedEpisodes.map(ep => (
              <EpisodeCard key={ep.id} episode={ep} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetail;
