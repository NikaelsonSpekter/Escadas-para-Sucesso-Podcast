
import React, { useState, useMemo, useEffect } from 'react';
import { Search, RefreshCw, Youtube } from 'lucide-react';
import { EPISODES as MOCK_EPISODES } from '../constants';
import { fetchYouTubeEpisodes } from '../services/gemini';
import { Episode } from '../types';
import EpisodeCard from '../components/EpisodeCard';

const CATEGORIES = ['Tudo', 'Engenharia', 'Negócios', 'Gestão', 'Obras', 'Materiais', 'Carreira'];

const Episodes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tudo');
  const [episodes, setEpisodes] = useState<Episode[]>(MOCK_EPISODES);
  const [isLoading, setIsLoading] = useState(false);

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
    } else {
      setEpisodes(MOCK_EPISODES);
    }
  }, []);

  const handleSync = async () => {
    setIsLoading(true);
    try {
      const liveEpisodes = await fetchYouTubeEpisodes();
      if (liveEpisodes.length > 0) {
        const merged = [...MOCK_EPISODES];
        liveEpisodes.forEach(liveEp => {
           if (!merged.find(m => m.id === liveEp.id)) {
             merged.push(liveEp);
           }
        });
        setEpisodes(merged);
        localStorage.setItem('pod_episodes', JSON.stringify(merged));
      }
    } catch (error) {
      console.error("Sync error:", error);
      setEpisodes(MOCK_EPISODES);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredEpisodes = useMemo(() => {
    return episodes.filter(ep => {
      const matchesSearch = ep.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            ep.guest.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Tudo' || ep.categories.includes(activeCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory, episodes]);

  return (
    <div className="pt-32 pb-24 container mx-auto px-4 md:px-6">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-brand-blue mb-4">Todos os Episódios</h1>
          <p className="text-gray-600 max-w-2xl">Clique em qualquer episódio para assistir diretamente no canal oficial do YouTube.</p>
        </div>
        <button 
          onClick={handleSync}
          disabled={isLoading}
          className="flex items-center gap-2 bg-brand-gold text-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all disabled:opacity-50 shadow-lg"
        >
          {isLoading ? <RefreshCw className="animate-spin" size={20} /> : <Youtube size={20} />}
          {isLoading ? 'Sincronizando...' : 'Sincronizar YouTube'}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 justify-between items-center mb-12 bg-brand-light p-6 rounded-2xl border border-brand-border">
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-brand-blue text-white' 
                : 'bg-white text-gray-500 hover:text-brand-blue border border-brand-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-96">
          <input 
            type="text" 
            placeholder="Buscar por título ou convidado..." 
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-brand-border outline-none focus:border-brand-blue shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {filteredEpisodes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
          {filteredEpisodes.map(ep => (
            <EpisodeCard key={ep.id} episode={ep} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">Nenhum episódio encontrado para sua busca.</p>
          <button onClick={() => {setSearchTerm(''); setActiveCategory('Tudo');}} className="mt-4 text-brand-blue font-bold underline">Limpar filtros</button>
        </div>
      )}
    </div>
  );
};

export default Episodes;
