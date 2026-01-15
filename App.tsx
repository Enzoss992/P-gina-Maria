import React from 'react';
import OfferBox from './components/OfferBox';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import SalesNotification from './components/SalesNotification';
import AuthorSection from './components/AuthorSection';
import IdealForSection from './components/IdealForSection';
import ProductContentsSection from './components/ProductContentsSection';
import BonusSection from './components/BonusSection';
import { FEATURES } from './constants';

const App: React.FC = () => {
  const scrollToPlans = () => {
    const el = document.getElementById('escolha-seu-plano');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('pt-BR');
  };

  const MONTH_COVERS = [
    { name: 'Jan', url: 'https://i.imgur.com/wC8nK91.png' },
    { name: 'Fev', url: 'https://i.imgur.com/LDbd4di.png' },
    { name: 'Mar', url: 'https://i.imgur.com/18Z4DXE.png' },
    { name: 'Abr', url: 'https://i.imgur.com/3fQQO93.png' },
    { name: 'Mai', url: 'https://i.imgur.com/SjxLjrC.png' },
    { name: 'Jun', url: 'https://i.imgur.com/Xudvbk2.png' },
    { name: 'Jul', url: 'https://i.imgur.com/SnCRn1I.png' },
  ];

  const marqueeItems = [...MONTH_COVERS, ...MONTH_COVERS, ...MONTH_COVERS];

  // Avatares para prova social
  const AVATARS = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop"
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden selection:bg-yellow-400 selection:text-blue-900 bg-[#1d1d1d]">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_#2a2a2a_0%,_#1d1d1d_100%)] -z-10 opacity-50 pointer-events-none"></div>

      {/* Ribbon Superior - Oferta */}
      <div className="bg-red-600 text-white text-center py-2 px-2 font-normal text-[12px] xs:text-[14px] sm:text-[22px] md:text-[28px] lg:text-[38px] xl:text-[45px] shadow-xl relative z-50 uppercase whitespace-nowrap overflow-hidden">
        ⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE <span className="underline decoration-white/40">{getCurrentDate()}</span>
      </div>

      <header className="px-4 pt-6 pb-0 text-center max-w-5xl mx-auto">
        {/* Título Principal */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 tracking-tight">
          Devocional diário <span className="text-yellow-300">365 dias com maria</span> - Edição 2026
        </h1>

        {/* Mockup LCP */}
        <div className="relative flex justify-center pt-2 mb-4 w-full">
          <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full scale-110"></div>
          <img 
            src="https://i.imgur.com/8squ2g7.png" 
            alt="Devocional 365 Dias com Maria Bundle" 
            className="w-full max-w-4xl h-auto relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            width="1200"
            height="800"
            fetchpriority="high"
            loading="eager"
            decoding="sync"
          />
        </div>

        {/* Subheadline Persuasiva: Fonte Regular e Cor Viva */}
        <h2 className="text-lg md:text-2xl font-normal leading-relaxed mb-6 max-w-4xl mx-auto text-white">
          Descubra o devocional simples que <span className="text-yellow-400">aprofunda sua fé todos os dias</span>, fortalecendo sua <span className="text-yellow-400">espiritualidade com Maria</span> e sua <span className="text-yellow-400">caminhada com Cristo</span>.
        </h2>

        <div className="mb-2">
          <button 
            onClick={scrollToPlans}
            className="w-full max-w-md bg-[#2dd461] hover:bg-[#28c055] text-white font-bold text-lg md:text-xl py-5 rounded-2xl shadow-2xl transition-all animate-pulse-button uppercase tracking-tight"
          >
            GARANTIR MINHA EDIÇÃO 2026
          </button>
        </div>
      </header>

      {/* Seção Visual - Prova Social */}
      <section className="px-4 py-8 text-center bg-[#1d1d1d] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-[14px] md:text-lg font-normal text-white mb-2 leading-snug">
            Você recebe tudo na hora, direto no seu <span className="inline-flex items-center gap-1.5 font-normal"><i className="fa-brands fa-whatsapp text-[#25d366] text-xl"></i> WhatsApp</span> <br className="hidden md:block" /> e no seu <span className="inline-flex items-center gap-1.5 font-normal"><i className="fa-solid fa-square-envelope text-red-500 text-xl"></i> e-mail</span>
          </p>

          <div className="flex justify-center -space-x-4 mb-2">
            {AVATARS.map((url, i) => (
              <img 
                key={i} 
                src={url} 
                className="w-10 h-10 md:w-16 md:h-16 rounded-full border-4 border-[#1d1d1d] object-cover shadow-lg" 
                alt="Cliente"
              />
            ))}
          </div>

          <p className="text-[10px] md:text-lg font-bold text-white/70 tracking-[0.2em] uppercase transition-all">
            MAIS DE 1.000 CLIENTES!
          </p>
        </div>
      </section>

      {/* BLOCO SELECIONADO NA COR PRETA #000000 */}
      <section className="py-16 text-center bg-[#000000] border-y border-white/10">
        <div className="max-w-4xl mx-auto mb-12 px-4">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
            Veja um dos materiais que você vai receber na prática:
          </h3>
        </div>
        
        {/* Carrossel de Capas */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee gap-6 flex">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="w-48 md:w-72 shrink-0">
                <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5">
                  <img 
                    src={item.url} 
                    alt={`Capa ${item.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="288"
                    height="512"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características do Produto */}
      <section className="px-6 py-12 bg-[#fefaf9] relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-10 text-[#2c1810] leading-tight">
            O que você <span className="text-red-600 block sm:inline">vai aprender</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col items-center text-center transition-transform hover:scale-[1.02]">
                <div className="text-5xl mb-6">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-2xl mb-4 text-[#6b3e2e]">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed font-normal text-lg">
                  {feature.description.split(' ').map((word, i) => {
                    const isKeyword = ["virtudes", "Deus", "fé", "confiança", "caminhada", "Cristo", "Palavra"].some(k => word.toLowerCase().includes(k.toLowerCase()));
                    return isKeyword ? <strong key={i} className="text-gray-800 font-bold">{word} </strong> : word + " ";
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nova Seção: Ideal para você que deseja */}
      <IdealForSection />

      {/* Seção baseada nos anexos enviados */}
      <ProductContentsSection />

      <main className="px-4 py-12">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* BonusSection adicionada acima da escolha de planos conforme solicitado */}
          <BonusSection />

          <div id="escolha-seu-plano" className="mb-10 scroll-mt-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white">Escolha seu plano</h2>
            <p className="text-lg opacity-60 italic text-white/60">Acesso imediato para começar sua jornada</p>
          </div>

          <OfferBox />
          
          <div className="my-10 flex flex-col items-center gap-6 opacity-30">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Ambiente 100% Seguro</p>
            <div className="flex gap-6 text-2xl text-white">
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-solid fa-barcode"></i>
              <i className="fa-solid fa-pix"></i>
            </div>
          </div>

          <GuaranteeSection />
          <AuthorSection />
          <FAQSection />
        </div>
      </main>

      <footer className="py-10 px-6 bg-[#000d1a] text-center text-white/30 text-sm border-t border-white/5">
        <p className="text-lg text-white/50 mb-3 font-bold italic">"A minha alma engrandece ao Senhor"</p>
        <p>&copy; 2026 Devocional 365 Dias com Maria. Todos os direitos reservados.</p>
      </footer>

      <SalesNotification />
    </div>
  );
};

export default App;