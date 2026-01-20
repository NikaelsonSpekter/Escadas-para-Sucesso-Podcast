
import React from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Episode } from '../types';

interface Props {
  episode: Episode;
}

const EpisodeCard: React.FC<Props> = ({ episode }) => {
  return (
    <div className="group bg-white rounded-2xl border border-brand-border overflow-hidden hover:shadow-xl transition-all duration-300">
      <a 
        href={episode.youtubeUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block relative aspect-video overflow-hidden"
      >
        <img 
          src={episode.coverImage} 
          alt={episode.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
          <div className="bg-white text-brand-blue p-4 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-2xl">
            <Play size={24} fill="currentColor" />
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-brand-blue text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-lg">
            {episode.categories[0]}
          </span>
        </div>
      </a>
      <div className="p-6">
        <a 
          href={episode.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-lg font-bold text-brand-blue mb-3 group-hover:text-brand-gold transition-colors line-clamp-2 leading-tight">
            {episode.title}
          </h3>
        </a>
        <p className="text-sm text-gray-600 mb-6 line-clamp-2">
          {episode.shortDesc}
        </p>
        <a 
          href={episode.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm group-hover:gap-3 transition-all"
        >
          Assistir no YouTube <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default EpisodeCard;
