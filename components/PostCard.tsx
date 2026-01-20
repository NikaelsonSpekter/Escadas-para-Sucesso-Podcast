
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { Ruler, Layers } from 'lucide-react';

interface Props {
  post: BlogPost;
}

const PostCard: React.FC<Props> = ({ post }) => {
  // Pega a primeira parte da categoria para exibir no destaque
  const mainCategory = post.category.split('•')[0].trim().toUpperCase();

  return (
    <div className="group bg-white rounded-2xl border border-brand-border overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      {post.coverImage ? (
        <div className="overflow-hidden h-48">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-full h-48 bg-brand-blue flex items-center justify-center relative overflow-hidden">
          {/* Grid de Engenharia / Blueprint Pattern */}
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>
          
          {/* Elemento de Escada Estilizado (SVG sutil) */}
          <div className="absolute inset-0 flex items-end justify-start opacity-10 pointer-events-none">
             <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,100 L20,100 L20,80 L40,80 L40,60 L60,60 L60,40 L80,40 L80,20 L100,20" fill="none" stroke="white" strokeWidth="0.5" />
             </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-brand-gold font-display font-black text-3xl md:text-4xl opacity-40 uppercase tracking-[0.2em] transform -rotate-3 transition-transform group-hover:rotate-0 duration-500">
              {mainCategory}
            </span>
            <div className="mt-2 h-1 w-12 bg-brand-gold opacity-30 rounded-full"></div>
          </div>
          
          <Ruler size={40} className="text-white absolute top-4 right-4 opacity-10 rotate-45" />
          <Layers size={80} className="text-white absolute -bottom-6 -left-6 opacity-5" />
        </div>
      )}
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] bg-brand-light px-2 py-1 rounded">
            {mainCategory}
          </span>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.readingTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-brand-blue mb-3 leading-tight group-hover:text-brand-gold transition-colors duration-300">
          {post.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {post.summary}
        </p>
        
        <div className="mt-auto pt-4 border-t border-brand-border border-dashed">
          <Link 
            to={`/blog/${post.slug}`}
            className="text-xs font-black text-brand-blue uppercase tracking-widest hover:text-brand-gold transition-colors inline-flex items-center gap-2 group/link"
          >
            Ler artigo completo 
            <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
