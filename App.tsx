
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Episodes from './pages/Episodes.tsx';
import Blog from './pages/Blog.tsx';
import PostDetail from './pages/PostDetail.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import MediaKit from './pages/MediaKit.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfUse from './pages/TermsOfUse.tsx';
import Sponsorship from './pages/Sponsorship.tsx';
import EpisodeDetail from './pages/EpisodeDetail.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodios" element={<Episodes />} />
            <Route path="/episodios/:slug" element={<EpisodeDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<PostDetail />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/anuncie" element={<MediaKit />} />
            <Route path="/patrocinar" element={<Sponsorship />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos" element={<TermsOfUse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
