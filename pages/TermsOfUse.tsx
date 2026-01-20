
import React from 'react';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-blue mx-auto mb-6">
            <FileText size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-brand-blue mb-4">Termos de Uso</h1>
          <p className="text-gray-500">Última atualização: 20 de Fevereiro de 2025</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-black text-brand-blue mb-4 flex items-center gap-2">
              <CheckCircle className="text-brand-gold" size={24} /> 1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar o site do <strong>Escadas para o Sucesso Podcast</strong>, você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-blue mb-4">2. Licença de Uso</h2>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-blue mb-4">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponível no site, incluindo, mas não se limitando a, logotipos, textos, gráficos, imagens, áudios e vídeos (especialmente os episódios do podcast produzidos por Aldo Ramos), é de propriedade exclusiva do Escadas para o Sucesso ou de seus licenciadores e está protegido por leis de direitos autorais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-blue mb-4 flex items-center gap-2">
              <AlertCircle className="text-brand-gold" size={24} /> 4. Isenção de Responsabilidade
            </h2>
            <p>
              O conteúdo fornecido no podcast e no blog é para fins informativos e educacionais sobre engenharia e negócios. Embora Aldo Ramos seja um especialista, a aplicação de qualquer estratégia mencionada é de inteira responsabilidade do usuário, devendo sempre consultar um profissional habilitado para decisões técnicas específicas de obra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-blue mb-4">5. Links Externos</h2>
            <p>
              O Escadas para o Sucesso não revisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por parte do podcast.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-blue mb-4">6. Modificações</h2>
            <p>
              Podemos revisar estes termos de uso do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de uso.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
