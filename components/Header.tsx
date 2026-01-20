
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Play } from 'lucide-react';
import { EPISODES } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Episódios', path: '/episodios' },
    { name: 'Blog', path: '/blog' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Anuncie', path: '/patrocinar' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const latestEpisodeUrl = EPISODES[0]?.youtubeUrl || 'https://www.youtube.com/@escadasparaosucessopodcast';
  const whatsappSugerirUrl = "https://wa.me/5511988284715?text=Olá,%20gostaria%20de%20sugerir%20um%20convidado%20para%20o%20podcast%20Escadas%20para%20o%20Sucesso.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-brand-border h-20 flex items-center">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group transition-transform duration-300 active:scale-95">
          <div className="w-12 h-12 flex items-center justify-center shrink-0">
            <img 
              src="https://iili.io/fgg30iB.png" 
              alt="Logo Escadas para o Sucesso" 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-black text-brand-blue text-[13px] sm:text-sm uppercase tracking-[0.1em]">
              Escadas para o
            </span>
            <span className="font-display font-black text-brand-gold text-xl sm:text-2xl uppercase tracking-tighter -mt-1.5">
              Sucesso
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold transition-colors hover:text-brand-gold ${
                isActive(link.path) ? 'text-brand-blue' : 'text-gray-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/patrocinar"
            className="text-sm font-black text-brand-blue hover:text-brand-gold transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold after:transition-all hover:after:w-full"
          >
            Quero patrocinar
          </Link>
          <a
            href={latestEpisodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue text-white px-6 py-3 rounded-xl text-sm font-black flex items-center gap-2 hover:bg-brand-gold transition-all shadow-lg hover:shadow-brand-gold/20"
          >
            <Play size={16} fill="currentColor" />
            Assistir último
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-brand-blue p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-brand-border p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-black ${
                isActive(link.path) ? 'text-brand-gold' : 'text-brand-blue'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-brand-border" />
          <a
            href={latestEpisodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue text-white w-full py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 shadow-md"
            onClick={() => setIsOpen(false)}
          >
            <Play size={18} fill="currentColor" />
            Assistir último episódio
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
