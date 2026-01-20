
import React from 'react';
import { BLOG_POSTS } from '../constants';
import PostCard from '../components/PostCard';
import { Search } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-24 container mx-auto px-4 md:px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-brand-blue mb-4">Artigos & Insights</h1>
        <p className="text-gray-600">Conteúdo estratégico e técnico focado em resultados reais para o mundo da engenharia e dos negócios.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="relative">
            <input type="text" placeholder="Buscar no blog..." className="w-full p-4 pl-12 rounded-xl border border-brand-border outline-none focus:border-brand-blue" />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>

          <div className="bg-brand-light p-8 rounded-2xl border border-brand-border">
            <h4 className="font-bold text-brand-blue mb-4">Categorias</h4>
            <ul className="space-y-2">
              {['Engenharia', 'Gestão', 'Carreira', 'Obras', 'Materiais'].map(cat => (
                <li key={cat}><a href="#" className="text-sm text-gray-600 hover:text-brand-blue font-medium">{cat}</a></li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-gold p-8 rounded-2xl text-white">
            <h4 className="font-bold mb-4">Direto ao ponto</h4>
            <p className="text-sm opacity-90 mb-6">Assine para receber artigos estratégicos toda semana.</p>
            <button className="w-full bg-brand-blue py-3 rounded-lg font-bold">Assinar Grátis</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
