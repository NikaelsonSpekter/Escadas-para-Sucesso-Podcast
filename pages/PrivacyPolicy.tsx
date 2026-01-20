
import React from 'react';
import { ShieldCheck, Lock, Eye } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-blue mx-auto mb-6">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-brand-blue mb-4">Política de Privacidade</h1>
          <p className="text-gray-500">Última atualização: 20 de Fevereiro de 2025</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-black text-brand-blue mb-4 flex items-center gap-2">
              <Eye className="text-brand-gold" size={24} /> 1. Introdução
            </h2>
            <p>
              O <strong>Escadas para o Sucesso Podcast</strong>, liderado por Aldo Ramos, valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você visita nosso site e utiliza nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-blue mb-4">2. Coleta de Informações</h2>
            <p>Coletamos informações que você nos fornece diretamente, como:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome e e-mail ao assinar nossa newsletter;</li>
              <li>Dados de contato (e-mail, telefone, empresa) ao preencher formulários de parceria ou contato;</li>
              <li>Sugestões de convidados enviadas via formulário ou links externos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-blue mb-4 flex items-center gap-2">
              <Lock className="text-brand-gold" size={24} /> 3. Uso das Informações
            </h2>
            <p>As informações coletadas são utilizadas para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enviar atualizações sobre novos episódios e artigos do blog;</li>
              <li>Responder a solicitações comerciais e de patrocínio;</li>
              <li>Melhorar a experiência de navegação em nosso site através de análises anônimas;</li>
              <li>Processar sugestões de convidados e interações com a audiência.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-blue mb-4">4. Proteção de Dados (LGPD)</h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), garantimos que seus dados pessoais são tratados com transparência e segurança. Você tem o direito de solicitar a exclusão de seus dados ou a revogação do consentimento para envio de newsletters a qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-blue mb-4">5. Cookies</h2>
            <p>
              Utilizamos cookies para entender como os visitantes interagem com o site. Você pode optar por desativar os cookies nas configurações do seu navegador, embora isso possa afetar algumas funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-blue mb-4">6. Contato</h2>
            <p>
              Para dúvidas sobre esta política, entre em contato via e-mail: <span className="text-brand-blue font-bold">contato@escadasparasucesso.com.br</span> ou pelo endereço físico no Edifício The Office, São Caetano do Sul - SP.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
