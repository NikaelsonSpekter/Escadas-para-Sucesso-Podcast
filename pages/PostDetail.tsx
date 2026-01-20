
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from 'lucide-react';

const PostDetail: React.FC = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return <div className="pt-40 text-center font-bold text-brand-blue">Artigo não encontrado.</div>;

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-blue font-bold mb-8 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft size={20} /> Voltar para o blog
        </Link>

        <header className="mb-12">
          <div className="flex gap-4 items-center text-xs font-bold text-brand-gold uppercase tracking-widest mb-4">
            <span className="bg-brand-light px-3 py-1 rounded-full text-brand-blue">{post.category}</span>
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
            <span className="text-gray-400 flex items-center gap-1"><Clock size={14} /> {post.readingTime} de leitura</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-brand-blue mb-8 leading-[1.1]">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 pb-8 border-b border-brand-border">
            <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-xl shadow-lg">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-brand-blue text-lg">{post.author}</p>
              <p className="flex items-center gap-2 text-gray-400 font-medium"><Calendar size={14} /> {post.date}</p>
            </div>
            <button className="ml-auto p-3 rounded-xl bg-brand-light text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm">
              <Share2 size={22} />
            </button>
          </div>
        </header>

        <article className="prose prose-lg prose-slate max-w-none text-gray-700 leading-relaxed mb-16 
          prose-headings:text-brand-blue prose-headings:font-black 
          prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-8 prose-h3:tracking-tight
          prose-p:mb-8 prose-p:text-lg prose-p:leading-relaxed
          prose-li:mb-4 prose-strong:text-brand-blue prose-strong:font-extrabold 
          prose-blockquote:border-brand-gold prose-blockquote:bg-brand-light prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:not-italic">
          
          <div className="text-2xl font-medium text-brand-blue mb-16 italic border-l-8 border-brand-gold pl-8 leading-relaxed py-2">
            {post.summary}
          </div>
          
          <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Insight Block */}
          <div className="my-20 bg-brand-blue p-10 md:p-14 rounded-3xl text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <BookOpen size={60} className="text-brand-gold opacity-20 absolute -bottom-4 -left-4 rotate-12" />
            
            <h4 className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs mb-6">💡 Visão Aldo Ramos</h4>
            <p className="font-bold text-2xl md:text-4xl italic leading-snug">
              "A excelência não é um ato isolado na obra, é um hábito de gestão que começa no primeiro cálculo e termina no último aperto de mão."
            </p>
          </div>
        </article>

        {/* CTA */}
        <div className="bg-brand-light border border-brand-border p-8 md:p-16 rounded-[40px] text-center shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue"></div>
          <h3 className="text-3xl md:text-4xl font-black text-brand-blue mb-6">Eleve o nível da sua engenharia</h3>
          <p className="mb-12 text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
            Receba estratégias exclusivas sobre engenharia de alto padrão e gestão de negócios diretamente no seu e-mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-1 p-5 rounded-2xl border border-brand-border outline-none focus:border-brand-blue shadow-inner bg-white" 
            />
            <button className="bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
              Assinar agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
