
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappSugerirUrl = "https://wa.me/5511988284715?text=Olá,%20gostaria%20de%20sugerir%20um%20convidado%20para%20o%20podcast%20Escadas%20para%20o%20Sucesso.";
  const youtubeUrl = "https://www.youtube.com/@escadasparaosucessopodcast";
  const instagramUrl = "https://www.instagram.com/escadasparaosucessopodcast/";
  const emailUrl = "mailto:escadasparaosucessopodcast@gmail.com";

  return (
    <footer className="bg-brand-light pt-16 pb-8 border-t border-brand-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img 
                  src="https://iili.io/fgg30iB.png" 
                  alt="Logo Escadas para o Sucesso" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-brand-blue text-[11px] uppercase tracking-wider">
                  Escadas para o
                </span>
                <span className="font-display font-black text-brand-gold text-lg uppercase tracking-tighter">
                  Sucesso
                </span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs font-medium">
              Onde estratégia, execução e visão viram resultado real no mundo da engenharia e dos negócios.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white border border-brand-border rounded-xl flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white border border-brand-border rounded-xl flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm"
                title="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white border border-brand-border rounded-xl flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm"
                title="LinkedIn (Redirect to Instagram)"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={emailUrl} 
                className="w-10 h-10 bg-white border border-brand-border rounded-xl flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm"
                title="E-mail"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-brand-blue uppercase tracking-widest text-[10px] mb-8">Podcast</h4>
            <ul className="space-y-4">
              <li><Link to="/episodios" className="text-gray-600 hover:text-brand-gold text-sm font-bold transition-colors">Todos os Episódios</Link></li>
              <li><Link to="/sobre" className="text-gray-600 hover:text-brand-gold text-sm font-bold transition-colors">Sobre o Aldo</Link></li>
              <li><Link to="/patrocinar" className="text-gray-600 hover:text-brand-gold text-sm font-bold transition-colors">Anuncie Conosco</Link></li>
              <li><a href={whatsappSugerirUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-gold text-sm font-bold transition-colors">Sugira um Convidado</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-black text-brand-blue uppercase tracking-widest text-[10px] mb-8">Informações</h4>
            <ul className="space-y-4">
              <li><Link to="/privacidade" className="text-gray-600 hover:text-brand-gold text-sm font-bold transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="text-gray-600 hover:text-brand-gold text-sm font-bold transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>

          {/* Newsletter (Footer version) */}
          <div>
            <h4 className="font-black text-brand-blue uppercase tracking-widest text-[10px] mb-8">Newsletter</h4>
            <p className="text-xs text-gray-500 mb-4 font-bold">Insights semanais direto no seu e-mail.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white border border-brand-border rounded-xl px-4 py-3 text-sm w-full outline-none focus:border-brand-blue transition-all"
              />
              <button className="bg-brand-blue text-white px-5 py-3 rounded-xl text-sm font-black hover:bg-brand-gold transition-all shadow-md">OK</button>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          <p>© 2024 Escadas para o Sucesso Podcast. Produzido por Aldo Ramos.</p>
          <p className="flex items-center gap-1">Engenharia <span className="text-brand-gold font-black">•</span> Negócios <span className="text-brand-gold font-black">•</span> Estratégia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
